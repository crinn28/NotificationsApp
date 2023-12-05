using Backend.Models;
using Backend.Settings;
using MongoDB.Driver;

namespace Backend.Services
{
    public class AnnouncementCollectionService : IAnnouncementCollectionService
    {
        private readonly IMongoCollection<Announcement> _announcements;

        public AnnouncementCollectionService(IMongoDBSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _announcements = database.GetCollection<Announcement>(settings.AnnouncementsCollectionName); 
        }


        public async Task<bool> CreateAnnouncement(Announcement announcement)
        {
            if (announcement.Id == Guid.Empty)
            {
                announcement.Id = Guid.NewGuid();
            }

            await _announcements.InsertOneAsync(announcement);
            return true;
        }

        public async Task<bool> DeleteAnnouncement(Guid id)
        {
            var result = await _announcements.DeleteOneAsync(announcement => announcement.Id == id);
            if (!result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }
            return true;
        }

        public async Task<Announcement> GetAnnouncement(Guid id)
        {
            return (await _announcements.FindAsync(announcement => announcement.Id == id)).FirstOrDefault();
        }


        public async Task<bool> UpdateAnnouncement(Guid id, Announcement announcement)
        {
            announcement.Id = id;
            var result = await _announcements.ReplaceOneAsync(announcement => announcement.Id == id, announcement);
            if (!result.IsAcknowledged && result.ModifiedCount == 0)
            {
                await _announcements.InsertOneAsync(announcement);
                return false;
            }

            return true;
        }

        public async Task<List<Announcement>> GetAnnouncementsByCategoryId(string categoryId)
        {
            return (await _announcements.FindAsync(announcement => announcement.CategoryId == categoryId)).ToList();
        }


        public async Task<List<Announcement>> GetAnnouncements()
        {
            var result = await _announcements.FindAsync(announcement => true);
            return result.ToList();
        }

    }
}
