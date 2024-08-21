using ErrorOr;

using Backend.Models;
using Backend.Database.Interfaces;

namespace Backend.Services.Values;

public class ValueService : IValueService
{
    private IValueDB _valueDB;

    public ValueService(IValueDB valueDB)
    {
        _valueDB = valueDB;
    }

    public ErrorOr<string> GetValue()
    {
        return _valueDB.GetValue().MyValue;
    }

    public ErrorOr<Updated> SetValue(string value)
    {
        ValueModel valueModel = _valueDB.GetValue();
        valueModel.MyValue = value;

        _valueDB.SetValue(valueModel);

        return Result.Updated;
    }
}
