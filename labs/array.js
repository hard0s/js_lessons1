"use strict";

console.log("№1")
let ar = []
const count0 = 100
for (let i = 0; i < count0; i += 1){
    let a = Math.round(Math.random() *100)
    ar.push(a)
}
console.log(ar)


console.log("№2")
let str = "Привет, мир!"
const len = str.length - 1
for (let i = len; i >= 0; i--) {
}




console.log("№3")
const mine = [false, false, false, true, false, true, false, false, false, false]

let text = "";
let count = 0;
for(let i = 0; i < mine.length; i++) {
    if (mine[i] === true){
        count += 1;
        text = "Ранен"
    }
    else if (count === 2){
        console.log("Танк уничтожен")
        break;
    }
    else {
        text = "Мины нету"
    }
    console.log(`Танк на ${i + 1} клетке. ${text}`)
}
