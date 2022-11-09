function Book (name, year, id) {
	this.name = name;
	this.year = year;
	this.id   = id;
	
	this.getPrintable = function() {
		return `(name: ${this.name}; year: ${this.year}; id: ${this.id})`;
	};
}

let book = new Book("Казки", 2013, 143);
alert( book.getPrintable() );