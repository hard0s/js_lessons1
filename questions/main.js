function hello(){
    alert("Привет мир!")
}
let btn = document.querySelector(".btn")
btn.addEventListener("click", hello )
// let input = document.querySelector(".input")
// function doFill(){
//     input.value = "test@email.com"
// }
// let btn1 =document.querySelector(".btn1")
// btn1.addEventListener("click", doFill)
// let inp2 = document.querySelector(".inp2")
// let btn2 = document.querySelector(".btn2")
// function check(){
//     if (inp2.value === '' || inp2.value === ' '){
//         alert("Вы ничего не ввели")
//     }
//     else if (inp2.value !== '' || inp2.value !== ' '){
//         alert(`Вы ввели ${inp2.value}`)
//     }
// }
// btn2.addEventListener("click",  check)
// let input = document.querySelectorAll(".input")
// let inp2 = document.querySelector(".inp2")
// let btn2 = document.querySelector(".btn2")
// function change(){
//     let mid = input.value
//     input.value = inp2.value
//     inp2.value = mid

// }
// btn2.addEventListener("click", change )

