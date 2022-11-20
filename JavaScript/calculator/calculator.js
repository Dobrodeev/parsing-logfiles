function Calculator() {

    this.read = function() {
        this.a = +prompt('a?', 0);
        this.pros = +prompt('b?', 0);

    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };

    /*Считаем среднее арифметическое*/
    this.sr = function() {
        return (Math.round((this.a + this.b + this.c + this.d)/ 4));
    }

    /*Считаем процент от числа*/
    this.geo = function() {
        return this.a / 100 * this.pros;
    }


}

let calculator = new Calculator();
calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
// alert( "Sr=" + calculator.sr() );
alert( "Sr=" + calculator.geo() );
