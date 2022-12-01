/***
 * Series31. Даны целые числа K, N, а также K наборов целых чисел по N элементов в каждом наборе.
 * Найти количество наборов, содержащих число 2. Если таких наборов нет, то вывести 0.
 */
let size = 5, pool = [], arr = [], arrTwo = [], poolTwo = [], sumArrOne = 0, sumArrTwo = 0, sumArray = {}, idx = 0, q = 0;

for (let i = 0; i <= 80; i++) {
    arr.push(i);
}

for (let i = 0; i <= size; i++) {
    let value = arr.splice(Math.floor(Math.random() * ((size - i) - 3) + 1), 1);
    pool.push(value.pop());

    if (pool [i] == 2) {
        idx = ++q;
    }
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

    if (pool [i] ==2) {
        idx = ++q;
    }
}

for (let i = 0; i <= size; i++) {
    sumArrTwo += poolTwo[i];
}

console.log(`Перший масив: `, pool);
console.log(`Другий масив: `, poolTwo);
console.log(`Кількість наборів, що містять число 2:`,idx);
