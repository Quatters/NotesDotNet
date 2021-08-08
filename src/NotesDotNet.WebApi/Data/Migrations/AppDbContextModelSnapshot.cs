﻿// <auto-generated />
using System;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;

using NotesDotNet.WebApi.Data;

namespace WebApi.Migrations
{
	[DbContext(typeof(AppDbContext))]
	partial class AppDbContextModelSnapshot : ModelSnapshot
	{
		protected override void BuildModel(ModelBuilder modelBuilder)
		{
#pragma warning disable 612, 618
			modelBuilder
				.HasAnnotation("Relational:MaxIdentifierLength", 128)
				.HasAnnotation("ProductVersion", "5.0.8")
				.HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

			modelBuilder.Entity("WebApi.Domain.Entities.Note", b =>
				{
					b.Property<int>("Id")
						.ValueGeneratedOnAdd()
						.HasColumnType("int")
						.HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

					b.Property<string>("Author")
						.IsRequired()
						.HasMaxLength(16)
						.HasColumnType("nvarchar(16)");

					b.Property<string>("Body")
						.IsRequired()
						.HasMaxLength(256)
						.HasColumnType("nvarchar(256)");

					b.Property<DateTime>("DateModified")
						.HasColumnType("datetime2");

					b.HasKey("Id");

					b.ToTable("Notes");
				});
#pragma warning restore 612, 618
		}
	}
}
