"use strict";


// let users = [{name:"jhon", login:"jhon13@gmail.com", password:"password"}, {name: "ivan", login:"popovivan252@gmail.com", password:"1234567890"},
// {name:"nikita", login:"nikitaif@gmail.com", password:"913618"}]


// let login = prompt("insert login")
// checkLogin(users, "login", login)
// function checkLogin(obj, key, value) {
// for (let i = 0; i<users.length; i++){
//     let use = users[i]
//     console.log('119684')
//     if(use[key] ==  value){
//         let pass = prompt("insert password")
//         for(let i = 0; i<users.length; i++){
//             let use = users[i]
//             if (use[password] === value){
//                 alert(`hello ${users.name}`)
//                 break;
//             }
//         }
//         break;
//     }
//     else{
//         alert("authentication error")
//         break;
//     }
// }
// // return pass;
// }

// Math.round(Math.random() *10)
let x = Math.round(Math.random() *10)
let checkAnsw = false
let answer = prompt("enter number")
check()

function check(){
   while(checkAnsw === false){
        if(parseInt(answer) === x){
        alert("Правильно")
        checkAnsw = true
        break;
        }
        else if (parseInt(answer) < x){
        answer = prompt("загаданное число больше. попробуй еще раз")
        }
        else if(parseInt(answer) > x){
            answer = prompt("загаданное число меньше. попробуй еще раз")
        }
        else if (typeof(parseInt(answer)) != "number"){
            answer = prompt("вы ввели не число введите ")
        }
    }
   
   


    


}