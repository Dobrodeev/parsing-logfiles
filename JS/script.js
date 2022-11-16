'use strict';

let calculator = {
  sum() {
    return this.a + this.b;
  },

  min() {
    return this.a - this.b;
  },

  mul() {
    return this.a * this.b;
  },

  div() {
    if (this.b == 0) return "На 0 делить нельзя.";
    else return this.a / this.b;
  },

  perc() {
    return this.a - (this.a / 100 * this.b);
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert(`Результат: ${calculator.sum()}, ${calculator.min()}, ${calculator.mul()}, ${calculator.div()}, ${calculator.perc()}`);