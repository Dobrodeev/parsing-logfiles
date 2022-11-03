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
// while2();

function while11() {
    let N = +prompt("Введіть ціле додатнє число N (N > 1).");
    let K = 0, i = 1, sum = 0;
    while(sum < N) {
        sum += i;
        K = i;
        i++;
        alert(sum);
    }
    alert(`Найменше з цілих чисел К, для яких сума 1 + 2 + ... + K >= N (= ${N}) дорівнює ${K}.`);
    alert(`А ця сума дорівнює ${sum}.`);
}
// while11();

function while12() {
    let N = +prompt("Введіть ціле додатнє число N (N > 1).");
    let K = 0, i = 1, sum = 0, sumK;
    while(sum < N) {
        sumK = sum;
        sum += i;
        if (sum > N) break;
        alert(sum);
        K = i;
        i++;
    }
    alert(`Найбільше з цілих чисел К, для яких сума 1 + 2 + ... + K <= N (= ${N}) дорівнює ${K}.`); // правильний результат
    alert(`А ця сума дорівнює ${sumK}.`); // неправильний
}
while12();