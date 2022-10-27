'use strict'

function while1() {
    let length_a = 15;
    let length_b = 2;
    while (length_a >= length_b) {
        length_a = length_a - length_b;
    }
    alert(length_a);
}
while1();