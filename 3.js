"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const getArrayForInterval = (min, max, lengthArray) => {
    const array = [];
    for (let i = 0; i < lengthArray; i++) {
        array.push(Math.floor(Math.random() * (max - min) + min));
    }
    return array;
}

const getSumItemArray = (array) => {
    return array.reduce((sum, item) => sum + item, 0);
}

const getMinItemArray = (array) => {
    return Math.min(...array);
}


function newArrayFrom3(anyArray) {
    const resultArrayFrom3 = [];
    for (let i = 0; i < anyArray.length; i++) {
        if (anyArray[i] === 3) {
            resultArrayFrom3.push(i);
        }
    }
    return resultArrayFrom3;
}

console.log(JSON.stringify(getArrayForInterval(0, 9, 5)));
console.log(JSON.stringify(getSumItemArray([2, 3, 5, 7, 3])));
console.log(JSON.stringify(getMinItemArray([2, 3, 5, 7, 3])));
console.log(JSON.stringify(newArrayFrom3([2, 3, 5, 7, 3])));