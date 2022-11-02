function task1()
{
	let num = +prompt("[task1] Уведіть число: ");
	
	if (num > 0) {
		num += 1;
	}
	
	alert(`[task1] Вихідне число: ${num}`);
}

function task2()
{
	let num = +prompt("[task2] Уведіть число: ");
	
	if (num > 0) {
		num += 1;
	}
	else {
		num -= 2;
	}
	
	alert(`[task2] Вихідне число: ${num}`);
}

function task3()
{
	let num = +prompt("[task3] Уведіть число: ");
	
	if (num == 0) {
		num = 10;
	}
	else if (num > 0) {
		num += 1;
	}
	else {
		num -= 2;
	}
	
	alert(`[task3] Вихідне число: ${num}`);
}

function task4()
{
	let nums = [
		+prompt("[task4] Уведіть число: "),
		+prompt("[task4] Уведіть число: "),
		+prompt("[task4] Уведіть число: ")
	];
	
	let count_of_positives = 0;
	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] > 0) {
			++count_of_positives;
		}
	}
	
	alert(`Додатніх чисел: ${count_of_positives}`);
}

function task5()
{
	let nums = [
		+prompt("[task5] Уведіть число: "),
		+prompt("[task5] Уведіть число: "),
		+prompt("[task5] Уведіть число: ")
	];
	
	let count_of_positives = 0;
	let count_of_negatives = 0;
	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] > 0) {
			++count_of_positives;
		}
		
		if (nums[i] < 0) {
			++count_of_negatives;
		}
	}
	
	alert(`Додатніх чисел: ${count_of_positives}`);
	alert(`Від'ємних чисел: ${count_of_negatives}`);
}

function task6()
{
	let a = +prompt("[task6] Уведіть число: ");
	let b = +prompt("[task6] Уведіть іще число: ");
	
	alert(`[task6] Найбільше число: ${(a > b)? a : b}`);
}

//task1();
//task2();
//task3();
//task4();
//task5();
task6();