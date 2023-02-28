"use strict";
console.log("Задание 1")

let all = ["whitelivesmatter@mail.ru", "whitepower@gmail.com","n1ggersissuck@rambler.com", "blacklivesmetter@gmail.com","niggersdoesntsuck@mail.ru"]
let black = ["blacklivesmetter@gmail.com","niggersdoesntsuck@mail.ru"]

function filter(all){
  let whiteList= []
  for(let i=0; i<all.length; i++){
    if(!(black.indexOf(all[i]) !=-1)){
        whiteList.push(all[i])
    }
  }
  return whiteList
}
console.log(filter(all))

console.log("Задание 2")
function calculate(sum, count, promo = null){
let persent;
let difference;
let price;
    if (promo === "ДАРИМ300") {
        if(sum <= 300) sum = 0;
        else persent = sum - 300;
        
    }
    if (count >= 10) { 
        persent = (sum * 5) / 100;
        price = sum - persent

    }
    if (sum > 50000) {  
    difference = sum - 50000;
    persent = (difference * 20) / 100;
    price = sum - persent
    }
    if (sum >= 20000 && promo === "СКИДКА15") {
        persent = (sum * 15) / 100;
        price = sum - persent;
    }

return price;
}
console.log("Итоговая стоимость:", calculate(30000,10,"СКИДКА15"));