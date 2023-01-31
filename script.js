"Use strict";
/*const enterance = 5;
const floor = 7;
const cvar = 4;

console.log('квартир в подъезде:', cvar*floor);
console.log('квартир в доме:', enterance*cvar*floor);

const x1 = 0;
const y1 = 4;

const x2 = 0;
const y2 = 3;
let lengX = x1 - y1;
let lengY = x2 - y2;
let gipC = lengX**2 + lengY**2;
let C = gipC**0.5;
console.log(C);
**/
console.log ('Введите трёхзначное число');
let startNumber = 452;
let firstNumber = startNumber % 10;
let test = startNumber % 100;
let secondNumber = (startNumber % 100 - firstNumber) / 10;
let thirdNumber = (startNumber - test) / 100;
/*console.log(thirdNumber)
console.log(secondNumber)
console.log(firstNumber)*/
let sum = thirdNumber + secondNumber + firstNumber;
console.log(sum)
let mult = thirdNumber * secondNumber * firstNumber;
console.log(mult)
