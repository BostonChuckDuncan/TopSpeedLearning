using System;

namespace API.Entities
{
    public class ContactUs
    {
        public int Id { get; set; }
        public string fromEmail { get; set; }
        public string toEmail { get; set; }
        public DateTime WhenSent { get; set; }
        public string MessageContent { get; set; }
        public bool StreamClosed { get; set; }
    }
}