
namespace Backend.Database.DapperSQLite.SQL;

internal static class RegisterSqlFiles
{
    public static readonly string INIT_CREATE_USER_TABLE =
        Path.Combine("Init", "CreateValueTable.sql");

    public static readonly string VALUE_GET_ALL =
        Path.Combine("Value", "GetAllValues.sql");
}
