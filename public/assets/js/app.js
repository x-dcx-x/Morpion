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

//cases de 1 à 9
let C1 = document.getElementById("c1")
let C2 = document.getElementById("c2")
let C3 = document.getElementById("c3")
let C4 = document.getElementById("c4")
let C5 = document.getElementById("c5")
let C6 = document.getElementById("c6")
let C7 = document.getElementById("c7")
let C8 = document.getElementById("c8")
let C9 = document.getElementById("c9")


// let player_1;
// let player_2;
let click_gauche = "O";
let click_droit = "X";
let gagnant = document.getElementById("gagnez")


//click gauche P1:O / click droit P2:X
C1.addEventListener("mouseup", function (event) {

    switch (event.button) {
        case 0:
            if (click_gauche === "O") {

                O0.innerHTML = click_gauche;
                console.log(click_gauche)
            }

            break;

        case 2:
            if (click_droit === "X") {
                X0.innerHTML = click_droit;
            }
            break;
    }
    Condition_Vic_1Horizontal();
    Condition_Vic_1Vertical();
    ligne_Oblique_1_5_9();
});

C2.addEventListener("mouseup", function (event) {

    switch (event.button) {
        case 0:
            if (click_gauche === "O") {

                O1.innerHTML = click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if (click_droit === "X") {
                X1.innerHTML = click_droit;
                console.log(click_droit)
            }
            break;
    }
    Condition_Vic_1Horizontal();
    Condition_Vic_2Vertical();
});

C3.addEventListener("mouseup", function (event) {

    switch (event.button) {
        case 0:
            if (click_gauche === "O") {

                O2.innerHTML = click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if (click_droit === "X") {
                X2.innerHTML = click_droit;
                console.log(click_droit)
            }
            break;
    }
    Condition_Vic_1Horizontal();
    Condition_Vic_3vertical();
    ligne_Oblique_7_5_3();
});

C4.addEventListener("mouseup", function (event) {
    switch (event.button) {
        case 0:
            if (click_gauche === "O") {

                O3.innerHTML = click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if (click_droit === "X") {
                X3.innerHTML = click_droit;
                console.log(click_droit)
            }
            break;
    }
    Condition_Vic_2Horizontal();
    Condition_Vic_1Vertical();
});

C5.addEventListener("mouseup", function (event) {

    switch (event.button) {
        case 0:
            if (click_gauche === "O") {

                O4.innerHTML = click_gauche;
                console.log(click_gauche)
            }
            break;

        case 2:
            if (click_droit === "X") {
                X4.innerHTML = click_droit;
                console.log(click_droit)
            }
            break;
    }
    Condition_Vic_2Horizontal();
    Condition_Vic_2Vertical();
    ligne_Oblique_1_5_9();
    ligne_Oblique_7_5_3();
});

C6.addEventListener("mouseup", function (event) {

    switch (event.button) {
        case 0:
            if (click_gauche === "O") {

                O5.innerHTML = click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if (click_droit === "X") {
                X5.innerHTML = click_droit;
                console.log(click_droit)
            }
            break;
    }
    Condition_Vic_2Horizontal();
    Condition_Vic_3vertical();
});

C7.addEventListener("mouseup", function (event) {

    switch (event.button) {
        case 0:
            if (click_gauche === "O") {

                O6.innerHTML = click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if (click_droit === "X") {
                X6.innerHTML = click_droit;
                console.log(click_droit)
            }
            break;
    }
    Condition_Vic_3Horizontal();
    Condition_Vic_1Vertical();
    ligne_Oblique_7_5_3();
});

C8.addEventListener("mouseup", function (event) {

    switch (event.button) {
        case 0:
            if (click_gauche === "O") {

                O7.innerHTML = click_gauche;

                console.log(click_gauche)
            }

            break;

        case 2:
            if (click_droit === "X") {
                X7.innerHTML = click_droit;
                console.log(click_droit)
            }
            break;
    }
    Condition_Vic_3Horizontal();
    Condition_Vic_2Vertical();
});


C9.addEventListener("mouseup", function (event) {

    switch (event.button) {
        case 0:
            if (click_gauche === "O") {

                O8.innerHTML = click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if (click_droit === "X") {
                X8.innerHTML = click_droit;
                console.log(click_droit)
            }
            break;
    }
    Condition_Vic_3Horizontal();
    Condition_Vic_3vertical();
    ligne_Oblique_1_5_9();
});


////////  Ligne Horizontal (condition de victoire) /////

// Condition de Victoire // 1ere Ligne horizontal

function Condition_Vic_1Horizontal() {

    if (O0.innerHTML === click_gauche && O1.innerHTML === click_gauche && O2.innerHTML === click_gauche) {
        gagnant.innerHTML = "Fin de partie ! Le O gagne GG";
    } else if (O0.innerHTML === click_droit && O1.innerHTML === click_droit && O2.innerHTML === click_droit) {
        gagnant.innerHTML = "Fin de partie ! Le X gagne GG";
    }
}

function Condition_Vic_2Horizontal() {

    if (O3.innerHTML === click_gauche && O4.innerHTML === click_gauche && O5.innerHTML === click_gauche) {
        gagnant.innerHTML = "Fin de partie ! Le O gagne GG";
    } else if (O3.innerHTML === click_droit && O4.innerHTML === click_droit && O5.innerHTML === click_droit) {
        gagnant.innerHTML = "Fin de partie ! Le X gagne GG";
    }

}

function Condition_Vic_3Horizontal() {

    if (O6.innerHTML === click_gauche && O7.innerHTML === click_gauche && O8.innerHTML === click_gauche) {
        gagnant.innerHTML = "Fin de partie ! Le O gagne GG";
    } else if (O6.innerHTML === click_droit && O7.innerHTML === click_droit && O8.innerHTML === click_droit) {
        gagnant.innerHTML = "Fin de partie ! Le X gagne GG";
    }

}


// ///// Fin de ligne Horizontal (condition de victoire ) ///////
//
//
// ////////  Ligne vertical  (condition de victoire) /////

function Condition_Vic_1Vertical() {
    if (O0.innerHTML === click_gauche && O3.innerHTML === click_gauche && O6.innerHTML === click_gauche) {
        gagnant.innerHTML = "Fin de partie ! Le O gagne GG";
    } else if (O0.innerHTML === click_droit && O3.innerHTML === click_droit && O6.innerHTML === click_droit) {
        gagnant.innerHTML = "Fin de partie ! Le X gagne GG";
    }

}

function Condition_Vic_2Vertical() {
    if (O1.innerHTML === click_gauche && O4.innerHTML === click_gauche && O7.innerHTML === click_gauche) {
        gagnant.innerHTML = "Fin de partie ! Le O gagne GG";
    } else if (O1.innerHTML === click_droit && O4.innerHTML === click_droit && O7.innerHTML === click_droit) {
        gagnant.innerHTML = "Fin de partie ! Le X gagne GG";
    }
}


function Condition_Vic_3vertical() {
    if (O2.innerHTML === click_gauche && O5.innerHTML === click_gauche && O8.innerHTML === click_gauche) {
        gagnant.innerHTML = "Fin de partie ! Le O gagne GG";
    } else if (O2.innerHTML === click_droit && O5.innerHTML === click_droit && O8.innerHTML === click_droit) {
        gagnant.innerHTML = "Fin de partie ! Le X gagne GG";
    }
}

////////  Fin de  Ligne vertical  (condition de victoire) /////







////////  Début de  Ligne oblique 1_5_9 (condition de victoire) /////
function ligne_Oblique_1_5_9(){
    if (O0.innerHTML === click_gauche && O4.innerHTML === click_gauche && O8.innerHTML === click_gauche) {
        gagnant.innerHTML = "Fin de partie ! Le O gagne GG";
    } else if (O0.innerHTML === click_droit && O4.innerHTML === click_droit && O8.innerHTML === click_droit) {
        gagnant.innerHTML = "Fin de partie ! Le X gagne GG";
    }

}

////////  Fin de  Ligne oblique  (condition de victoire) /////

function ligne_Oblique_7_5_3(){
    if (O2.innerHTML === click_gauche && O4.innerHTML === click_gauche && O6.innerHTML === click_gauche) {
        gagnant.innerHTML = "Fin de partie ! Le O gagne GG";
    } else if (O2.innerHTML === click_droit && O4.innerHTML === click_droit && O6.innerHTML === click_droit) {
        gagnant.innerHTML = "Fin de partie ! Le X gagne GG";
    }

}