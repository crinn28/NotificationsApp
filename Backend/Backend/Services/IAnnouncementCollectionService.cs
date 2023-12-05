using Backend.Models;

namespace Backend.Services
{
    public interface IAnnouncementCollectionService: ICollectionService<Announcement>
    {
        Task<List<Announcement>> GetAnnouncementsByCategoryId(string categoryId);
    }
}
