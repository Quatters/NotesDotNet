using System.ComponentModel.DataAnnotations;

namespace NotesDotNet.WebApi.Models.Dtos
{
	public class NoteDto
	{
		[Required]
		[MaxLength(256)]
		public string Body { get; set; }

		[MaxLength(16)]
		public string Author { get; set; }
	}
}
