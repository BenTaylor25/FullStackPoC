using Backend.Database.Interfaces;
using Backend.Models;
using Dapper;

namespace Backend.Database.DapperSQLite;

public class DapperSQLiteValueDB : IValueDB
{
    SQLiteConnectionHolder _connectionHolder;

    public DapperSQLiteValueDB(
        SQLiteConnectionHolder sqliteConnectionHolder
    )
    {
        _connectionHolder = sqliteConnectionHolder;

        InitialiseDatabase();
    }

    private void InitialiseDatabase()
    {
        using (var connection = _connectionHolder.Connection)
        {
            connection.Open();

            string createTableQuery = ""; ///

            connection.Execute(createTableQuery);
        }
    }

    public ValueModel GetValue()
    {
        throw new NotImplementedException();
    }

    public void SetValue(ValueModel valueModel)
    {
        throw new NotImplementedException();
    }
}
