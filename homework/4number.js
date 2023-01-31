"Use strict";
const firstNumber = Math.round(Math.random() * -1998) + 999;
const secondNumber = Math.round(Math.random() * -1998) + 999;
const thirdNumber = Math.round(Math.random() * -1998) + 999;
const x = Math.abs((firstNumber**3) + (secondNumber**3) + (thirdNumber**3)) / 3;
console.log ('Среднее арифметическое:', x.toFixed(2));
const y = (firstNumber**2 + secondNumber**2 + thirdNumber**2)**1/3;
console.log ('Среднее геометрическое:', y.toFixed(2));
