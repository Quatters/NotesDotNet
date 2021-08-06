using Microsoft.EntityFrameworkCore;

using WebApi.Domain.Entities;

namespace WebApi.Data
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions options) : base(options) { }

		public DbSet<Note> Notes { get; set; }
	}
}
