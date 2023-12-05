using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AnnouncementController : Controller
    {
        IAnnouncementCollectionService _announcementCollectionService;

        public AnnouncementController(IAnnouncementCollectionService announcementCollectionService)
        {
            _announcementCollectionService = announcementCollectionService ?? throw new ArgumentNullException(nameof(AnnouncementCollectionService));
        }


        [HttpGet]
        public async Task<IActionResult> GetAnnouncements()
        {
            List<Announcement> announcements = await _announcementCollectionService.GetAnnouncements();
            return Ok(announcements);
        }



        [HttpPost]
        public async Task<IActionResult> CreateAnnouncement([FromBody] Announcement announcement)
        {
            if (announcement == null)
            {
                return BadRequest("Announcement cannot be null");
            }

            await _announcementCollectionService.CreateAnnouncement(announcement);
            return Ok(await _announcementCollectionService.GetAnnouncements());
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAnnouncement(Guid id, [FromBody] Announcement announcement)
        {
            if (announcement == null)
            {
                return BadRequest("Announcement cannot be null");
            }

            await _announcementCollectionService.UpdateAnnouncement(id, announcement);
            return Ok(await _announcementCollectionService.GetAnnouncements());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnnouncement(Guid id)
        {
            await _announcementCollectionService.DeleteAnnouncement(id);
            return Ok(await _announcementCollectionService.GetAnnouncements());
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetAnnouncement(Guid id)
        {
            Announcement announcement = await _announcementCollectionService.GetAnnouncement(id);
            if (announcement != null)
                return Ok(announcement);
            else 
                return BadRequest();
        }

        [HttpGet("category/{categoryId}")]
        public async Task<IActionResult> GetAnnouncementsByCategoryId(string categoryId)
        {
            await _announcementCollectionService.GetAnnouncementsByCategoryId(categoryId);
            return Ok(await _announcementCollectionService.GetAnnouncements());
        }

    }
}
