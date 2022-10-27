'use strict'

function while1() {
    let length_a = 15;
    let length_b = 2;
    while (length_a >= length_b) {
        length_a = length_a - length_b;
    }
    alert(length_a);
}
// while1();

function while2() {
    let length_a = +prompt("Enter number A");
    let length_b = +prompt("Enter number B (A > B)");
    let counter = 0;
    while (length_a >= length_b) {
        length_a = length_a - length_b;
        counter++;
    }
    alert(counter);
}
while2();