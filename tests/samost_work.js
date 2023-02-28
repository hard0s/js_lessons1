"use strict";
//(условие)?(действие если условие истино):(действие если условие ложное)|| 
//3>5 ? console.log("первое число больше второго"):console.log("второе число больше первого")

console.log("Задание 2")
let arr = [10, 7, 0]
for (let i in arr){
    console.log(`number ${i}`)
}

console.log("Задание 3")
let number = 3
if (number === 0){
    console.log("вы ввели число 0")
}
else if (number === 1){
    console.log("вы ввели число 1")
}

else if (number === 2 || number === 3) {
    console.log("вы ввели число 2 или 3")
}



console.log("Задание 4")
let x = Math.round(Math.random() *5)
let y = Math.round(Math.random() *5)
if (x < y){
    let c = x * 2
    let z = y ** 2
    console.log(c, z)
}
else if (y<x){
    let c = y * 2
    let z = x ** 2
    console.log(c, z)
}
else {
    console.log("числа равны")
}
console.log("Задание 5")
let day = 7
if (day === 1){
    console.log("понедельник")
}
else if(day === 2){
    console.log("вторник")
}
else if(day === 3){
    console.log("среда")
}
else if(day === 4){
    console.log("четверг ")
}
else if(day === 5){
    console.log("пятница")
}
else if(day === 6){
    console.log("суббота")    
}
else if (day === 7){
    console.log("Воскресенье")
}
else{
    console.log("такого дня не существует")
}


console.log("Задание саши")
let login = "f"
login == "Сотрудник"? console.log('привет'): login == "Директор"? console.log('Здравствуйте')
: login == " "|| login == ""? console.log("Нет логина"): console.log(" ")
