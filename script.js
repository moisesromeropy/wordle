let intentos = 6;
let palabra = "APPLE";
const boton = document.getElementById("guess-button");

window.addEventListener('load', init);

function init(){
    boton.addEventListener('click', intentar);
}

function intentar(){
    const GRID = document.getElementById("grid");
    const ROW =  document.createElement('div');
    ROW.className = "row";
    let intento = leerIntento();
    if (intento === palabra ) {
        imprimir("<h1>GANASTE!</h1>");
        return;
    }
    for (const index in palabra ) {
        const SPAN = document.createElement('div');
        SPAN.className = "letter"
        if(intento[index] === palabra[index]){
            SPAN.innerHTML = intento[index];
            SPAN.style.background = "green";
        }else if( palabra.includes(intento[index])){
            SPAN.innerHTML = intento[index];
            SPAN.style.background = "yellow";
        }else{
            SPAN.innerHTML = intento[index];
            SPAN.style.background = "gray";
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    intentos--;
    if(intentos == 0){
        imprimir("<h1>PERDISTE!😖</h1>");
    }
}

function leerIntento(){
    let valor = document.getElementById("guess-input");
    valor = valor.value;
    valor = valor.toUpperCase();
    return valor;
}

function comparar(intento){
    let intent = intento;
    for (const index in intent) {
        
    }
}

function imprimir(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled= true;
    boton.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}