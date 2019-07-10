using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace PROJECT.Models {
    /**
    * DataContext class represents the connection with the DataBase
    will use it to access the different tables/classes
    will store and retrieve information/records
     */
    public class DataContext : DbContext {
        public DataContext (DbContextOptions<DataContext> options) : base (options) {

        }

        // Specify which classes will be related to DB tables
        public DbSet<Car> Cars { get; set; }

        public DbSet<Representative> Representative { get; set; }

    }
}