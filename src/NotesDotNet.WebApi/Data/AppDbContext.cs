using Microsoft.EntityFrameworkCore;

using NotesDotNet.WebApi.Models.Entities;

namespace NotesDotNet.WebApi.Data
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions options) : base(options) { }

		public DbSet<Note> Notes { get; set; }
	}
}
