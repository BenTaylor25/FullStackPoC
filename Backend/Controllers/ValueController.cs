using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

public class ValueController : AppBaseController
{
    [HttpGet("/value")]
    public string GetValue()
    {
        return "Hello, World!";
    }
}
