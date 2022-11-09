let user = {
	_id   : 1023,
	_name : "John",
	_age  : 34,
	_phone: "+3504324928",
	
	getPrintable: function() {
		return `(id: ${this._id}; name: ${this._name}; age: ${this._age}; phone: ${this._phone})`;
	},
	
	set age(num) {
		if (num < 0) {
			throw Error("user.age: вік повинен бути більше нуля");
		}
		
		this._age = num;
	}
};

alert( user.getPrintable() );

user.age = 15;
alert( user.getPrintable() );

try {
	user.age = -3;
}
catch (e) {
	alert(e.message);
}
