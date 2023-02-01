"use strict";
console.log('Первое задание')
const firstString = "robin_singh@example.com";
let secondString = String(firstString.search("@"));
let thirdString = String(firstString.slice(0, secondString));
let finalString = String(thirdString.slice(secondString, 0) + firstString.slice(secondString));
let test = String(firstString.search("_"));
let secondTest = String(firstString.slice(0, test));
console.log(secondTest + "..." + finalString);


console.log('Третье задание')
const str = "Эйо, внучок, understand Твой дисс — это любовное письмо Морген-Стэн Чисто мэшапы Золотые цитаты Аля, ты сочиняешь всё Я не дёргал тебя за косички, ты мне не нравишься Зашквар";
const maxLength = 30;
let stringFirst = (str === maxLength);

