using System.ComponentModel.DataAnnotations;

namespace MessagingServer.Models;

public class MessageInfo
{
    [Key]
    public Guid Id { get; set; }
    public string DateTime { get; set; }
    public string User { get; set; } = String.Empty;
    public string Message { get; set; } = String.Empty;
}