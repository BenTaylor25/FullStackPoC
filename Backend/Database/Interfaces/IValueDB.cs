using Backend.Models;

namespace Backend.Database.Interfaces;

public interface IValueDB
{
    ValueModel GetValue();
    void SetValue(ValueModel valueModel);
}
