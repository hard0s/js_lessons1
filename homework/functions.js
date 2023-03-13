"use strict";
/*
let arrNum = [1, 2, -5 , 6, -1, -4, 11, 12, 10, 7, 6, 8, 9, 4, 3, 0]
let rangeCheck = false;
let finArray = [];


function IsNumberInRange(min, max){
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] >min && arrNum[i] <max){
            rangeCheck = true;
        }
        else {
            rangeCheck = false;
        }
        console.log(rangeCheck);
    }
    return rangeCheck;
}

for (let i = 0; i < arrNum.length; i++) {
    if () {
        finArray.push(arrNum[i])
    }

    console.log(finArray);
}
*/


console.log("Задание №2")
function CheckingAge(){
    for (let i = 0; i <= 100; i++) {
        if (i<= 17 && i>=1){
            console.log(`${i}-ребенок`)
        }
        else if (i<=30 && i>=18){
            console.log(`${i}-молодой`)
        }
        else if (i<=55 && i>30){
            console.log(`${i}-зрелый`)
        }
        else {
            console.log(`${i}- старый`)
        }
    }
}
CheckingAge()


console.log("Задание №3")



