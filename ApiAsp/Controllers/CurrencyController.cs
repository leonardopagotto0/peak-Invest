using Microsoft.AspNetCore.Mvc;
using ApiAsp.Models;

namespace ApiAsp.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CurrencyController : ControllerBase
{
    [HttpPost]
    public IActionResult Post([FromBody] CurrencyRequestDTO request)
    {
        float total = request.Plots * request.Value * 1.05f;
        return Ok(total);
    }
}