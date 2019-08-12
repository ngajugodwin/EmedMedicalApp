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

        public async Task<User> AddAsync(User user)
        {
            if(user != null)
            {
                await _context.Users.AddAsync(user);
                await _context.SaveChangesAsync();

                return user;
            }

            return null;
        }

        public async Task Delete(User user)
        {

           //  throw new NotImplementedException();
        }

        public async Task<User> GetUserAsync(long id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);

            if (user == null)
                return null;

            return user;
        }

        public async Task<List<User>> GetUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }
    }
}
