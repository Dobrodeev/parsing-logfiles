/**
1. ISERT INTO VALUES (man, 39), 
2. Dobrodeev Valera Vadimovich -> Dobrodeev V. V.
3. 10.01.1991 -> 10.01.91
4. 10/01/91 -> 10.01.91
5. parsing .html, sites Guzzle http, .js, .py
6. parsing .log, .json, .xml
7. regular expressions, A-parse
*/

let name="Mamontova Anastasia Mikhailovna";
let newName="Mamontova A.M.";
let datе="27.04.2003 ";
let newDatе="27.04.03";
let datе2="27/04/03";
let newDatе2="27.04.03";
name=newName;
datе=newDatе;
datе2=newDatе2;
alert(name,datе=datе2);



