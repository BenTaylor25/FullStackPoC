using Backend.Database.DapperSQLite.SQL;
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

            string createTableQuery = SqlHelper.GetSqlFromFile(
                RegisterSqlFiles.INIT_CREATE_USER_TABLE
            );

            connection.Execute(createTableQuery);
        }
    }

    public ValueModel? GetValue()
    {
        using (var connection = _connectionHolder.Connection)
        {
            connection.Open();

            string getQuery = SqlHelper.GetSqlFromFile(
                RegisterSqlFiles.VALUE_GET_LAST
            );

            string? value =
                connection.QuerySingleOrDefault<string>(getQuery);

            if (value == null)
            {
                return null;
            }

            return new ValueModel(value);
        }
    }

    public void SetValue(ValueModel valueModel)
    {
        using (var connection = _connectionHolder.Connection)
        {
            connection.Open();

            string insertQuery = SqlHelper.GetSqlFromFile(
                RegisterSqlFiles.VALUE_INSERT
            );

            connection.Execute(insertQuery, new {
                MyValue = valueModel.MyValue
            });
        }
    }
}
