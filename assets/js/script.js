

let contadorA = 0;
let contadorB = 0;
let set1A = 0;
let set1B = 0;
let set2A = 0;
let set2B = 0;

let gA = 0;
let gB = 0;


let percorrerIds = 1

function somaA() {
    contadorA++;

    document.getElementById('time1').innerHTML = contadorA;
    document.getElementById('time2').innerHTML = contadorB;
    if (contadorA == 25) {
        set1A = contadorA;
        set1B = contadorB;
        document.getElementById('set' + percorrerIds + 'A').innerHTML = contadorA;
        document.getElementById('set' + percorrerIds + 'B').innerHTML = contadorB;
        document.getElementById('time1').innerHTML = 0;
        document.getElementById('time2').innerHTML = 0;
        contadorA = 0;
        contadorB = 0;
        percorrerIds++;
        gA++
        document.getElementById('gA').innerHTML = gA;
    }
    if (gA == 3){
        alert('Equipe A venceu');
    } 
    if (gB == 3){
        alert('Equipe B venceu');
    }
}

function subA() {
    contadorA--;
    document.getElementById('time1').innerHTML = contadorA;
    document.getElementById('time2').innerHTML = contadorB;
}

function somaB() {
    contadorB++;
    document.getElementById('time1').innerHTML = contadorA;
    document.getElementById('time2').innerHTML = contadorB;
    if (contadorB == 25) {
        set1A = contadorA;
        set1B = contadorB;
        document.getElementById('set' + percorrerIds + 'A').innerHTML = contadorA;
        document.getElementById('set' + percorrerIds + 'B').innerHTML = contadorB;
        document.getElementById('time1').innerHTML = 0;
        document.getElementById('time2').innerHTML = 0;
        contadorA = 0;
        contadorB = 0;
        percorrerIds++;
        gB++
        document.getElementById('gB').innerHTML = gB;
    }

    if (gA == 3){
        alert('Equipe A venceu');
    } 
    if (gB == 3){
        alert('Equipe B venceu');
    }

}

function subB() {
    contadorB--;
    document.getElementById('time1').innerHTML = contadorA;
    document.getElementById('time2').innerHTML = contadorB;
}


