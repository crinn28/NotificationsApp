namespace Backend.Services
{
    public interface ICollectionService<T>
    {
        Task<List<T>> GetAnnouncements();
        Task<T> GetAnnouncement(Guid id);
        Task<bool> CreateAnnouncement(T model);

        Task<bool> UpdateAnnouncement(Guid id, T announcement);

        Task<bool> DeleteAnnouncement(Guid id);

    }
}
