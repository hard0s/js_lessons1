"use Strict";

console.log('Первое задание_________________________________________')
const x1 = 2;
const x2 = 10;
const y1 = 3;
const y2 = 5;

let x =Math.abs(x2) -Math.abs(x1);
let y = Math.abs(y2) - Math.abs(y1);
let s = x * y;
console.log('Площадь:', s); 


console.log('Второе задание_________________________________________')
const number = 13.123456789;
const secondNumber = 2.123;
const n = 5;
let fracNumber = (number % 1) * 10**n;

let fracSecondNumber = (secondNumber % 1) * 10**n;
console.log('дробная часть первого числа:', Math.trunc(fracNumber));

console.log('дробная часть второго числа:',Math.trunc(fracSecondNumber));
console.log('сравнение первого числа и второго числа:', fracNumber === fracSecondNumber);
console.log('первое число меньше второго?', fracNumber < fracSecondNumber);
console.log('первое число больше второго?', fracNumber > fracSecondNumber);

console.log('Третье задание_________________________________________')
const startMin = 1000;
const startMax = -500;
let min = Math.min(startMin, startMax);
let max = Math.max(startMin, startMax);
let maxMin = max - min;
let randNumber = Math.floor(Math.random() * maxMin / 2) * 2 + 1;
console.log(randNumber);


