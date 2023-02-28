"use strict";

/*let x = 56
for (let i = 0; i < x; i++) {
    x++
    console.log(i)
    if (x>1000){
        break;
        
    }
}*/
/*
const x = []
for (let i = 1; i < 16; i++) {
    if (i%2 === 0){
        x.push(i)
        console.log("текущее число:четное,", i)    
    }
    else {
        console.log("текущее число не четное", i)
    }
        
}
console.log(x)*/
/*let array = ['туз','король','10','дама','туз','король']
let schet = false


  for (let i = 0;i < array.length; i++){
    console.log("Взяли карту",array[i])
    if (array[i] == 'король'){
      schet = true
      break
    } 
  }*/
  /*
  let array = ['10','король','10','дама','туз', '8', '7']
  const card1 = 'туз'
  const card2 = 'король'
  let hand = []
  for (let i = 0; i < array.length; i++){
    if (array[i] !== card1 && array[i] !== card2){
        continue
    }
    else{
        hand.push(array[i])
    }
}
console.log(hand)
*/
let V = Math.round(Math.random() * 1000)
console.log(V)

const gulp = 30
while (V > 0){
    console.log('осталось миллилитров:', V -= gulp)
    if (gulp > V){
    V = 0
    console.log('осталось миллилитров: 0')
    }
}
console.log('чай выпит')

