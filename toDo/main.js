"use strict";

let btnPlace = document.querySelector('#placeBtn');
let placeholder = document.querySelector('#placeholder');
let taskPlace = document.querySelector('.tasks')


function btnClick() {
    if (placeholder.value.length == 0) {
        alert("Пожалуйста напишите свое дело")
    }
    else {
        
        taskPlace.innerHTML += ` 
            <div class="task">
                <span id="taskname">
                    ${placeholder.value}
                </span>
                <button type="button" id="btnDel" class="btn btn-del">Удалить</button>
                <button type="button" id="btnDone" class="btn btn-done">Сделано</button>

            </div>
        `;

        let taskDel = document.querySelectorAll('#btnDel'); 
        for (let i = 0; i < taskDel.length; i++) {
            taskDel[i].onclick = function() {
                this.parentNode.remove();
            }
        }
        let colorChange = document.querySelectorAll('#btnDone');
        for (let i = 0; i < colorChange.length; i++) {
            colorChange[i].onclick = function() {
                let taskColor = document.querySelectorAll('#task')
                taskColor.style.backgroundColor = '#00ff00'
        }
    }
}
}
function main() {
    btnPlace.onclick = btnClick;
}
main();