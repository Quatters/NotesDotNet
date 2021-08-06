using System;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using WebApi.Data;
using WebApi.Domain.Entities;

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
		[Route("{author}")]
		public IActionResult GetByAuthor([FromRoute] string author)
		{
			var result = _context.Notes.Where(note => note.Author.ToLower() == author.ToLower());
			return Ok(result);
		}

		// TODO: refactor
		[HttpGet]
		[Route("{from}-{to}")]
		public IActionResult GetByDateRange([FromRoute] string from, string to)
		{
			var date = from.Split('.').Select(x => int.Parse(x));
			var fromDateTimeObj = new DateTime(date.First(), date.ElementAt(1), date.Last(), 0, 0, 0);

			date = to.Split('.').Select(x => int.Parse(x));
			var toDateTimeObj = new DateTime(date.First(), date.ElementAt(1), date.Last(), 23, 59, 59);

			var result = _context.Notes.Where(note => note.DateModified >= fromDateTimeObj && note.DateModified <= toDateTimeObj);

			return Ok(result);
		}

		// TODO: add Identity
		[HttpPost]
		public async Task<IActionResult> AddNote([FromQuery] string body)
		{
			Note note = new Note { Author = "anonymous", Body = body, DateModified = DateTime.Now };
			await _context.AddAsync(note);
			await _context.SaveChangesAsync();
			return Ok(note);
		}
	}
}
