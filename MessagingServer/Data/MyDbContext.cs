using MessagingServer.Models;
using Microsoft.EntityFrameworkCore;

namespace MessagingServer.Data;

public class MyDbContext: DbContext
{
    public MyDbContext(DbContextOptions<MyDbContext> options)
        : base(options)
    {
    }
    public DbSet<MessageInfo> MessageInfos { get; set; }
    
}