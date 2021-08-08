using System;

using Microsoft.EntityFrameworkCore.Migrations;

namespace NotesDotNet.WebApi.Migrations
{
	public partial class Initial : Migration
	{
		protected override void Up(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.CreateTable(
				name: "Notes",
				columns: table => new
				{
					Id = table.Column<int>(type: "int", nullable: false)
						.Annotation("SqlServer:Identity", "1, 1"),
					Author = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: false),
					Body = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: false),
					DateModified = table.Column<DateTime>(type: "datetime2", nullable: false)
				},
				constraints: table =>
				{
					table.PrimaryKey("PK_Notes", x => x.Id);
				});
		}

		protected override void Down(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.DropTable(
				name: "Notes");
		}
	}
}
