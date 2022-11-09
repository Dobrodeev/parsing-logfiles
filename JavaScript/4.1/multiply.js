/**
 * Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
 * */
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (let key in menu) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
        console.log(obj[key]);
    }
}

