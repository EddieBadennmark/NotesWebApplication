using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using NotesWebApplication.Models;

namespace NotesWebApplication.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<NotesWebApplication.Models.Note> Note { get; set; }
        public DbSet<NotesWebApplication.Models.Category> Category { get; set; }
    }
}
