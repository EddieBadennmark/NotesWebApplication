using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesWebApplication.Models
{
    public class Category
    {
        public ICollection<Note> Notes { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public Category()
        {

        }
    }
}
