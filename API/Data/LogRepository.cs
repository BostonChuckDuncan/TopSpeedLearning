using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System;
using API.Entities;

namespace API.Data
{
    public class LogRepository : ILogRepository
    {
        private readonly DataContext _context;
        public LogRepository(DataContext context)
        {
            _context = context;

        }
        public async Task AddLogMessage(string logMessage)
        {
            Log newEntry = new Log();
            string dtime = DateTime.Now.ToString();
            newEntry.LogMessage = dtime + " " + logMessage;
            await _context.Logs.AddAsync(newEntry);
            await _context.SaveChangesAsync();
        }
    }
}
