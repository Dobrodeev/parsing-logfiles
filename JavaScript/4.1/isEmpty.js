/**
 * Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
 * */
let name = {
    /**
     name: "Anastasia",
     age: 19,*/
}

function isEmpty(name) {
    for (let key in name) {
        return false;
    }
    return true;
}

console.log(isEmpty(name));