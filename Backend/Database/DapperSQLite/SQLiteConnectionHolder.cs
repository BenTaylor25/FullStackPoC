using System.Data.SQLite;
using Dapper;

public class SQLiteConnectionHolder
{
    const string CONNECTION_STRING =
        "Data Source=./database.db;Version=3";

    public SQLiteConnection Connection {get; private set;}

    public SQLiteConnectionHolder()
    {
        Connection = new SQLiteConnection();
    }
}
