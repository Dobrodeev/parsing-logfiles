/***
 * Series33. Даны целые числа K, N, а также K наборов целых чисел по N элементов в каждом наборе.
 * Для каждого набора вывести номер его последнего элемента, равного 2, или число 0, если в данном наборе нет двоек
 */
let size = 5, pool = [], arr = [], arrTwo = [], poolTwo = [], sumArrOne = 0, sumArrTwo = 0, sumArray = {}, idx = 0, q = 0;

for (let i = 0; i <= 22; i++) {
    arr.push(i);
}

for (let i = 0; i <= size; i++) {
    let value = arr.splice(Math.floor(Math.random() * ((size - i) - 2)), 1);
    pool.push(value.pop());

    if (pool [i] == 2) {
        idx = ++q;
        i += 1;
        console.log(`Номер останнього елемента =2 першого набору: `,i);
    }

}

for (let i = 0; i <= size; i++) {
    sumArrOne += pool[i];
}


//Второй масиив
for (let i = 0; i <= 80; i++) {
    arrTwo.push(i);
}
for (let i = 0; i <= size; i++) {
    let value = arrTwo.splice(Math.floor(Math.random() * ((size - i) - 3) + 1), 1);
    poolTwo.push(value.pop());

    if (poolTwo [i] == 2 || poolTwo [i] > 2) {
        idx = ++q;
        i += 1;
        console.log(`Номер першого елемента >2 другого набору: `,i);
    }
}

for (let i = 0; i <= size; i++) {
    sumArrTwo += poolTwo[i];
}

console.log(`Перший масив: `, pool);
console.log(`Другий масив: `, poolTwo);