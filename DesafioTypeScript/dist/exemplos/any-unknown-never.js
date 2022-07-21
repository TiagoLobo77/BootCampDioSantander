"use strict";
var anyEstaDevolta;
anyEstaDevolta = 3;
anyEstaDevolta = "teste";
anyEstaDevolta = 5;
var stringTest = "verificar";
stringTest = anyEstaDevolta;
var unknowValor;
unknowValor = 3;
unknowValor = "opa";
unknowValor = true;
unknowValor = "vai sim";
var stringTest2 = "agora vai";
if (typeof unknowValor === "string") {
    stringTest2 = unknowValor;
}
function jogarErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogarErro("deu erro", 500);
