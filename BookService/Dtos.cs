using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookService
{
    [Route("/Book")]
    public class BookInformation
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public decimal Price { get; set; }

        
    }
}