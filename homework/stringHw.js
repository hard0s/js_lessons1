"use strict";
console.log('Первое задание')
const firstString = "robin_singh@example.com";
let secondString = firstString.indexOf("@");
let thirdString = firstString.slice(0, secondString);
let finalString = thirdString.slice(secondString, 0) + firstString.slice(secondString);
let test = firstString.indexOf("_");
let secondTest = firstString.slice(0, test);
console.log(secondTest + "..." + finalString);


console.log("...Второе задание...")
const str = "JavaScript Exercises";

let idSpace = str.indexOf(" ");
let fWord = str.slice(0, idSpace);
let sWord = str.slice(idSpace);

let fChar = fWord.slice(0, 1);
fWord = fWord.slice(1);
let fLower = fChar.toLowerCase();
let string = fLower + fWord + sWord;
let std = string.replace(" ", "");
console.log(std,"\n");