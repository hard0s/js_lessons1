"use strict";


    const mines = [true, true, true, true, true, true, true, true, true, true]
    let save = "";
    let count = 0;
    for (let i = 0; i < mines.length; i++) {
        if (mines[i] == true) {
            save = "Blow"
            count += 1;
        }
        else if (count === 2) {
            console.log("Tonk destroyed")
            break;
        }
        else{
            save = "No mines"
        
        console.log(`Tonk on ${i+1} square. ${save}`);}
        
    }
