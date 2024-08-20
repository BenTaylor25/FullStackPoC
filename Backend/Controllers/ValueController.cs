using Microsoft.AspNetCore.Mvc;

using ErrorOr;

using Backend.Contract.Value;

namespace Backend.Controllers;

public class ValueController : AppBaseController
{
    private readonly ValueService _valueService;

    public ValueController()
    {
        _valueService = new ValueService();
    }

    [HttpGet("/value")]
    public IActionResult GetValue()
    {
        ErrorOr<ValueModel> getValueResponse = _valueService.GetValue();

        if (getValueResponse.IsError)
        {
            return Problem();
        }

        return Ok(
            new ValueResponse(
                Value: getValueResponse.Value.Value
            )
        );
    }
}
