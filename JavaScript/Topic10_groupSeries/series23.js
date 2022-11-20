/***
 * Series23. Дано целое число N (> 2) и набор из N вещественных чисел. Набор называется пилообразным,
 * если каждый его внутренний элемент либо больше, либо меньше обоих своих соседей (то есть является «зубцом»).
 * Если данный набор является пилообразным, то вывести 0; в противном случае вывести номер первого элемента,
 * не являющегося зубцом. */
let listNum = [5, 4, 8, 7, 9, 6, 8, 7, 8];
//let listNum = [6,6,6,6,9,9,9]
let idx = 0;
let bigger = true;
let smaller = true;
let saw = true;

for (let i = 1; i< listNum.length; ++i) {
    if (listNum [i] > listNum [i + 1] && bigger) {
        bigger = false;
        smaller = true;
    }

    else if (listNum [i] < listNum [i + 1] && smaller) {
        bigger = true;
        smaller = false;
    }

    else {
        idx=i;
        saw = false;
        break;
    }
}

console.log(idx);
console.log(saw);
