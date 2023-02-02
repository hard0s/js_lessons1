"use strict";
console.log('Первое задание')
const firstString = "robin_singh@example.com";
let secondString = firstString.indexOf("@");
let thirdString = firstString.slice(0, secondString);
let finalString = thirdString.slice(secondString, 0) + firstString.slice(secondString);
let test = firstString.indexOf("_");
let secondTest = firstString.slice(0, test);
console.log(secondTest + "..." + finalString);



console.log('Второе задание')
const strin = "JavaScript Exercises";
const end = strin.length;
let strinRep = strin.replace("Java", "java");
let z = strin.indexOf(" ");
let t = strin.slice(z + 1, end);
let strstr = strinRep.slice(0, z) + t  ;
console.log(strstr);
