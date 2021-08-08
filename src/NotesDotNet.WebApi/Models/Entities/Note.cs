using System;
using System.ComponentModel.DataAnnotations;

namespace NotesDotNet.WebApi.Models.Entities
{
	public class Note
	{
		[Required]
		[Key]
		public int Id { get; set; }

		[Required]
		[MaxLength(16)]
		public string Author { get; set; }

		[Required]
		[MaxLength(256)]
		public string Body { get; set; }

		[Required]
		public DateTime DateModified { get; set; }
	}
}
