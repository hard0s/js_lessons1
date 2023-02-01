"use strict";
console.log('Первое задание')
const firstString = "robin_singh@example.com";
let secondString = firstString.search("@");
let thirdString = firstString.slice(0, secondString);
let finalString = thirdString.slice(secondString, 0) + firstString.slice(secondString);
let test = firstString.search("_");
let secondTest = firstString.slice(0, test);
console.log(secondTest + "..." + finalString);

console.log('Второе задание')
const strin = "JavaScript Exercises";
const end = strin.length;
let strinRep = strin.replace("Java", "java");
let E = strin.search("E");
let z = strin.search(" ");
let t = strin.slice(z + 1, end);
let strstr = strinRep.slice(0, z) + t  ;
console.log(strstr);




console.log('Третье задание')
const str = "Эйо, внучок, understand Твой дисс — это любовное письмо Морген-Стэн Чисто мэшапы Золотые цитаты Аля, ты сочиняешь всё Я не дёргал тебя за косички, ты мне не нравишься Зашквар";
const maxLength = 30;
let stringFirst = (str === maxLength);

