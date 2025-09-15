let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; 


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor');
        } else {
            asignarTextoElemento('p', 'El número es mayor');
        }
        intentos++;
        lipiarCaja(); 
    }
    return;
}

function lipiarCaja() {
    document.querySelector('#valorUsuario'). value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1; 
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si el numero generado ya esta uncluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }    
}

function condiconesIniciales() {
    asignarTextoElemento('h1', 'Juego de número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    lipiarCaja();
    //indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicializar el número de intentos
    condiconesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reinicar').setAttribute('desabled', true);
}

condiconesIniciales();