using System;

namespace API.Data
{
    public interface IMessage
    {
        int AddMessage(string fromEmailAddress, DateTime when, string message, bool streamClosed );
        int AddResponse(string fromEmailAddress, DateTime when, string message, bool streamClosed);  
    }
}