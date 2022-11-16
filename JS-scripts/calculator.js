let calculator = {
    sum() {
        return this.a + this.b;
    },

    minus() {
        return this.a - this.b;
    },

    mul() {
        return this.a * this.b;
    },

    sqrt() {
        return this.a ** (1 / this.b);
    },

    percent1() {
        return this.a / 100 * this.b;
    },

    percent2() {
        return this.a - this.percent1();
    },

    div() {
        return this.a / this.b;
    },

    factor() {
        let fact = 1;
        for (let i = 1; i <= this.a; i++) {
            fact *= i;
        }
        return fact;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
// alert( calculator.sum() );
// alert( calculator.minus() );
// alert( calculator.mul() );
// alert( calculator.sqrt() );
// alert( calculator.percent1() );
// alert(calculator.percent2());
// alert( calculator.div() );
alert( calculator.factor() );
