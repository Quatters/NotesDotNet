using System;

namespace WebApi.Domain.Entities
{
	public class Note
	{
		public int Id { get; set; }
		public string Author { get; set; }
		public string Body { get; set; }
		public DateTime DateModified { get; set; }
	}
}
