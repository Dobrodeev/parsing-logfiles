/***
 Дано вещественное число B, целое число N и набор из N вещественных чисел,
 упорядоченных по возрастанию. Вывести элементы набора вместе с числом B,
 сохраняя упорядоченность выводимых чисел.
 */

let N = +prompt("Введите N", 0);

let B = +prompt("Введите вещественное число B", 0);
let arr = [];
let i = 1;
for (i = 0; i < N; i++)
    arr[i] = +prompt(`Введите ${i + 1}-ое число`);
    document.write(arr.join(" ") + "<br>");

function compareReversed(a, b) {
    return a - b;
}
arr.sort(compareReversed);
document.write(arr.join(" "));