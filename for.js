function task1()
{
	let num = +prompt("[task1] Уведіть число:");
	let count = 
		+prompt("[task1] Уведіть, скльки разів потрібно вивести число:");
		
	for (let i = 0; i < count; ++i) {
		alert(`${i + 1}-й раз: ${num}`);
	}
}

function task2()
{
	let a = +prompt("[task2] Уведіть число 'a':");
	let b = +prompt("[task2] Уведіть число 'b' (a < b):");
	
	if (a >= b) {
		alert("[task2] a повинно бути менше за b.");
		return;
	}
	
	let count = 0;
	for (let i = a; i <= b; ++i) {
		alert(`${i}`);
		++count;
	}
	
	alert(`[task2] Виведено чисел: ${count}`);
}

function task3()
{
	let a = +prompt("[task3] Уведіть число 'a':");
	let b = +prompt("[task3] Уведіть число 'b' (a < b):");
	
	if (a >= b) {
		alert("[task3] a повинно бути менше за b.");
		return;
	}
	
	let count = 0;
	for (let i = a + 1; i < b; ++i) {
		alert(`${i}`);
		++count;
	}
	
	alert(`[task3] Виведено чисел: ${count}`);
}



function task4()
{
	let price_per_kg = +prompt("[task4] Уведіть ціну за кілограм:");
	
	if (price_per_kg < 0) {
		alert("[task4] Ціна за кілограм повинна бути 0 або додатнім числом.");
		return;
	}
	
	const max_wage = 10;
	const min_wage = 1;
	const delta_wage = 1;
	for (let i = min_wage; i <= max_wage; i += delta_wage) {
		alert(`[task4] Ціна за ${i} кілограмів: ${i * price_per_kg}.`);
	}
}

function task5()
{
	let price_per_kg = +prompt("[task5] Уведіть ціну за кілограм:");
	
	if (price_per_kg < 0) {
		alert("[task5] Ціна за кілограм повинна бути 0 або додатнім числом.");
		return;
	}
	
	const max_wage = 1.0;
	const min_wage = 0.1;
	const delta_wage = 0.1;
	for (let i = min_wage; i <= max_wage; i += delta_wage) {
		alert(`[task5] Ціна за ${i} кілограмів: ${i * price_per_kg}.`);
	}
}

function task6()
{
	let price_per_kg = +prompt("[task6] Уведіть ціну за кілограм:");
	
	if (price_per_kg < 0) {
		alert("[task6] Ціна за кілограм повинна бути 0 або додатнім числом.");
		return;
	}
	
	const max_wage = 2.0;
	const min_wage = 1.2;
	const delta_wage = 0.2;
	for (let i = min_wage; i <= max_wage; i += delta_wage) {
		alert(`[task6] Ціна за ${i} кілограмів: ${i * price_per_kg}.`);
	}
}


//task1();
//task2();
//task3();
//task4();
//task5();
task6();