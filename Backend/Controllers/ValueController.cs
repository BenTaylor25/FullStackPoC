using Backend.Contract.Value;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

public class ValueController : AppBaseController
{
    [HttpGet("/value")]
    public IActionResult GetValue()
    {
        return Ok(
            new ValueResponse(
                value: "Hello, World!"
            )
        );
    }
}
