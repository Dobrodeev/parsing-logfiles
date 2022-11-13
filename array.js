/**
Array1. Дано целое число N (> 0). Сформировать и вывести целочисленный
массив размера N, содержащий N первых положительных нечетных чисел:
1, 3, 5, . . . .
*/
function array1() {
	let size = +prompt("Уведіть число більше за нуль:");
	
	if (size <= 0) {
		alert("Уведене число повинно бути більше за нуль.");
		return;
	}
	
	let numbers = new Array();
	for (let i = 0, k = 1; i < size; ++i, k += 2) {
		numbers.push(k);
	}
	
	alert(`Перші непарні числа, яких є ${size}: ${numbers.join(", ")}.`);
}

/**
Array5. Дано целое число N (> 2). Сформировать и вывести целочисленный
массив размера N, содержащий N первых элементов последовательности
чисел Фибоначчи FK:
F1 = 1, F2 = 1, FK = FK−2 + FK−1, K = 3, 4, . . . .
*/
function array5() {
	let size = +prompt("Уведіть число більше за нуль:");
	
	if (size <= 0) {
		alert("Уведене число повинно бути більше за нуль.");
		return;
	}
	
	let numbers = [1, 1];
	for (let i = 2; i < size; ++i) {
		numbers.push(numbers[i - 2] + numbers[i - 1]);
	}
	
	alert(`Перші числа послідовності Фібоначі, яких є ${size}: ${numbers.join(", ")}.`);
}

/**
Array11. Дан массив A размера N и целое число K (1 ≤ K ≤ N). Вывести эле-
менты массива с порядковыми номерами, кратными K: AK, A2·K, A3·K, . . . .
Условный оператор не использовать.
*/
function array11() {
	let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
	let k = 7;
	
	let out = new Array();
	for (let i = k - 1; i < numbers.length; i += k) {
		out.push(numbers[i]);
	}
	
	alert( out.join(", ") );
}

//array1();
//array5();
array11();