'use strict';

const PETE_NAME = 'Pete from Const';

function greet(name) {
    console.log('Hello ' + name + '!');
}


for (let i = 15; i <= 30; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


function printOddNumbersWithRange(start, end) {
    console.log(`Odd numbers in range ${start} : ${end}`)
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

function average(num1, num2) {
    return (num1 + num2) / 2;
}

function square(num) {
    return num * num;
}

greet('Pete');
greet(PETE_NAME);


// printOddNumbersWithRange(200, 800);

console.log(average(12, 20));

console.log(square(3));