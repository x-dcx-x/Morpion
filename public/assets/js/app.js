//j' ai bouclé les cases et avec un "event click"+ désactivation du clic droit
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

let O0 = document.getElementById("o0")
let O1 = document.getElementById("o1")
let O2 = document.getElementById("o2")
let O3 = document.getElementById("o3")
let O4 = document.getElementById("o4")
let O5 = document.getElementById("o5")
let O6 = document.getElementById("o6")
let O7 = document.getElementById("o7")
let O8 = document.getElementById("o8")


let X0 = document.getElementById("x0")
let X1 = document.getElementById("x1")
let X2 = document.getElementById("x2")
let X3 = document.getElementById("x3")
let X4 = document.getElementById("x4")
let X5 = document.getElementById("x5")
let X6 = document.getElementById("x6")
let X7 = document.getElementById("x7")
let X8 = document.getElementById("x8")


let player_1;
let player_2;
let click_gauche= "O";
let click_droit = "X";


//click gauche P1:O / click droit P2:X

let box = document.getElementsByClassName("case");
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("mouseup", function (event) {
        switch (event.button) {
            case 0:
                if(click_gauche === "O") {
                   box[i].innerHTML=click_gauche
                    // O0.innerHTML=click_gauche
                    // O1.innerHTML=click_gauche
                    // O2.innerHTML=click_gauche
                    // O3.innerHTML=click_gauche
                    // O4.innerHTML=click_gauche
                    // O5.innerHTML=click_gauche
                    // O6.innerHTML=click_gauche
                    // O7.innerHTML=click_gauche
                    // O8.innerHTML=click_gauche
                    console.log(click_gauche)
                }
                break;
            case 2:
                if(click_droit === "X") {
                    box[i].innerHTML=click_droit
                    // X0.innerHTML=click_droit
                    // X1.innerHTML=click_droit
                    // X2.innerHTML=click_droit
                    // X3.innerHTML=click_droit
                    // X4.innerHTML=click_droit
                    // X5.innerHTML=click_droit
                    // X6.innerHTML=click_droit
                    // X7.innerHTML=click_droit
                    // X8.innerHTML=click_droit
                    console.log(click_droit)
                }
                break;
        }
    });
}

function choixplayer (){
    if (player_1===click_gauche){

    }
    if ( player_2===click_droit){

    }
}


