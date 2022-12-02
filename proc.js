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

/**
Proc32. Описать функцию DegToRad(D) вещественного типа, находящую ве-
личину угла в радианах, если дана его величина D в градусах (D — веще-
ственное число, 0 < D < 360). Воспользоваться следующим соотношением:
180° = π радианов. В качестве значения π использовать 3.14. С помощью
функции DegToRad перевести из градусов в радианы пять данных углов.
*/
function proc32() {
	function DegToRad(grades) {	
		if (grades < 0 || grades > 360) {
			throw Error("DegToRad: переданий параметр повнинен бути > 0 і <= 360");
		}
		
		return (grades / 180) * Math.PI;
	}
	
	for (let count = 5; count > 0; --count) {
		let grade = getRandomArbitrary(10, 300);
		console.log(`У градусах: ${grade.toFixed(2)}; у радіанах: ${DegToRad(grade).toFixed(2)}`);
		alert(`У градусах: ${grade.toFixed(2)}; у радіанах: ${DegToRad(grade).toFixed(2)}`);
	}
	
	try {
		DegToRad(-8);
	}
	catch (error) {
		alert(error.message);
	}
}

/**
Proc33. Описать функцию RadToDeg(R) вещественного типа, находящую вели-
чину угла в градусах, если дана его величина R в радианах (R — вещест-
венное число, 0 < R < 2·π). Воспользоваться следующим соотношением:
180° = π радианов. В качестве значения π использовать 3.14. С помощью
функции RadToDeg перевести из радианов в градусы пять данных углов.
*/
function proc33() {
	function RadToDeg(radians) {
		if (radians < 0 || radians > Math.PI * 2) {
			throw Error("DegToRad: переданий параметр повнинен бути > 0 і <= 2·π");
		}
		
		return (180 * radians) / Math.PI;
	}
	
	for (let count = 5; count > 0; --count) {
		let radian = getRandomArbitrary(0, Math.PI * 2);
		console.log(`У радіанах: ${radian.toFixed(2)}; у градусах: ${RadToDeg(radian).toFixed(2)}`);
		alert(`У радіанах: ${radian.toFixed(2)}; у градусах: ${RadToDeg(radian).toFixed(2)}`);
	}
	
	try {
		RadToDeg(-8);
	}
	catch (error) {
		alert(error.message);
	}
}

/**
Proc34. Описать функцию Fact(N) вещественного типа, вычисляющую значе-
ние факториала N! = 1·2·…·N (N > 0 — параметр целого типа; веществен-
ное возвращаемое значение используется для того, чтобы избежать цело-
численного переполнения при больших значениях N). С помощью этой
функции найти факториалы пяти данных целых чисел.
*/
function proc34() {
	function Fact(num) {
		if (num < 0) {
			throw Error("Fact: переданий параметр повинен бути >= 0.");
		}
		
		let result = 1;
		for (let i = num; i > 0; --i) {
			result *= i;
		}
		
		return result;
	}
	
	for (let count = 5; count > 0; --count) {
		let num = Math.floor( getRandomArbitrary(0, 10) );
		console.log(`Факторіал ${num}: ${Fact(num)}.`);
		alert(`Факторіал ${num}: ${Fact(num)}.`);
	}
	
	try {
		Fact(-8);
	}
	catch (error) {
		alert(error.message);
	}
}
/**
Proc35. Описать функцию Fact2(N) вещественного типа, вычисляющую двой-
ной факториал:
      N!! = 1·3·5·…·N, если N — нечетное;
      N!! = 2·4·6·…·N, если N — четное

(N > 0 — параметр целого типа; вещественное возвращаемое значение ис-
пользуется для того, чтобы избежать целочисленного переполнения при
больших значениях N). С помощью этой функции найти двойные факториалы
пяти данных целых чисел.
*/
function proc35() {
	function Fact2(num) {
		if (num <= 0) {
			throw Error("Fact2: переданий параметр повинен бути > 0.");
		}
		
		
		let result = 1;
		// якщо num парне, то i = 2 - num % 2 = 2 - 0 = 2;
		// якщо num непарне, то i = 2 - num % 2 = 2 - 1 = 1;
		for (let i = 2 - num % 2; i <= num; i += 2) {
			result *= i;
		}
		
		return result;
	}
	
	for (let count = 5; count > 0; --count) {
		let num = Math.floor( getRandomArbitrary(0, 9) );
		console.log(`Подвійний факторіал ${num}: ${Fact2(num)}.`);
		alert(`Подвійний факторіал ${num}: ${Fact2(num)}.`);
	}
	
	try {
		Fact2(0);
	}
	catch (error) {
		alert(error.message);
	}
}

/**
Proc36. Описать функцию Fib(N) целого типа, вычисляющую N-й элемент по-
следовательности чисел Фибоначчи FK, которая описывается следующими
формулами:

               F1 = 1, F2 = 1, FK = FK–2 + FK–1, K = 3, 4, … .
Используя функцию Fib, найти пять чисел Фибоначчи с данными номера-
ми N1, N2, …, N5.
*/
function proc36() {
	function Fib(element_index) {
		if (element_index <= 0) {
			throw Error("Fib: переданий параметр повинен бути > 0.");
		}
		
		let previous = 1;
		let current  = 1;
		
		for (let i = element_index; i > 2; --i) {
			let temp = previous;
			previous = current;
			current = temp + previous;
		}
		
		return current;
	}
	
	for (let count = 5; count > 0; --count) {
		let element_index = Math.floor( getRandomArbitrary(1, 20) );
		console.log(`${element_index}-й елемент послідовності Фібоначі: ${Fib(element_index)}.`);
		alert(`${element_index}-й елемент послідовності Фібоначі: ${Fib(element_index)}.`);
	}
	
	try {
		Fib(0);
	}
	catch (error) {
		alert(error.message);
		console.log(error.message);
	}
}

//proc1();
//proc3();
//proc32();
//proc33();
//proc34();
//proc35();
proc36();