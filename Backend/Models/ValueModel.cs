namespace Backend.Models;

public class ValueModel
{
    private string _myValue;
    public string MyValue
    {
        get
        {
            return _myValue;
        }
        set
        {
            _myValue = value;
        }
    }

    public ValueModel(string value)
    {
        _myValue = value;
    }
}
