"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

function drawASlide(rows, symbol) {
    for (let i = 1; i <= rows; i++) {
        console.log(symbol.repeat(i));
    }
}

drawASlide(20, 'x');
