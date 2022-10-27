'use strict';

function integer1() {
    let length_sm = +prompt("Введіть відстань у сантиматрах.");
    alert(`Відстань L у метрах дорівнює ${Math.floor(length_sm/100)}`);
}
// integer1();

function integer2() {
    let mass_kg = +prompt("Введіть масу у кілограмах.");
    alert(`Маса у тоннах дорівнює ${Math.floor(mass_kg / 1000)}`);
}
// integer2();

function integer3() {
    let size_bytes = +prompt("Введіть розмір файла у байтах.");
    alert(`Розмір файла у кілобайтах дорінює ${Math.floor(size_bytes / 1024)}`);
}
// integer3();

function integer4() {
    let a = +prompt("Введіть ціле додатнє чісло А");
    let b = +prompt("Введіть ціле додатнє число B");
    alert(`На відрізку довжиною А може вміститись ${Math.floor(a / b)} відрізків В.`)
}
// integer4();

function integer5() {
    let length_a = +prompt("Введіть ціле додатнє чісло А");
    let length_b = +prompt("Введіть ціле додатнє число B");
    alert(`На відрізку А залишилось ${length_a % length_b} вільного місця.`);
}
// integer5();

function integer6() {
    let number = +prompt("Введіть двузначне число");
    alert(`Ліва цифра: ${Math.floor(number / 10)}`);
    alert(`Права цифра: ${number % 10}`);
}
// integer6();