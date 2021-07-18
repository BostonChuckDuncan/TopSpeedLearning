using System;

namespace API.Data {
        public class Message : IMessage {
            private readonly DataContext _context;
            public Message (DataContext context) {
                _context = context;

            }
            public int AddMessage (string fromEmailAddress, DateTime when, string message, bool streamClosed) {
                throw new NotImplementedException ();
            }

            public int AddResponse (string fromEmailAddress, DateTime when, string message, bool streamClosed) {
                throw new NotImplementedException ();
            }
        }
}