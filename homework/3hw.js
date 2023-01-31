"Use strict";
//задание 2
const startNumb = Math.round(Math.random() * 89) + 10;
console.log('исходное число:', startNumb)
const unitsNumber = (startNumb % 10);
console.log('единицы:',unitsNumber);
const doz = (startNumb - unitsNumber) / 10;
console.log('десятки:',doz) 
const x = (unitsNumber * 10 + doz);
console.log ('поменяли цифры местами:', x)
