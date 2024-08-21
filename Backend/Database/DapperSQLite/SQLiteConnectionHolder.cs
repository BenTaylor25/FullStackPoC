using System.Data.SqlClient;
using System.Data.SQLite;
using Dapper;

public static class SQLiteConnectionHolder
{
    static readonly string DIR = Directory.GetCurrentDirectory();
    static readonly string DB_PATH =
        $"{DIR}/Database/DapperSQLite/database.db";
    static readonly string CONNECTION_STRING =
        $"Data Source={DB_PATH};Version=3";

    public static SQLiteConnection GetConnection()
    {
        if (!File.Exists(DB_PATH))
        {
            File.Create(DB_PATH);
        }

        return new SQLiteConnection(CONNECTION_STRING);
    }
}
