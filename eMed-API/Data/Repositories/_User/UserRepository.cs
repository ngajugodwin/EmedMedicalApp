using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eMed_API.Models;
using Microsoft.EntityFrameworkCore;

namespace eMed_API.Data.Repositories._User
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }
        public Task<User> GetUserAsync(long id)
        {
            var user = _context.Users.FirstOrDefaultAsync(u => u.Id == id);

            if (user == null)
                return null;

            return user;
        }

        public Task<List<User>> GetUsersAsync()
        {
            return _context.Users.ToListAsync();
        }
    }
}
