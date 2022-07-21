"use strict";
var button = document.getElementById("button");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
function adicionarNumero(numero1, numero2, devPrintar, frase) {
    var resultado = numero1 + numero2;
    if (devPrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
var devPrintar = true;
var frase;
frase = "O valor é: ";
if (button) {
    button.addEventListener("click", function () {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devPrintar, frase));
        }
    });
}
