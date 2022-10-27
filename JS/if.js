'use strict'

function if1() {
    let number = +prompt("Введіть ціле число");
    if (number > 0) number += 1;
    alert(number);
}
// if1();

function if2() {
    let number = +prompt("Введіть ціле число");
    if (number > 0) number += 1
    else number -= 2;
    alert(number);
}
// if2();

function if3() {
    let number = +prompt("Введіть ціле число");
    if (number > 0) number += 1
    else if (number < 0) number -= 2
    else number = 10;
    alert(number);
}
// if3();

function if4() {
    let number_a = +prompt("Введіть ціле число A");
    let number_b = +prompt("Введіть ціле число B");
    let number_c = +prompt("Введіть ціле число C");
    let counter = 0;
    if (number_a > 0) counter += 1;
    if (number_b > 0) counter += 1;
    if (number_c > 0) counter += 1;
    alert(`Серед введених чисел додатніх ${counter}`);
}
// if4();

function if5() {
    let number_a = +prompt("Введіть ціле число A");
    let number_b = +prompt("Введіть ціле число B");
    let number_c = +prompt("Введіть ціле число C");
    let counter_pos = 0;
    let counter_neg = 0;
    if (number_a > 0) counter_pos += 1
    else if (number_a < 0) counter_neg += 1;
    if (number_b > 0) counter_pos += 1
    else if(number_b < 0) counter_neg += 1;
    if (number_c > 0) counter_pos += 1
    else if (number_c < 0) counter_neg += 1;
    alert(`Серед введених чисел додатніх ${counter_pos}, від'ємних ${counter_neg}`);
}
// if5();