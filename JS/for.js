'use strict'

function for1() {
    let number_k = +prompt("Введіть число K");
    let number_n = +prompt("Введіть число N (більше 0)");
    for (let i = 0; i < number_n; i++) {
        alert(number_k);
    }
}
// for1();

function for2() {
    let number_a = +prompt("Введіть число A");
    let number_b = +prompt("Введіть число B (A < B)");
    alert(number_a);
    for (let i = number_a + 1; i < number_b; i++) {
        alert(i);
    }
    alert(number_b);
}
// for2();