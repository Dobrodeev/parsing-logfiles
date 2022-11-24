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

function isNarcissisticsNumber(number) {
    let digits = splitNumberInDigits(number);
    
    let check_num = 0;
    for (let i = 0; i < digits.length; ++i) {
        check_num += digits[i] ** digits.length;
    }
    
    return check_num == number;
}

try {

console.log(`123 (false): ${isNarcissisticsNumber(123)}`);
console.log(`153 (true): ${isNarcissisticsNumber(153)}`);
console.log(`1652 (false): ${isNarcissisticsNumber(1652)}`);
console.log(`1634 (true): ${isNarcissisticsNumber(1634)}`);
console.log(`7 (true): ${isNarcissisticsNumber(7)}`);
console.log(`0 (true): ${isNarcissisticsNumber(0)}`);

}
catch (error) {
    console.log(error.message);
}