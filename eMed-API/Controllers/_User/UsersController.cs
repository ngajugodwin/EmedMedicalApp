using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using eMed_API.Data.Repositories._User;
using eMed_API.Data.Repositories._User.Dtos;
using eMed_API.Data.Repositories.Emed;
using eMed_API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace eMed_API.Controllers._User
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        //private readonly IEmedRepository _emedRepository;
        
        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _mapper = mapper;
            _userRepository = userRepository;

        }

        //[HttpPost]
        //public async Task<IActionResult> AddUser(UserForInputDto userForInputDto)
        //{
        //    if (userForInputDto == null)
        //        return BadRequest("User cannot be saved");

        //    _userRepository.AddAsync(userInputDto);
        //    var userToSave = _mapper.Map<User>(userForInputDto);

        //    await _userRepository.AddAsync(userToSave);


        //    return Ok();
        //}

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(long id)
        {
            var user = await _userRepository.GetUserAsync(id);

            if (user == null)
                return BadRequest("User Not Found!");

            var userToReturn = _mapper.Map<UserForDetailedDto>(user);
            
            return Ok(userToReturn);
        }
        
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userRepository.GetUsersAsync();

            var userList = _mapper.Map<IEnumerable<UserForListDto>>(users);

            return Ok(userList);
        }
    }
}