using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        [MinLength(4)]
        [MaxLength(20)]
        public string  Username { get; set; }
        
        [Required]
        [MinLength(8)]
        [MaxLength(80)]
        public string Password { get; set; }
    }
}