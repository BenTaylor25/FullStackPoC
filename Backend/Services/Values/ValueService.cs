using ErrorOr;

using Backend.Models;
using Backend.Database.Interfaces;

namespace Backend.Services.Values;

public class ValueService : IValueService
{
    private const string DEFAULT_VALUE = "Hello, World!";

    private IValueDB _valueDB;

    public ValueService(IValueDB valueDB)
    {
        _valueDB = valueDB;
    }

    public ErrorOr<string> GetValue()
    {
        ValueModel? valueModel = _valueDB.GetValue();

        if (valueModel == null)
        {
            // return Error.NotFound();
            return DEFAULT_VALUE;
        }

        return valueModel.MyValue;
    }

    public ErrorOr<Updated> SetValue(string value)
    {
        ValueModel valueModel = _valueDB.GetValue() ??
            new(DEFAULT_VALUE);

        valueModel.MyValue = value;

        _valueDB.SetValue(valueModel);

        return Result.Updated;
    }
}
