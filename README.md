# Wheeler

**Note** This is an pre-alpha version and is subject to change.

Wheeler is a fluent typescript library for building OData queries. The goal of wheeler is to make it easy to build strongly-typed OData queries.

For example, let's say you have a users endpoint (www.myserver.com/api/users) that accepts OData queries. The user object might have a few properties like: ID, first name, last name, and salary.
```json

{ "id": 1, "first_name": "mason", "last_name": "meyer", "salary": 100 }

```
Your typescript interface might look like this:

```ts

interface User {
  id: number;
  first_name: string;
  last_name: string;
  salary: number;
}

```

Traditionally, you would build up your query string with string concat or string interpolation.

```ts
// Take some variable (likely from the UI)
let name = 'mason';

// Build the variable for the query string
let $filter = `first_name` eq '{name}'`;

```
Wheeler makes building simple OData queries easy.
```ts

// Create the query builder
let service:QueryBuilder<User> = new QueryBuilder<User>();

service.equals(x => x.first_name, 'mason').toQuery();

```
**Note** The query is completely typed. Notice that it doesn't use any string or string replacement.

Wheeler really starts to shine as the queries become more complex.

```ts

// Some simple paging where the salary is <= 100
service.lte(x => x.salary, 100)
       .top(100)
       .skip(3)
       .toQuery();

```



Wheeler also includes an Expression class to help build nested expressions.

### TODO

* Add unit tests
* Package for deployment
* Package for npm
* Add examples of advanced scenarios
* Fix client-side build
