using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LifeStyleMenegmentUsers.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string YearBirthDate { get; set; }
        public string Status { get; set; }
        public string Height { get; set; }
        public string Weight { get; set; }


    }
}
