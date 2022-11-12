/*** ЕЩЕ НЕ РЕШАЛА
 Дано целое число N и набор из N целых чисел.
 Вывести в том же порядке все четные числа из данного набора и количество K таких чисел
 */

let sum=0;
let n = +prompt(`Введіть кількість елементів`);
let i = 1;
document.write("Округлені значення:");

while (i <= n) {
    num = +prompt("Введіть числа", );
    i++;
    document.write("<br>");
    document.write(Math.round(num));
    document.write(i);
    if (num <=0 ) {
        alert("Помилка! Ви ввели від'ємне число")
    }
    sum+=num;

}
document.write("<br><br>");
document.write("Сума цілих частин введених чисел:");
document.write(sum.toFixed());





