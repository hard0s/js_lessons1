"use strict";
let standartMass = [1, 2, "Чебурек", "nigga",true,"", ["лол", "кек"], [ 1, 2, 65], 695, 789, "dead", NaN, undefined, null, true, false]
let num = ["number"]
let str = ["string"]
let arr = ["array"]
let ano =["another"]

let mass = []
function getSort(standartMass) 
{
getNumber(standartMass);
mass.push(`${num}`)
getString(standartMass);
mass.push(`${str}`)
getArray(standartMass);
mass.push(`${arr}`)
getAnother(standartMass);
mass.push(`${ano}`)
return mass
}
function getNumber(standartMass) {
    for (let i = 0; i < standartMass.length; i++) {
        if (typeof standartMass[i] === "number") {
        num.push(standartMass[i])
        }
        else{
            continue
        }
    }

}
function getString(standartMass) {
    for (let i = 0; i < standartMass.length; i++) {
        if (typeof standartMass[i] === "string") {
        str.push(standartMass[i])
        }
        else{
            continue
        }
    }
}

function getArray(standartMass) {
    for (let i = 0; i < standartMass.length; i++) {
        if (typeof standartMass[i] === "object") {
        arr.push(standartMass[i])
        }
        else{
            continue
        }
    }
}
function getAnother(standartMass) {
    for (let i = 0; i < standartMass.length; i++) {
        if (typeof standartMass[i] === "boolean" ||typeof standartMass[i] === "null" || typeof standartMass[i] === "undefined" || typeof standartMass[i] === "Null") {
        ano.push(standartMass[i])
    }
    else {
        continue
        
    }
}
}

console.log(getSort(standartMass))