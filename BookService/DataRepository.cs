using ServiceStack.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack.OrmLite;

namespace BookService
{
    public class DataRepository
    {
        public IDbConnectionFactory DbConnectionFactory { get; set; }

        public int AddBook(Book request)
        {
            using (var db = DbConnectionFactory.OpenDbConnection())
            {
                db.CreateTable<Book>();
                if (request.Id == 0)
                {
                    db.Insert(request);
                }
                else
                {
                    db.Update(request);
                }
                return (int)db.LastInsertId();
            }
        }
    }
}