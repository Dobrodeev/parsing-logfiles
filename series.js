/**
Series16◦. Дано целое число K и набор ненулевых целых чисел; признак
его завершения — число 0. Вывести номер последнего числа в наборе,
большего K. Если таких чисел нет, то вывести 0.
*/
function series16() {
	let numbers = [1, 2, 15, 4, 5, 6, 7, 8, 16, 10, 11, 16, 13, 14, 15, 0];
	let k = 15;
	
	let index = 0;
	
	for (let i = 0; numbers[i] != 0; ++i) {
		if (numbers[i] > k) {
			index = i;
		}
	}
	
	alert(`${index}: ${numbers[index]}`);
}

/**
Series22. Дано целое число N (> 1) и набор из N вещественных чисел. Если
данный набор образует убывающую последовательность, то вывести 0;
в противном случае вывести номер первого числа, нарушающего законо-
мерность.
*/

function series22() {
	let numbers = [12, 10, 9, 5, 7, 3, 1];
	//let numbers = [12, 10, 9, 5, 4, 3, 1];
	
	let index = 0;
	for (let i = 1; i < numbers.length; ++i) {
		if (numbers[i] >= numbers[i - 1]) {
			index = i;
			break;
		}
	}
	
	alert(`${index}: ${numbers[index]}`);
}

/**
Series23. Дано целое число N (> 2) и набор из N вещественных чисел. Набор
называется пилообразным, если каждый его внутренний элемент либо
больше, либо меньше обоих своих соседей (то есть является «зубцом»).
Если данный набор является пилообразным, то вывести 0; в противном
случае вывести номер первого элемента, не являющегося зубцом.
*/
function series23() {
	//let numbers = [100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1];
	let numbers = [-100, 1, -100, 1, 100, 1, -100, 1, -100, 1, -100, 1, -100, 1, -100, 1];
	
	let index              = 0;
	let is_current_bigger  = true;
	let is_current_smaller = true;
	
	let is_saw = true;
	
	for (let i = 0; i + 1 < numbers.length; ++i) {
		if (numbers[i] > numbers[i + 1] && is_current_bigger) {
			is_current_smaller = true;
			is_current_bigger  = false;
		}
		else if (numbers[i] < numbers[i + 1] && is_current_smaller) {
			is_current_smaller = false;
			is_current_bigger  = true;
		}
		else {
			index = i;
			is_saw = false;
			break;
		}
	}
	
	alert(index);
	alert(is_saw);
}

/**
Series24. Дано целое число N и набор из N целых чисел, содержащий по
крайней мере два нуля. Вывести сумму чисел из данного набора, распо-
ложенных между последними двумя нулями (если последние нули идут
подряд, то вывести 0).
*/
function series24() {
	let numbers = [1, 2, 0, 4, 5, 6, 7, 8, 16, 0, 11, 16, 13, 0, 15, 23];
	
	let sum = 0;
	let is_summing = false;
	for (let i = numbers.length - 1; i >= 0; --i) {
		if (numbers[i] == 0 && !is_summing) {
			is_summing = true;
			continue;
		}
		
		if (is_summing) {
			sum += numbers[i];
		}
		
		if (numbers[i] == 0 && is_summing) {
			break;
		}
	}
	
	alert(`Сума чисел між двома останніми нулями: ${sum}.`);
}

/**
Series25. Дано целое число N и набор из N целых чисел, содержащий по
крайней мере два нуля. Вывести сумму чисел из данного набора, распо-
ложенных между первым и последним нулем (если первый и последний
нули идут подряд, то вывести 0).
*/
function series25() {
	let numbers = [1, 2, 0, 4, 5, 6, 7, 8, 16, 0, 11, 16, 13, 0, 15, 23];
	
	let first_zero = numbers.findIndex(element => element == 0);
	let last_zero = numbers.lastIndexOf(0);
	
	let sum = 0;
	for (let i = first_zero + 1; i < last_zero; ++i) {
		sum += numbers[i];
	}
	
	alert(sum);
}

//series16();
//series22();
//series23();
//series24();
series25();