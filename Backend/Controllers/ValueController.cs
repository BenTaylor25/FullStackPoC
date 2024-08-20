using Microsoft.AspNetCore.Mvc;

using ErrorOr;

using Backend.Contract.Value;
using Backend.Models;
using Backend.Services.Values;

namespace Backend.Controllers;

public class ValueController : AppBaseController
{
    private readonly IValueService _valueService;

    public ValueController(IValueService valueService)
    {
        Console.WriteLine("controller constructor");
        _valueService = valueService;
    }

    [HttpGet("/value")]
    public IActionResult GetValue()
    {
        ErrorOr<string> getValueResponse = _valueService.GetValue();

        if (getValueResponse.IsError)
        {
            return Problem();
        }

        return Ok(
            new ValueResponse(
                Value: getValueResponse.Value
            )
        );
    }

    [HttpPost("/value/{value}")]
    public IActionResult SetValue(string value)
    {
        var resp = _valueService.GetValue();
        Console.WriteLine(resp.Value);

        ErrorOr<Updated> setValueResponse = _valueService.SetValue(value);

        resp = _valueService.GetValue();
        Console.WriteLine(resp.Value);

        if (setValueResponse.IsError)
        {
            return Problem();
        }

        return Ok();
    }

}
