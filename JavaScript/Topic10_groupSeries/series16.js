/***
 Дано целое число K и набор ненулевых целых чисел; признак его завершения — число 0.
 Вывести номер последнего числа в наборе, большего K. Если таких чисел нет, то вывести 0.
 */
let n = +prompt(`Введіть кількість елементів`);
let i = 1;
let k = +prompt(`Введіть ціле число (К)`);
document.write("Список набору введених чисел: ");

while (i <= n) {
    let arr = +prompt("Введіть ненульові числа").split(",");
    document.write(arr);
    i++;

    if (arr > k){
        num = arr;
        i += 0;
    }

     if (arr < k){
         num = 0;
     }
}
document.write("<br>");
document.write("Номер останнього числа, більшого К: " && "У наборі немає чисел, більших К: " , num);
document.write("<br>");










