using System.ComponentModel.DataAnnotations;

namespace WebApi.Dtos
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
