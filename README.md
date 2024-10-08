
# Full Stack Proof of Concept App

The app itself is not supposed to be anything special,
but it contains all of the components of a complete full-stack application:

- Frontend
    - Components
    - Styling
    - Page Routing
    - State Management
- Backend
    - Server Runtime
    - APIs
    - Database

![Main Page](./Docs/MainPage.png)
![Main Page After Value Push](./Docs//MainPagePushValueAfter.png)

There are a lot of big words surrounding full-stack development so try not
to be put off by it if you are new.  
Here are the basics:

- A client is a computer program that runs on the end-user's machine. When
you want to buy something online, you are the user and your device is the
client.

- A server is a computer that an organisation uses to share data. Usually
this is done through a Server Runtime - a program that listens for requests
and can perform logic before responding.

- When you want to buy something online, there is a client-side (frontend)
application responsible for everything you see and interact with. When
you search for a product or place an order, the client-side application
needs to communicate with a server-side (backend) application so that the
request can be processed centrally. This communication occurs using APIs
(Application Programming Interfaces) - I don't find the acronym to be very
useful, but it's basically just a set of rules for how different
applications can communicate. This is called the Client-Server model.

--

- If the server-side application stops due to an error,
upgrade/maintenance, or for any other reason, all data will be lost because
the server-runtime works in memory. We need to use a Database to store
data permanantly. Databases are also good because the server will interact
with a huge amount of data during its runtime and it doesn't make sense
to keep it all in memory at once.

- When designing a frontend application, it's useful to break things down
into components - chunks of code that are responsible for themselves and
their contents. Components can take in props to enable reusability. When
you want to buy something online and you're looking through all of the
entries, those entries are all different instances of the same component.
This means that they behave the same, they just may be provided with
different data.

- Styling is to do with positioning, sizing, colouring, fonts, and more.

- Usually when you click a link to go to a page, the whole page has to load
from scratch. Page Routing is done within a site to prevent certain
components from re-rendering if they are to be reused. For example, you
might want to keep the search bar component where it is when you switch
from one category page to another.

- State Management is about how to manage data that is shared between
different components. For example, when you want to buy something online,
the site you're using might have a basket icon on every page that has a
number indicating how many things you've got in your basket. On a product
page you will need to access that same data to add a new product. On the
purchase page you need to see a list of things in the basket. These are all
completely different areas of the site that need access to the same state.
This can be quite difficult to do without a dedicated State Management
solution.

Tech Stack:
- React
- TypeScript
- Redux
- CSS
- C#
- ASP.NET Core
- SQLite
- Dapper

--

- Fundamentally, browsers understand how to work with HTML, CSS, and
JavaScript. HTML for the actual content; CSS for styling; JavaScript for
enabling more complex interaction like enabling dynamic content and
handling API requests.
As soon as you want to build a large project, however, you find that you
have to do things that are difficult using 'vanilla' HTML, CSS and JS.
This is where UI Frameworks come in. There are many examples of these that
provide different ways to build your UIs, the most popular is React, with
Angular and Vue in 2nd and 3rd position.

- JavaScript is extremely flexible with what it allows. `'1' + '1' - '1'`
is an operator/type error in any normal language, but JavaScript uses
inintuitive type conversion to give the result `10`. This can lead to a lot
of bugs not being caught before production (when it's used by real users).
TypeScript is an extension of JavaScript that we can work with during
development to help us catch bugs before they reach production. TypeScript
compiles to JavaScript so that it can be understood by the browser.

- Redux is the most popular State Management solution for React (though it
is also compatible with other frameworks). It allows us to have data stored
centrally such that any component can access it. When a value changes, all
references being displayed on the UI will re-render to reflect the changes.

--

- C# is an Object-Oriented programming language similar to Java. It is a
common choice for building robust server-side API applications.
C# exists within the .NET ecosystem which includes ASP.NET Core - a server-
side runtime for APIs.

- SQLite is a Database solution, however it is a somewhat controversial
one because it doesn't scale well, it can't handle parllel read/write
requests, it's syntax is much less rich than alternatives, and because it
has you interact with a raw file rather than a full DBMS system.
With that said, it is a powerful tool that is much easier to set up than
alternatives, and if we write our code carefully using Dependency Injection
we can decide to switch it out later without re-writing any of our logic.

- Dependency Injection is a scary term for a fairly simple idea. Basically
when we need a reference to another object, DI says that we should accept
an interface rather than a 'concrete' type. This means that we can
implement an alternative and switch it in without having to re-write old
logic. An example would be if we were to have an interface for everything
we want to store to the database; we can have an implementation that uses
SQLite but have the main logic reference the interface. That way, we would
be able to implement an alternative for Postgres or MySQL, and just tell
the logic to use that one instead.

- C# doesn't have a built-in way for talking to databases, but there are a
few packages that we can choose from. Entity Framework is possibly the most
common, but it can be quite easy to misuse as you're not necessarily
writing your own SQL queries. ADO.NET is the opposite end of the spectrum;
you have to set up and manage database connections as well as providing
SQL queries. Dapper is a healthy middle ground; most of the connection
handling is done for us, but we have full control over the SQL queries.
If you're keeping a list of all of the things you need to be familiar with
in order to build this application, you shouldn't worry about adding
Dapper. It just provides a few functions to help us communicate between
C# and SQLite.

- SQL (Structured Query Language) is a special syntax for interacting with
Relational Databases. Most databases are Relational, meaning that they
store data in tables that relate to each other, but there are some
alternatives that are sometimes called NoSQL databases (including Document,
Timeseries and Graph).

Skills:
- Frontend
    - React
    - TypeScript
    - Redux
    - CSS
    - React Router DOM
    - Components
    - State Management
    - Page Routing
    - Styling
- Backend
    - C#
    - SQLite
    - ASP.NET Core
    - Web APIs
    - Services
    - Database Interaction
    - Relation Databases
    - SQL
    - Dependency Injection
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
# [make sure to create the .gitignore file]

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

NPM Pacakges:
```bash
cd frontend

npm install react-router-dom
npm install @reduxjs/toolkit react-redux
```

NuGet Packages:
```bash
cd Backend

dotnet add package ErrorOr --version 0.1.0
dotnet add package Dapper --version 2.1.35
dotnet add package System.Data.SQLite --version 1.0.118
```
