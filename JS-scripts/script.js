/*
1. Insert into values (man, 39);
2. Dobrodeev Valera Vadimovich -> Dobrodeev V. V.;
3. 10.01.1991 -> 10.01.91;
4. 10/01/91 -> 10.01.91;
5. parsing .html, sites Guzzle http, .js, .py;
6. parsing .log, .json, .xml;
7. regular expressions, A-parse
 */
let name = prompt("Введіть ПІБ."),
    newName = "",
    data = prompt("Введіть дату у форматі ДД.ММ.РРРР"),
    newData = "",
    data2 = prompt("Введіть дату у форматі ДД/ММ/РР"),
    newData2 = "";

let first_space = name.indexOf(' ');
let last_space = name.lastIndexOf(' ');
newName = name.slice(0, first_space) + ' ' + name.slice(first_space + 1, first_space + 2) + '. ' + name.slice(last_space + 1, last_space + 2) + '.';
alert(newName);
// console.log(`${newName}\n`);

let last_dot = data.lastIndexOf('.');
newData = data.slice(0, last_dot + 1) + data.slice(-2);
alert(newData);
// console.log(`${newData}\n`);

let first_slash = data2.indexOf('/');
let last_slash = data2.lastIndexOf('/');
newData2 = data2.slice(0, first_slash) + '.' + data2.slice(first_slash + 1, last_slash) + '.' + data2.slice(last_slash + 1);
alert(newData2);
// console.log(newData2);