using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eMed_API.Data.Repositories._User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace eMed_API.Controllers._User
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        
        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(long id)
        {
            var user = await _userRepository.GetUserAsync(id);

            if (user == null)
                return BadRequest("User Not Found!");
            
            return Ok(user);
        }
        
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userRepository.GetUsersAsync();

            return Ok(users);
        }
    }
}