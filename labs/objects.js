"use strict";



let obj = [
    { name: "Васили", surname: "Васильев" },
    { name:"Иван", surname: "Иванов" },
    { name: "Пётр", surname: "Петров" }
]
let finmas = []

function filter(objects, key, value ){
    for (let i = 0; i<obj.length; i++){
        const object = obj[i] 
        if (object[key] === value ){
            finmas.push(obj[i])
        }
    }
    return finmas
}
let result = filter(obj, "name", "Пётр")
console.log(result);