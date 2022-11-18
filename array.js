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

/**
Array42. Дано число R и массив размера N. Найти два соседних элемента мас-
сива, сумма которых наиболее близка к числу R, и вывести эти элементы
в порядке возрастания их индексов (определение наиболее близких чисел
дано в задании Array40).
*/
function array42() {
	let numbers = [10, 90, 1, 9, 10, 7, 12, 15, 16, 34];
	let n = 5;
	
	let difference = Number.MAX_VALUE;
	let neiborough_1 = 0;
	let neiborough_2 = 0;
	
	for (let i = 0; i < numbers.length; ++i) {
		for (let j = i + 1; j < numbers.length; ++j) {
			if ( difference > Math.abs(numbers[i] + numbers[j] - n) ) {
				difference = Math.abs(numbers[i] + numbers[j] - n);
				
				neiborough_1 = i;
				neiborough_2 = j;
			}
		}
	}
	
	alert(`${neiborough_1}: ${numbers[neiborough_1]}; ${neiborough_2}: ${numbers[neiborough_2]}.`);
}

/**
Array80. Дан массив размера N. Осуществить сдвиг элементов массива влево
на одну позицию (при этом AN перейдет в AN−1, AN−1 — в AN−2, . . ., A2 —
в A1, a исходное значение первого элемента будет потеряно). Последний
элемент полученного массива положить равным 0.
*/
function array80() {
	let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
	
	for (let i = 1; i < numbers.length; ++i) {
		numbers[i - 1] = numbers[i];
	}
	
	numbers[numbers.length - 1] = 0;
	
	alert(numbers);
}

//array1();
//array5();
//array11();
//array42();
array80();