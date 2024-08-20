using ErrorOr;

public class ValueService
{
    private readonly ValueModel _value;

    public ValueService()
    {
        // Database.
        _value = new ValueModel("Hello, World!");
    }

    public ErrorOr<ValueModel> GetValue()
    {
        return _value;
    }
}
