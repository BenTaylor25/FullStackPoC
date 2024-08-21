
namespace Backend.Database.DapperSQLite.SQL;

internal static class SqlHelper
{
    public static string GetSqlFromFile(string path)
    {
        return File.ReadAllText(path);
    }
}
