using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Announcement
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        public string? Title { get; set; }
        [Required]
        public string? Message { get; set; }
        [Required]
        public string? CategoryId { get; set; }
        [Required]
        public string? Author { get; set; }
        [Required]
        public string? ImageUrl { get; set; }
    }
}
