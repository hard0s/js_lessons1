"Use strict";

console.log('Второе задание')
const firstNumber = Math.round(Math.random()*100);
const secondNumber = Math.round(Math.random()*100);
let frac = ((firstNumber + secondNumber) / 2) ;
let v = (((firstNumber + secondNumber) / 2) % 1) ;

console.log('Первое число:', firstNumber)
console.log('Второе число:', secondNumber)
console.log('Среднее арифметическое',frac);
console.log('Дробная часть:',v)
