/***
 Дано целое число N и набор из N целых чисел, упорядоченный по возрастанию.
 Данный набор может содержать одинаковые элементы.
 Вывести в том же порядке все различные элементы данного набора.
 */

let N = +prompt("Введите N", 0);
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