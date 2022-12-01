/***
 Даны целые числа K, N, а также K наборов целых чисел по N элементов в каждом наборе.
 Вывести общую сумму всех элементов, входящих в данные наборы.
 */
let size = 5, pool = [], arr = [], arrTwo = [], poolTwo = [], sumArrOne = 0, sumArrTwo = 0, sumArray = {};

for (let i = 0; i <= 80; i++) {
    arr.push(i);
}

for (let i = 0; i <= size; i++) {
    let value = arr.splice(Math.floor(Math.random() * ((size - i) - 3) + 1), 1);
    pool.push(value.pop());
}

for (let i = 0; i <= size; i++) {
    sumArrOne += pool[i];
}


//Второй масиив
for (let i = 0; i <= 100; i++) {
    arrTwo.push(i);
}
for (let i = 0; i <= size; i++) {
    let value = arrTwo.splice(Math.floor(Math.random() * ((size - i) - 3) + 1), 1);
    poolTwo.push(value.pop());
}

for (let i = 0; i <= size; i++) {
    sumArrTwo += poolTwo[i];
}


sumArray = sumArrOne + sumArrTwo;

console.log(`Перший масив: `, pool);
console.log(`Сума першого масиву =`, sumArrOne);
console.log(`Другий масив: `, poolTwo);
console.log(`Сума другого масиву =`, sumArrTwo);
console.log(`Сума двох масивів =`, sumArray);
