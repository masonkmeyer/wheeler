/// <reference path="../typings/tsd.d.ts" />

import {QueryBuilder} from './../dist/query_builder';
import {IExpression} from './../dist/expressions/iexpression';
import {Expression} from './../dist/expression';
import {ODataVisitor} from './../dist/odata_visitor';
import {And} from './../dist/filters/and';

interface IPerson { FirstName: string; LastName: string; Id: number; FavoriteColor: IColor; }
interface IColor { Name: string; Id: number; }
let service: QueryBuilder<IPerson> = new QueryBuilder<IPerson>();
let query = service
    .orderByDescending(x => x.Id)
    .toQuery();

console.log(query);

var params = Object.keys(query)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key]))
    .join("&")
    .replace(/%20/g, "+");

fetch(`http://localhost:57736/api/person?${params}`, {
    method: 'get',
    mode: 'cors'
}).then((data) => {
    return data.json();
}).then((result) => {
    console.log(result);
    for (let x of result) {
        console.log(JSON.stringify(x))
    }
});
//.contains<Person, string>((x:Person) => x.first_name, Expression.trim('mas'))
//.equals((x:Person) => x.inserted_date, Expression.now());

//.top(1)
//.equals((x:Person) => x.last_name, "meyer")
//.equals((x:Person) => x.id, 1)
//.multiply(1, 2)
//.skip(10);

console.log(service.toQuery());
