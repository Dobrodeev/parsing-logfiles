/***
 * Minmax1º. Дано целое число N и набор из N чисел.
 * Найти минимальный и максимальный из элементов данного набора и вывести их в указанном порядке
 */
const numbers = [3, 4, 12, 3, 5, 2, 7]; // исходный массив

function minMax(numbers){
    // создадим переменную в которую будем сохранять текущее минимальное значение
    // установим в нее значение из первого элемента массива

    let minimum = numbers[0];

    for (const item of numbers) {
        if(item < minimum) {
            minimum = item; // если находим другое минимальное число, то сохраняем в переменную
        }
    }
    let maximum = numbers[0];
    for (const item of numbers) {
        if(item > maximum) {
            maximum = item; // если находим другое минимальное число, то сохраняем в переменную
        }
    }
    console.log(`Числа:`,numbers);
    console.log(`Найменше число: `, minimum); // => 1
    console.log(`Найбільше число: `, maximum); // => 1
}


/***
 * Minmax2. Дано целое число N и набор из N прямоугольников, заданных своими сторонами — парами чисел (a, b).
 * Найти минимальную площадь прямоугольника из данного набора.
 *
 * Minmax3. Дано целое число N и набор из N прямоугольников, заданных своими сторонами — парами чисел (a, b).
 * Найти максимальный периметр прямоугольника из данного набора.
 */

function minMax2_3(){
    let n =+prompt('Введіть кількість прямокутників:');
    let min = {};
    let max = {};
    for (let i = 1; i <= n; ++i){
        let a =+prompt('Введіть сторону А:');
        let b =+prompt('Введіть сторону Б:');
        let S = a * b;

        if (i == 1){
            min = S;
            max = S;

        }
        if (S < min) {
            min = S;
        }

        if (S > min) {
            max = S;
        }

        document.write(`Площа ${i}-го прямокутника = `,S  + `<br>`);

    }
    document.write(`Найменша площа: `,min + `<br>` );
    document.write(`Найбільша площа: `,max + `<br>` );
}


/***
 * Minmax4. Дано целое число N и набор из N чисел. Найти номер минимального элемента из данного набора.
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomArray(min, max, amount, precision) {
    let randNum = new Array();
    for (let i = 0; i < amount; ++i) {
        randNum.push( +getRandomArbitrary(min, max).toFixed(0) );
    }
    return randNum;
}

function minMax4() {

    const arrayNum = getRandomArray(0, 100, 5, 2);

    let minIdx = 0;
    for (let i = 0; i < arrayNum.length; ++i) {
        if (arrayNum[minIdx] > arrayNum[i]) {
            minIdx = i;
        }
    }
    console.log(`Згенерований набір: `, arrayNum);
    console.log(`Найменше число: `, minIdx);
    console.log(`Номер мінімального числа: `, arrayNum[minIdx]);
}


/***
 * Minmax5. Дано целое число N и набор из N пар чисел (m, v) — данные о массе m и объеме v деталей, изготовленных из различных материалов.
 * Вывести номер детали, изготовленной из материала максимальной плотности, а также величину этой максимальной плотности.
 * Плотность P вычисляется по формуле P = m/v
 */

function minMax5(){
    const list = [
        {m: 4, v: 2}, //густина: 2
        {m: 10, v: 3}, //густина: 3.333
        {m: 20, v: 4}, //густина: 5
    ];

    const P = list.map(list => list.m / list.v);

    let maxIdx = 0;
    for (let i = 0; i < P.length; ++i) {
        if (P[maxIdx] < P[i]) {
            maxIdx = i;

        }

    }
    console.log(maxIdx);
    console.log(P[maxIdx]);
}

/***
 * Minmax6. Дано целое число N и набор из N целых чисел. Найти номера первого минимального и последнего максимального элемента из данного набора и вывести их в указанном порядке
 */






// minMax(numbers);
// minMax2_3();
// minMax4();
// minMax5();
minMax6();