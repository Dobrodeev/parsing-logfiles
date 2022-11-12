/***
 * Дано целое число N и набор из N вещественных чисел. Вывести сумму и произведение чисел из данного набора.
 */
let sub = 0;
let sum = 0;
let i = 1;
let n = +prompt("Введіть кількість елементів");
let num = {};
while (i <= n) {
    let num = +prompt("Введіть числа");
    i++;
    sum += num;
    sub -= num;

}
alert(sum);
alert(sub);
