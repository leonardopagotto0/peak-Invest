using Microsoft.AspNetCore.Mvc;
using ApiAsp.Models;

namespace ApiAsp.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly ILogger<UsersController> _logger;

    private static readonly List<KeyValuePair<int, User>> Users = new List<KeyValuePair<int, User>>{
        new KeyValuePair<int, User>(1, new User {
            Name = "Leonardo Pagotto",
            Photo = "https://avatars.githubusercontent.com/u/83890502?v=4"
        }),
        new KeyValuePair<int, User>(2, new User {
            Name = "Linus Torvalds",
            Photo = "https://avatars.githubusercontent.com/u/1024025?v=4"
        }),
        new KeyValuePair<int, User>(3, new User {
            Name = "Lucas Montano",
            Photo = "https://avatars.githubusercontent.com/u/7559318?v=4"
        })
    };

    public UsersController(ILogger<UsersController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Models.User> Get()
    {
        return Users.Select(u => u.Value);
    }

    [HttpGet("{id:int}")]
    public IActionResult GetOne(int id)
    {
        try
        {
            User user = Users.Find(u => u.Key == id).Value;
            return Ok(user);
        }
        catch (System.ArgumentNullException){
            return NotFound();
        }
    }

    
}