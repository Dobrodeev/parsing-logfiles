function task1()
{
	let line_a_lenght = +prompt("[task1] Уведіть довжину відрізка A:");
	let part_b_lenght = +prompt("Уведіть довжину відрізка B (B < A):");
	
	if (
		line_a_lenght < part_b_lenght || 
			line_a_lenght <= 0 || 
			part_b_lenght <= 0
	) {
		alert(
			"[task1] Довжина B бути менша за довжину A й обидва числа повиині бути більше нуля."
		);
		return;
	}
	
	let rest = line_a_lenght;
	while (rest >= part_b_lenght) {
		rest -= part_b_lenght;
	}
	
	alert(`[task1] Лишок вільної довжини A: ${rest}.`);
}

function task2()
{
	let line_a_lenght = +prompt("[task2] Уведіть довжину відрізка A:");
	let part_b_lenght = +prompt("[task2] Уведіть довжину відрізка B (B < A):");
	
	if (
		line_a_lenght < part_b_lenght || 
			line_a_lenght <= 0 || 
			part_b_lenght <= 0
	) {
		alert(
			"[task2] Довжина B бути менша за довжину A й обидва числа повинні бути більше нуля."
		);
		return;
	}
	
	let rest = line_a_lenght;
	let count_of_num_of_b = 0;
	while (rest >= part_b_lenght) {
		rest -= part_b_lenght;
		
		++count_of_num_of_b;
	}
	
	alert(`[task2] На відрізку A може поміститися така кількість відрізків B: ${count_of_num_of_b}.`);
}

function task3()
{
	// ділене
	let divended_n = +prompt("[task3] Уведіть додатнє число N:");
	// дільник
	let divisor_k = +prompt("[task3] Уведіть додатнє число K:");
	
	if (divended_n <= 0 || divisor_k <= 0) {
		alert("[task3] K та N повинні бути більше нуля.");
		return;
	}
	
	// остача
	let remainder = divended_n;
	// частка
	let quotient = 0;
	
	while (remainder >= divisor_k) {
		remainder -= divisor_k;
		
		++quotient;
	}
	
	alert(`[task3] Частка від N / K: ${quotient}.`);
	alert(`[task3] Остача від N / K: ${remainder}.`);
}

function task7() {
	let max = +prompt("[task7] Уведіть число N більше 0:");
	
	if (max <= 0) {
		alert("[task7] Число N повинно бути більше 0.");
		return;
	}
	
	let k = 1;
	while (k * k < max) {
		k += 1;
	}
	
	alert(`[task7] Найменше число K, яке задовільняє умову K^2 > N: ${k}.`);
}

function task11() {
	let max = +prompt("[task11] Уведіть число N більше 0:");
	
	if (max <= 0) {
		alert("[task11] Число N повинно бути більше 0.");
		return;
	}
	
	let k = 1
	let sum = 0;
	
	let is_adding = true;
	while (is_adding) {
		sum += k;
		
		if (sum > max) {
			--k;
			is_adding = false;
		}
		
		++k;
	}
	
	alert(`[task11] Число K, яке задовільняє умову (1 + 2 + ... + K) >= N, це K = ${k}.\n N = ${max}, сума дорівнює ${sum}.`);
}

function task17() {
	let num = +prompt("[task17] Уведіть число N більше 0:");
	
	if (num <= 0) {
		alert("[task17] Число N повинно бути більше 0.");
		return;
	}
	
	let digits = new Array();
	while (num > 0) {
		digits.push(num % 10);
		
		num = Math.floor(num / 10);
	}
	
	digits.reverse();
	
	alert( "[task17] Цифри числа N: " + digits.join(", ") );
}

//task1();
//task2();
//task3();
//task7();
//task11();
task17();