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
let C1=document.getElementById("c1")
let C2=document.getElementById("c2")
let C3=document.getElementById("c3")
let C4=document.getElementById("c4")
let C5=document.getElementById("c5")
let C6=document.getElementById("c6")
let C7=document.getElementById("c7")
let C8=document.getElementById("c8")
let C9=document.getElementById("c9")


let player_1;
let player_2;
let click_gauche= "O";
let click_droit = "X";


//click gauche P1:O / click droit P2:X
    C1.addEventListener("mouseup", function (event) {
        strictegal()
        switch (event.button) {
            case 0:
                if(click_gauche === "O") {

                     O0.innerHTML=click_gauche;
                }
                break;

            case 2:
                if(click_droit === "X") {
                    X0.innerHTML=click_droit;
                }
                break;
        }
    });

C2.addEventListener("mouseup", function (event) {
    strictegal()
    switch (event.button) {
        case 0:
            if(click_gauche === "O") {

                O1.innerHTML=click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if(click_droit === "X") {
                X1.innerHTML=click_droit;
                console.log(click_droit)
            }
            break;
    }
});

C3.addEventListener("mouseup", function (event) {
    strictegal()
    switch (event.button) {
        case 0:
            if(click_gauche === "O") {

                O2.innerHTML=click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if(click_droit === "X") {
                X2.innerHTML=click_droit;
                console.log(click_droit)
            }
            break;
    }
});

C4.addEventListener("mouseup", function (event) {
    strictegal()
    switch (event.button) {
        case 0:
            if(click_gauche === "O") {

                O3.innerHTML=click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if(click_droit === "X") {
                X3.innerHTML=click_droit;
                console.log(click_droit)
            }
            break;
    }
});

C5.addEventListener("mouseup", function (event) {
    strictegal()
    switch (event.button) {
        case 0:
            if(click_gauche === "O") {

                O4.innerHTML=click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if(click_droit === "X") {
                X4.innerHTML=click_droit;
                console.log(click_droit)
            }
            break;
    }
});

C6.addEventListener("mouseup", function (event) {
    strictegal()
    switch (event.button) {
        case 0:
            if(click_gauche === "O") {

                O5.innerHTML=click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if(click_droit === "X") {
                X5.innerHTML=click_droit;
                console.log(click_droit)
            }
            break;
    }
});

C7.addEventListener("mouseup", function (event) {
    strictegal()
    switch (event.button) {
        case 0:
            if(click_gauche === "O") {

                O6.innerHTML=click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if(click_droit === "X") {
                X6.innerHTML=click_droit;
                console.log(click_droit)
            }
            break;
    }
});

C8.addEventListener("mouseup", function (event) {
    strictegal()
    switch (event.button) {
        case 0:
            if(click_gauche === "O") {

                O7.innerHTML=click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if(click_droit === "X") {
                X7.innerHTML=click_droit;
                console.log(click_droit)
            }
            break;
    }
});

C9.addEventListener("mouseup", function (event) {
    strictegal()
    switch (event.button) {
        case 0:
            if(click_gauche === "O") {

                O8.innerHTML=click_gauche;

                console.log(click_gauche)
            }
            break;

        case 2:
            if(click_droit === "X") {
                X8.innerHTML=click_droit;
                console.log(click_droit)
            }
            break;
    }
});

function players (){
    if (player_1===click_gauche){

    }

    if (player_2===click_droit) {


    }
}

function strictegal(){
   if  (C1==="o0"){
       (C2==="o1");
       (O2===C3);
       (O3===C4);
       (O4===C5);
       (O5===C6);
       (O6===C7);
       (O7===C8);
       (O8===C9);
       console.log("bam");
   }



}
