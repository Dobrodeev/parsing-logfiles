// залишання елементів масиву лише по одній штуці
function makeElementsBeOccuredOnce(array) {
    for (let i = 0; i < array.length; ++i) {
        const current = array[i];

        for (let j = i + 1; j < array.length; ++j) {
            if (array[j] == current) {
                // вилучити елемент за індексом j
                array.splice(j, 1);
                // масив зсунувся на 1 позицію
                --j;
            }
        }
    }
}

/*
1. Написати функцію, яка повертає тільки
однакові елементи двох множин (масивов).
*/
function task_1() {
    function getCommonElements(array_1, array_2) {
        // залишаємо лише спільні для array_1 й array_2 елементи
        common = new Array( array_1.filter(x => array_2.includes(x)) );
        makeElementsBeOccuredOnce(common);
        return common;
    }

    const array_1 = [328, 49743, 5, 328, 768032, 328, 4];
    const array_2 = [768032, 768032, 5, 4, 1, 1, 1];
    alert(
        `№1: ${array_1}\n№2: ${array_2}\n` +
            `Спільні елементи: ${getCommonElements(array_1, array_2)}`
    )
}

/*
2. Написати функцію, яка повертає тільки унікальні елементи двох множин.
*/
function task_2() {
    function getUniqueElements(set_1, set_2) {
        let unique = new Set(set_1);

        for (const element of set_2) {
            if ( unique.has(element) ) {
                unique.delete(element);
            }
            else {
                unique.add(element);
            }
        }

        return unique;
    }

    const set_1 = [328, 49743, 5, 328, 768032, 328, 4];
    const set_2 = [768032, 5, 4, 1, 9000];
    alert(
        `№1: ${set_1}\n№2: ${set_2}\n Унікальні елементи: ` +
            `${Array.from( getUniqueElements(set_1, set_2) )}`
    )
}

/*
3. Перетворити всі елементи списку типу string в верхній регістр,
використовуючи map.
*/
function task_3() {
    const array = [328, 'lingua', 5, 'чайка', 768032, 'ταύρος', 4];

    const processed = array.map(
        x => (typeof x === 'string')? x.toUpperCase() : x
    );

    alert(`Початковий масив: ${array}\nПеретворений масив: ${processed}`);
}

/*
4. Вивести всі елементу масиву, які є числом, використовуючи filter.
 */
function task_4() {
    const array = [328, 'lingua', 5, 'чайка', 768032, 'ταύρος', 4];

    const processed = array.filter(x => typeof x === 'number');

    alert(`Початковий масив: ${array}\nЛише числа: ${processed}`);
}

/*
5. Написати рекурсію, яка буде друкувати числа від введенного
користувачем до нуля.
*/
function task_5() {
    function printNumbersToZero(number) {
        number = Math.floor(number);
        if (number >= 0) {
            alert(number);
            printNumbersToZero(--number);
        }
    }

    printNumbersToZero( +prompt('Уведіть число:') );
}

/*
6. (необов'язкове виконання) Створити програму, яка буде приймати число і
 друкувати відповідне число в послідовності Фібоначчі, використовуючи рекурсію.
*/
function task_6() {
    // якщо аргумент не підходить, повертається undefined
    // повертає число з послідовності Фібоначчі за вказаним номером,
    // лік номерів починається з 0
    function fibonacci(number) {
        if (!Number.isInteger(number) || number <= 0) {
            return undefined;
        }

        function recursion(number) {
            if (number <= 1) {
                return 1;
            }
            else {
                return recursion(number - 1) + recursion(number - 2);
            }
        }

        return recursion(number);
    }

    const result = fibonacci( +prompt('Уведіть число:') );
    alert( (result === undefined)? 'Помилка' : result );
}

/*
7. (необов'язкове виконання) Написати програму, яка буде повертати факторіал
введеного числа, використовуючи рекурсію.
*/
function task_7() {
    // якщо аргумент не підходить, повертається undefined
    function factorial(number) {
        if (!Number.isInteger(number) || number <= 0) {
            return undefined;
        }

        function recursion(number) {
            if (number == 0) {
                return 1;
            }
            else {
                return number * recursion(--number);
            }
        }

        return recursion(number);
    }

    const result = factorial( +prompt('Уведіть число:') );
    alert( (result === undefined)? 'Помилка' : result );
}

//task_1();
//task_2();
//task_3();
//task_4();
//task_5();
//task_6();
task_7();
