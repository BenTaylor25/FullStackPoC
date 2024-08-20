using ErrorOr;

using Backend.Models;

namespace Backend.Services.Values;

public class ValueService : IValueService
{
    private ValueModel _value;

    public ValueService()
    {
        // Database.
        _value = new ValueModel("Hello, World!");
    }

    public ErrorOr<string> GetValue()
    {
        return _value.MyValue;
    }

    public ErrorOr<Updated> SetValue(string value)
    {
        _value.MyValue = value;

        return Result.Updated;
    }
}
