'use strict'

function boolean1() {
    let number_a = +prompt("Введіть число А");
    let bool;
    if (number_a > 0) bool = "істиним"
    else bool = "хибним";
    alert(`Вираз "Число А додатнє" є ${bool}`);
}
// boolean1();

function boolean2() {
    let number_a = +prompt("Введіть число А");
    let bool;
    if (number_a % 2 != 0) bool = "істиним"
    else bool = "хибним";
    alert(`Вираз "Число А непарне" є ${bool}`);
}
// boolean2();

function boolean3() {
    let number_a = +prompt("Введіть число А");
    let bool;
    if (number_a % 2 == 0) bool = "істиним"
    else bool = "хибним";
    alert(`Вираз "Число А парне" є ${bool}`);
}
// boolean3();

function boolean4() {
    let number_a = +prompt("Введіть число А");
    let number_b = +prompt("Введіть число В");
    let bool;
    if (number_a > 2 && number_b <= 3) bool = "істиним"
    else bool = "хибним";
    alert(`Вираз "Справедливі нерівності А > 2 та B <= 3" є ${bool}`);
}
// boolean4();

function boolean5() {
    let number_a = +prompt("Введіть число А");
    let number_b = +prompt("Введіть число В");
    let bool;
    if (number_a >= 0 || number_b < -2) bool = "істиним"
    else bool = "хибним";
    alert(`Вираз "Справедливі нерівності А >= 0 або B < -2" є ${bool}`);
}
// boolean5();