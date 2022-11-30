// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

/**
Proc1. Описать процедуру PowerA3(A, B), вычисляющую третью степень числа
A и возвращающую ее в переменной B (A — входной, B — выходной пара-
метр; оба параметра являются вещественными). С помощью этой процеду-
ры найти третьи степени пяти данных чисел.
*/
function proc1() {
	function PowerA3(num) {
		return num * num * num;
	}
	
	let num = Math.floor( getRandomArbitrary(-100, 100) );
	
	alert(`Куб ${num}: ${PowerA3(num)}.`);
}

/**
Proc3. Описать процедуру Mean(X, Y, AMean, GMean), вычисляющую среднее
арифметическое AMean = (X + Y)/2 и среднее геометрическое GMean = _/-(X ⋅Y)
= X ⋅Y двух положительных чисел X и Y (X и Y — входные, AMean
и GMean — выходные параметры вещественного типа). С помощью этой
процедуры найти среднее арифметическое и среднее геометрическое для
пар (A, B), (A, C), (A, D), если даны A, B, C, D.
*/
function proc3() {
	function Mean(a, b) {
		let arithmetic = (a + b) / 2;
		let geometric = Math.sqrt(a * b);
		
		return {AMean: arithmetic, GMean: geometric};
	}
	
	let result = Mean(2, 5);
	alert(`AMean: ${result.AMean}; GMean: ${result.GMean}`);
}

//proc1();
proc3();