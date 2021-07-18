using System;
using System.Threading.Tasks;

namespace HunterServer.Data
{
    public interface IRandomCacheRepository
    {
         public Task<int> TestAvailableSpace(int ProjectId, int numHexDigits); 
         public Task<int> GetRandomInt(int maxDecimal, int ProjectId, string MarkerName = "");
         public void SetMarker(string markerName, bool isStarting, int binaryLength, int processId);
         public Task ExtendCache(); // get more cache stream
         public Task<bool> InitCacheMarker0();
    }
}