using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eMed_API.Data.Repositories._User.Dtos
{
    public class UserForListDto
    {
        public long Id { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Email { get; set; }
        public bool IsActive { get; set; }
        public string ImageUrl { get; set; }
    }
}
