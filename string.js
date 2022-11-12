function string1() {
	alert ("Код букви: " + prompt("Уведіть букву:").charCodeAt(0) + ".");
}

function string2() {
	let code = +prompt("Уведіть число N (32 <= N <= 126):");
	
	if (code < 32 || code > 126) {
		alert("Число N повинно задовільняти умові 32 <= N <= 126.");
		return;
	}
	
	alert(`Відповідний символ за кодом N: "${String.fromCharCode(code)}".`);
}

function string13() {
	let in_string = prompt("Уведіть рядок:");
	
	let counter = 0;
	for (let i = 0; i < in_string.length; ++i) {
		// чи є символ цифрою
		if ( !!/[0-9]/.exec(in_string[i]) ) {
			++counter;
		}
	}
	
	alert(`Цифр у введеному рядку: ${counter}.`);
}

function string18() {
	let in_string = prompt("Уведіть рядок:");
	
	let out_string = new Array();
	
	for (let i = 0; i < in_string.length; ++i) {
		// чи є символ буквою
		if ( in_string[i].toLowerCase != in_string[i].toUpperCase ) {
			// чи є символ малою буквою
			if ( in_string[i] == in_string[i].toLowerCase() ) {
				out_string.push( in_string[i].toUpperCase() );
			}
			
			// чи є символ великою буквою
			if ( in_string[i] == in_string[i].toUpperCase() ) {
				out_string.push( in_string[i].toLowerCase() );
			}
		}
	}
	
	alert( out_string.join("") );
}

//string1();
//string2();
string13();
//string18();