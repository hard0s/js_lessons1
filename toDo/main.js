"use strict";

let btnPlace = document.querySelector('#placeBtn');
let placeholder = document.querySelector('#placeholder');
let taskPlace = document.querySelector('.tasks')


function btnClick() {
    if (placeholder.value.length == 0) {
        alert("Пожалуйста напишите свое дело")
    } else {

        taskPlace.innerHTML += ` 
            <div class="task">
                <span id="taskname">
                    ${placeholder.value}
                </span>
                <button type="button" id="btnDel" class="btn btn-del">Удалить</button>
                <button type="button" id="btnDon" class="btn btn-done" >Сделанно</button>
                
            </div>
        `;
        let taskDone = addEventListener("click",)
        let taskDel = document.querySelectorAll('#btnDel');

        for (let i = 0; i < taskDel.length; i++) {
            taskDel[i].onclick = function() {
                this.parentNode.remove();
            }
        }

    }
}
//не знаю как сделать кнопку которая будет менять цвет
function main() {
    btnPlace.onclick = btnClick;
}
main();