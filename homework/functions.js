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
let forclean = [null, 0,"", 1, 2, 3, 4, 5, false, undefined, false, 0 ];


function DoFilter(){
    for (let i = 0; i < forclean.length; i++){
        if (forclean[i] ===undefined){
            forclean.pop(forclean[i])
        }
        else if (forclean[i] === false ) {
            forclean.pop(forclean[i])
        }
        else if(typeof forclean[i] === "null"){
            forclean.pop(forclean[i])
        }
        else if (forclean[i] === 0){
            forclean.pop(forclean[i])
        }
        else if (forclean[i] === "" && forclean[i] === " "){
            forclean.shift(forclean[i])
        }
        else {
            continue
        }

    }
    console.log(forclean)
   return forclean

}
DoFilter()


