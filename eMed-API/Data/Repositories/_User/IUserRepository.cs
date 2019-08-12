using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eMed_API.Models;

namespace eMed_API.Data.Repositories._User
{
    public interface IUserRepository
    {
        Task<User> AddAsync(User user);

        Task Delete(User user);

        Task<List<User>> GetUsersAsync();

        Task<User> GetUserAsync(long id);

    }
}
