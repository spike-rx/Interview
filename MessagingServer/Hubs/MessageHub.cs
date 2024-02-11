using MessagingServer.Data;
using MessagingServer.Models;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace MessagingServer.Hubs;

public class MessageHub : Hub
{
    private readonly MyDbContext _context;

    public MessageHub(MyDbContext context)
    {
        _context = context;
    }

    public async Task NewMessage(string user, string message, string dateTime)
    {
        await Clients.All.SendAsync("messageReceived", user, message, dateTime);
        Console.WriteLine(user + message + dateTime);
        await _context.AddAsync(new MessageInfo { User = user, Message = message, DateTime = dateTime });
        await _context.SaveChangesAsync();
    }
}