// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function getRandomArray(min, max, amount, precision) {
	if (amount < 0) {
		throw Error("getRandomArray(min, max, amount, precision): amount повинно бути >= 0");
	}

	if (precision < 0) {
		throw Error("getRandomArray(min, max, amount, precision): precision повинно бути >= 0");
	}

	let random_numbers = new Array();
	for (let i = 0; i < amount; ++i) {
		random_numbers.push( +getRandomArbitrary(min, max).toFixed(precision) );
	}

	return random_numbers;
}

/**
Minmax1º. Дано целое число N и набор из N чисел. Найти минимальный и мак-
симальный из элементов данного набора и вывести их в указанном поряд-
ке.
*/
function minmax1() {
	const numbers = getRandomArray(-100, 100, 8, 2);

	alert(
		`Числа: ${numbers}\n` +
		`Найменше: ${Math.min(...numbers)}\n` +
		`Найбільше: ${Math.max(...numbers)}`
	);
}

/**
Minmax2. Дано целое число N и набор из N прямоугольников, заданных своими
сторонами — парами чисел (a, b). Найти минимальную площадь прямо-
угольника из данного набора.

Minmax3. Дано целое число N и набор из N прямоугольников, заданных своими
сторонами — парами чисел (a, b). Найти максимальный периметр прямо-
угольника из данного набора.
*/
function minmax2_3() {
	const rectangles = [
		{length: 2, width: 4}, //площа: 8
		{length: 1, width: 1}, //площа: 1
		{length: 1, width: 7}, //площа: 7
		{length: 5, width: 3}, //площа: 15
		{length: 3, width: 4}, //площа: 12
	];

	const min_area = Math.min(
		...rectangles.map(rectangle => rectangle.length * rectangle.width)
	);
	const max_area = Math.max(
		...rectangles.map(rectangle => rectangle.length * rectangle.width)
	);

	alert(
		`Найменша площа: ${min_area}\n` +
		`Найбільша площа: ${max_area}`
	);
}

/**
Minmax4. Дано целое число N и набор из N чисел. Найти номер минимального
элемента из данного набора.
*/
function minmax4() {
	const numbers = getRandomArray(-100, 100, 8, 2);

	let min_index = 0;
	for (let i = 0; i < numbers.length; ++i) {
		if (numbers[min_index] > numbers[i]) {
			min_index = i;
		}
	}

	alert(
		`Числа: ${numbers}\n` +
		`Номер найменшого числа: ${min_index}\n` +
		`Власне найменше число: ${numbers[min_index]}`
	);
}

/**
Minmax5. Дано целое число N и набор из N пар чисел (m, v) — данные о массе
m и объеме v деталей, изготовленных из различных материалов. Вывести

номер детали, изготовленной из материала максимальной плотности, а
также величину этой максимальной плотности. Плотность P вычисляется
по формуле P = m/v.
*/
function minmax5() {
	const detailes = [
		{mass: 2, volume: 4}, //густина: 0.5
		{mass: 1, volume: 1}, //густина: 1
		{mass: 1, volume: 7}, //густина: 0.1429
		{mass: 5, volume: 3}, //густина: 1.6667
		{mass: 3, volume: 4}, //густина: 0.75
	];

	const densities = detailes.map(detail => detail.mass / detail.volume);

	let max_index = 0;
	for (let i = 0; i < densities.length; ++i) {
		if (densities[max_index] < densities[i]) {
			max_index = i;
		}
	}

	alert(
		`Номер деталі з найбільшою густиною: ${max_index}\n` +
		`Її густина: ${+densities[max_index].toFixed(4)}`
	);
}

/**
Minmax8. Дано целое число N и набор из N целых чисел. Найти номера первого
и последнего минимального элемента из данного набора и вывести их в
указанном порядке.
*/
function minmax8() {
	const numbers = getRandomArray(1, 4, 8, 0);
	
	const min_element = Math.min(...numbers);
	
	const first_index_of_min = numbers.findIndex(num => num == min_element);
	const last_index_of_min = numbers.lastIndexOf(min_element);
	
	alert(
		`Числа: ${numbers}\n` +
		`Найменше число: ${min_element}\n` +
		`Перший індекс наймешого числа: ${first_index_of_min}\n` +
		`Останній індекс наймешого числа: ${last_index_of_min}`
	);
}

/**
Minmax12◦. Дано целое число N и набор из N чисел
Найти минимальное положительное число из данного набора.
Если положительные числа в наборе отсутствуют, то вывести 0.
*/
function minmax12() {
	let numbers = getRandomArray(-3, 3, 5, 1);
	
	let min_positive = Number.MAX_VALUE;
	let is_positive_numbers = false;
	for (let i = 0; i < numbers.length; ++i) {
		if (min_positive > numbers[i] && numbers[i] > 0) {
			min_positive = numbers[i];
			
			is_positive_numbers = true;
		}
	}

	alert(
		`Числа: ${numbers}\n` +
		`Чи є додатні числа в масиві: ${(is_positive_numbers)? "так" : "ні"}\n` +
		`Найменше додатнє число: ${min_positive}`
	);
}

/**
Minmax16. Дано целое число N и набор из N целых чисел.
Найти количество элементов, расположенных перед первым минимальным элементом.
*/
function minmax16() {
	let numbers = getRandomArray(0, 5, 8, 0);
	
	const min_element = Math.min(...numbers);
	// оскільки індексування масивів починаєттся з 0, то нічого рахувати не треба,
	// тобто first_index_of_min є кількістю елементів перед першим найменшим числом
	const first_index_of_min = numbers.findIndex(num => num == min_element);
	
	alert(
		`Числа: ${numbers}\n` +
		`Найменше число: ${min_element}\n` +
		`Перший індекс наймешого числа: ${first_index_of_min}\n` +
		`Кількість елементів перед першим найменшим числом: ${first_index_of_min}`
	);
}

/**
Minmax20. Дано целое число N и набор из N целых чисел.
Найти общее количество экстремальных (то есть минимальных и максимальных) элементов из данного набора.
*/
function minmax20() {
	let numbers = getRandomArray(-7, 7, 15, 0);
	
	let minimum = Math.min(...numbers);
	let maximum = Math.max(...numbers);
	
	let num_of_mins = 0;
	numbers.forEach(
		num => {
			if (num == minimum) {
				++num_of_mins;
			}
		}
	);
	
	let num_of_maxs = 0;
	numbers.forEach(
		num => {
			if (num == maximum) {
				++num_of_maxs;
			}
		}
	);
	
	let num_of_extrems = num_of_mins + num_of_maxs;
	
	alert(
		`Числа: ${numbers}\n` +
		`Найменше число: ${minimum}\n` +
		`Найбільше число: ${maximum}\n` +
		`Кількість екстремальних чисел: ${num_of_extrems}`
	);
}

try {
	//minmax1();
	//minmax2_3();
	//minmax4();
	//minmax5();
	//minmax8();
	//minmax12();
	//minmax16();
	minmax20();
}
catch (error) {
	alert(error.message);
	console.log(error.message);
}