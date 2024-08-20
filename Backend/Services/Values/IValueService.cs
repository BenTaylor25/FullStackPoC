using ErrorOr;

namespace Backend.Services.Values;

public interface IValueService
{
    ErrorOr<string> GetValue();
    public ErrorOr<Updated> SetValue(string value);
}
