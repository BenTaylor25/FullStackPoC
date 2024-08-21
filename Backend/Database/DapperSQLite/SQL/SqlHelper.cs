
namespace Backend.Database.DapperSQLite.SQL;

internal static class SqlHelper
{
    const string BASE_PATH = "Database/DapperSQLite/SQL";

    public static string GetSqlFromFile(string path)
    {
        string fullPath = Path.Combine(BASE_PATH, path);

        return File.ReadAllText(fullPath);
    }
}
