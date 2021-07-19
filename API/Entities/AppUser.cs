using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class AppUser : IdentityUser<int>
    {
		[Required]
        public string FirstName 	{ get; set; }
        [Required]
        public string LastName 		{ get; set; }
        public string Phone1 		{ get; set; }
        public string Phone2 		{ get; set; }
        [Required]
        public string KnownAs 		{ get; set; }
        [Required]
        public string EmailAddress 	{ get; set; }
		public bool CanTrial  	    { get; set; }
		public DateTime Created  	{ get; set; }
		public DateTime TrialBegan  { get; set; }
		public bool CCTypeUser  	{ get; set; }
		
        public ICollection<AppUserRole> UserRoles { get; set; }
    }

}
