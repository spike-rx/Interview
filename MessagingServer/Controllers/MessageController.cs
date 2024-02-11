using MessagingServer.Data;
using MessagingServer.Models;
using Microsoft.AspNetCore.Mvc;

namespace MessagingServer.Controllers;

[ApiController]
[Route("[controller]")]
public class MessageController : ControllerBase
{
    private readonly MyDbContext _context;
    

    public MessageController(MyDbContext dbContext)
    {
        _context = dbContext;
    }

    [HttpGet("{name}")]
    public ActionResult<IEnumerable<MessageInfo>> Get(string name)
    {
        Console.WriteLine(name);
        return  _context.MessageInfos.Where(e => e.User == name).ToList();
    }
}