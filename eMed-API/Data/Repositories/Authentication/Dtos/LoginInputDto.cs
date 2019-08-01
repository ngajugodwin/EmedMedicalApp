using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eMed_API.Data.Repositories.Authentication.Dtos
{
    public class LoginInputDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
