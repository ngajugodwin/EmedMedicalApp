using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using eMed_API.Data.Repositories.Authentication;
using eMed_API.Data.Repositories.Authentication.Dtos;
using eMed_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace eMed_API.Controllers.Authentication
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepository;
        private readonly IConfiguration _config;
        public AuthController(IAuthRepository authRepository, IConfiguration config)
        {
            _authRepository = authRepository;
            _config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterInputDto registerInputDto)
        {            
            registerInputDto.Username = registerInputDto.Username.ToLower();

            if (await _authRepository.UserExists(registerInputDto.Username))
                return BadRequest("Username already exists");

            var userToCreate = new User
            {
                Username = registerInputDto.Username
            };

            var createdUser = await _authRepository.Register(userToCreate, registerInputDto.Password);

            
            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginInputDto loginInputDto)
        {
            var userFromRepo = await _authRepository.Login(loginInputDto.Username.ToLower(), loginInputDto.Password);

            if (userFromRepo == null)
                return Unauthorized();

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });

        }
            
    }
}