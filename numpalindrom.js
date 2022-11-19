/**
Розбиває число на цифри.

@param num число, яке потрібно розбити на цифри. 
Якщо воно рівне чи більше 0, функція викидає виняток
@return Масив цифр числа.
*/
function splitNumberInDigits(num) {
	if (num <= 0) {
		throw Error("splitNumberInDigits: передане число повинно бути більше 0.");
		return;
	}
	
	let digits = new Array();
	while (num > 0) {
		digits.push(num % 10);
		
		num = Math.floor(num / 10);
	}
	digits.reverse();
	
	return digits;
}

/**
Перевіряє число на паліндромічність.

@param num число, яке потрібно перевірити.
@return true, якщо число є паліндромним, інакше false.
*/
function isPalindromicNumber(num) {
	let digits = splitNumberInDigits(num);
	
	for (
		let i = 0, j = digits.length - 1;
		i < digits.length / 2 + 1 && j > digits.length / 2 - 1;
		++i, --j
	) {
		if (digits[i] != digits[j]) {
			return false;
		}
	}
	
	return true;
}

alert(`919: ${isPalindromicNumber(919)}`);
alert(`99: ${isPalindromicNumber(99)}`);
alert(`9: ${isPalindromicNumber(9)}`);

alert(`911: ${isPalindromicNumber(911)}`);
alert(`91: ${isPalindromicNumber(91)}`);