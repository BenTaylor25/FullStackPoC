using Backend.Database.DapperSQLite;
using Backend.Database.Interfaces;
using Backend.Services.Values;

const string FRONTEND_URL = "http://localhost:5173";

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddControllers();
    builder.Services.AddSingleton<IValueService, ValueService>();
    builder.Services.AddSingleton<IValueDB, DapperSQLiteValueDB>();
    // builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
    builder.Services.AddCors(setup => {
        setup.AddDefaultPolicy(policyBuilder => {
            policyBuilder
                .WithOrigins(FRONTEND_URL)
                .WithMethods("GET", "POST", "PUT", "DELETE")
                .AllowAnyHeader();
        });
    });
}

var app = builder.Build();
{
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();
    // app.UseAuthorization();
    app.UseCors();
    app.MapControllers();
}

app.Run();
