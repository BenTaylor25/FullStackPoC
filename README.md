
Tech Stack:
- C#
- SQLite
- Dapper
- React
- Redux
- CSS

Skills:
- Backend
    - C#
    - SQLite
    - ASP.NET Core
    - Web APIs
    - Services
    - Database Interaction
    - Relation Databases
    - SQL
- Frontend
    - React
    - Redux
    - CSS
    - Components
    - State Management
    - Page Routing
    - Styling
- Other
    - MVC
    - Git
    - GitHub



```bash
mkdir FullStackPoC
cd FullStackPoC

dotnet new sln --name FullStackPoC
dotnet new webapi -o Backend
dotnet sln add .\Backend\
# create .gitignore

npm create vite@latest
# Ok to proceed? `y`
# Project name: `frontend`
# Select a framework `React`
# Select a variant `TypeScript`
cd frontend
npm i

cd ..

git init
git add .
git commit -m "init"
git remote add origin https://github.com/BenTaylor25/FullStackPoC.git
git push origin master
```

NuGet packages:
```bash
cd Backend

dotnet add package ErrorOr --version 0.1.0
dotnet add package Dapper --version 2.1.35
dotnet add package System.Data.SQLite --version 1.0.118
```
