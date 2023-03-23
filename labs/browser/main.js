"use strict";


let users = [{name:"jhon", login:"jhon13@gmail.com", password:"password"}, {name: "ivan", login:"popovivan252@gmail.com", password:"1234567890"},
{name:"nikita", login:"nikitaif@gmail.com", password:"913618"}]


let login = prompt("insert login")
checkLogin(users, "login", login)
function checkLogin(obj, key, value) {
for (let i = 0; i<users.length; i++){
    const use = users[i]
    console.log('119684')
    if(use[key] ==  value){
        let pass = prompt("insert password")
        checkPass(users, "password", pass)
        console.log('12')
    }
    else{
        alert("authentication error")
        break;
    }
}
// return pass;
}
function checkPass(obj, key, value){
    for(let i = 0; i<users.length; i++){
        const use = users[i]
        if (use[key] === value){
            alert(`hello ${users[name]}`)
            break;
        }
    }
}