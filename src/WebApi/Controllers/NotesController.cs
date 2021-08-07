using System;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using WebApi.Data;
using WebApi.Domain.Entities;
using WebApi.Dtos;

namespace WebApi.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class NotesController : ControllerBase
	{
		private readonly AppDbContext _context;

		public NotesController(AppDbContext context)
		{
			_context = context;
		}

		[HttpGet]
		public IActionResult GetAll()
		{
			var result = _context.Notes.OrderByDescending(note => note.DateModified);
			return Ok(result);
		}

		[HttpGet]
		[Route("Author")]
		public IActionResult GetByAuthor([FromQuery] string author)
		{
			var result = _context.Notes.Where(note => note.Author.ToLower() == author.ToLower());
			return Ok(result);
		}

		[HttpGet]
		[Route("Date")]
		public IActionResult GetByDateRange([FromQuery] string from, [FromQuery] string to)
		{
			try
			{
				var date = from.Split('.').Select(x => int.Parse(x));
				var fromDateTimeObj = new DateTime(date.First(), date.ElementAt(1), date.Last(), 0, 0, 0, 0);

				date = to.Split('.').Select(x => int.Parse(x));
				var toDateTimeObj = new DateTime(date.First(), date.ElementAt(1), date.Last(), 23, 59, 59, 999);

				var result = _context.Notes.Where(note => note.DateModified >= fromDateTimeObj && note.DateModified <= toDateTimeObj);

				return Ok(result);
			}
			catch (Exception ex)
			{
				if (ex is ArgumentOutOfRangeException) return BadRequest("Incorrect data format.");
			}

			return BadRequest("Unknown error.");
		}

		[HttpPost]
		[Route("New")]
		public async Task<IActionResult> AddNote([FromBody] NoteDto noteRequest)
		{
			string author = string.IsNullOrEmpty(noteRequest.Author) ? "Anonymous" : noteRequest.Author;
			var note = new Note { Author = author, Body = noteRequest.Body, DateModified = DateTime.UtcNow };
			await _context.AddAsync(note);
			await _context.SaveChangesAsync();
			return Ok(note);
		}
	}
}
