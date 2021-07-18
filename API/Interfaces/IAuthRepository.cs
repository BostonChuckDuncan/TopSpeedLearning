using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;


namespace API.Data
{
    public interface IAuthRepository
    {
        Task<AppUser> Register(AppUser user, string password);
        Task<AppUser> RegisterAdmin(AppUser user, string password);
        Task<AppUser> Login(string username, string password);
        Task<bool> UserExists(string username);
        Task<AppUser> GetUserbyName(string username);
        Task<List<string>> GetAllUserNames();
        Task<bool> doAnyExist();
    }
}
