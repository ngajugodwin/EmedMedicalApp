using eMed_API.Models;
using Microsoft.EntityFrameworkCore;

namespace eMed_API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            :base(options)
        {
            
        }

        public DbSet<Patient> Patients { get; set; }
        public DbSet<User> Users { get; set; }


    }
}