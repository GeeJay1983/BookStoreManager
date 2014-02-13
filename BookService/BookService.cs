using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookService
{
    public class BookService
    {
        public DataRepository Repo { get; set; }

        public object Post(BookInformation submission)
        {
            var book = new Book()
            {
                Id = submission.Id,
                Title = submission.Title,
                Author = submission.Author,
                Price = submission.Price
            };
            int id = Repo.AddBook(book);
            return new { Id = id };
        }
    }
}