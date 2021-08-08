using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using NotesDotNet.WebApi.Data;
using NotesDotNet.WebApi.Models.Dtos;
using NotesDotNet.WebApi.Models.Entities;

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
		[Route("Search")]
		public IActionResult Get([FromQuery] string author, [FromQuery] string from, [FromQuery] string to)
		{
			try
			{
				var results = new List<IEnumerable<Note>>();

				if (author != null)
				{
					var notesWithAuthorQuery = _context.Notes.Where(note => note.Author.ToLower().StartsWith(author.ToLower()));
					if (!notesWithAuthorQuery.Any()) throw new KeyNotFoundException();

					results.Add(notesWithAuthorQuery);
				}

				if (from != null)
				{
					var fromDate = from.Split('-').Select(x => int.Parse(x));
					var fromDateTimeObj = new DateTime(fromDate.First(), fromDate.ElementAt(1), fromDate.Last(), 0, 0, 0, 0);

					var notesWithDateFromQuery = _context.Notes.Where(note => note.DateModified >= fromDateTimeObj);
					if (!notesWithDateFromQuery.Any()) throw new KeyNotFoundException();

					results.Add(notesWithDateFromQuery);
				}

				if (to != null)
				{
					var toDate = to.Split('-').Select(x => int.Parse(x));
					var toDateTimeObj = new DateTime(toDate.First(), toDate.ElementAt(1), toDate.Last(), 23, 59, 59, 999);

					var notesWithDateToQuery = _context.Notes.Where(note => note.DateModified <= toDateTimeObj);
					if (!notesWithDateToQuery.Any()) throw new KeyNotFoundException();

					results.Add(notesWithDateToQuery);
				}

				var nonEmptyLists = results.Where(list => list.Any());

				if (!nonEmptyLists.Any()) return BadRequest("Search parameters not specified.");

				var searchResult = nonEmptyLists.Aggregate((x, y) => x.Intersect(y)).OrderByDescending(note => note.DateModified);

				return Ok(searchResult);
			}
			catch (KeyNotFoundException)
			{
				return Ok(Array.Empty<object>());
			}
			catch (Exception ex)
			{
				return BadRequest(new object[]
				{
					"Wrong query. Date should be in YYYY-MM-DD format",
					ex
				});
			}
		}

		[HttpPost]
		[Route("New")]
		public async Task<IActionResult> AddNote([FromBody] NoteDto noteRequest)
		{
			return Ok("Post currently disabled."); // debug

			string author = string.IsNullOrEmpty(noteRequest.Author) ? "Anonymous" : noteRequest.Author;
			var note = new Note { Author = author, Body = noteRequest.Body, DateModified = DateTime.UtcNow };

			await _context.AddAsync(note);
			await _context.SaveChangesAsync();

			return Ok(note);
		}
	}
}
