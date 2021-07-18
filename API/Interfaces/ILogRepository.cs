using System.Threading.Tasks;

namespace API.Data
{
    public interface ILogRepository
    {
         Task AddLogMessage(string logMessage);
    }
}