/**
 * Даны десять вещественных чисел. Найти их произведение.
 */
let sub = 0;
let i = 1;

while (i < 5) {
    let num = +prompt('Введите число!', '');
    i++;

    if (num == 0) {
        alert("Помилка! Ви ввели число 0. Почніть спочатку")
    }
    sub -= num;
}

alert(sub);
console.log(sub);
