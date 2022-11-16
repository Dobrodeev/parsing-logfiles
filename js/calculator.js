/**
 * Создайте объект calculator (калькулятор) с тремя методами:
 * read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
 * sum() (суммировать) возвращает сумму сохранённых значений.
 * mul() (умножить) перемножает сохранённые значения и возвращает результат.
 */
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );