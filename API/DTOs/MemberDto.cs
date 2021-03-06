using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class MemberDto
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public string Phone1 { get; set; }
        public string Phone2 { get; set; }
        [Required]
        public string KnownAs { get; set; }
        [Required]
        public string EmailAddress { get; set; }
        public string CanTrial { get; set; }
        public string Created { get; set; }
        public string TrialBegan { get; set; }
        public string CCTypeUser { get; set; }
    }
}