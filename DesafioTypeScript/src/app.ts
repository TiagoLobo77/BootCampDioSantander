// let buttonTeste = document.getElementById("button");

// function somarImplicito(parametro1: string, parametro2: string) {
//   return parametro1 + parametro2;
// }

// buttonTeste?.addEventListener("click", () => {
//   console.log("funcionou");
// });

//Desafio 1
// let employee = {
//   code: 10,
//   name: "John",
// };
// employee.code = 10;
// employee.name = "John";

//Desafio 2

// enum Trabalho {
//   Atriz,
//   Padeiro,
// }

// type Pessoas = {
//   nome: string;
//   idade: number;
//   profissao: Trabalho;
// };

// let pessoa1: Pessoas = {
//   nome: "maria",
//   idade: 29,
//   profissao: Trabalho.Atriz,
// };

// let pessoa2: Pessoas = {
//   nome: "roberto",
//   idade: 19,
//   profissao: Trabalho.Padeiro,
// };

// let pessoa3: Pessoas = {
//   nome: "laura",
//   idade: 32,
//   profissao: Trabalho.Atriz,
// };

// let pessoa4: Pessoas = {
//   nome: "carlos",
//   idade: 19,
//   profissao: Trabalho.Padeiro,
// };

export {};

let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo")!;
let soma = document.getElementById("soma")! as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo");

let saldoTotal = 0;

limparSaldo();

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
    saldoTotal += soma;
    campoSaldo.innerHTML = saldoTotal.toString();
    limparCampoSoma();
  }
}

function limparCampoSoma() {
  soma.value = "";
}

function limparSaldo() {
  if (campoSaldo) {
    saldoTotal = 0;
    campoSaldo.innerHTML = saldoTotal.toString();
  }
}

if (botaoAtualizar) {
  botaoAtualizar.addEventListener("click", () => {
    somarAoSaldo(Number(soma.value));
  });
}
botaoLimpar.addEventListener("click", () => {
  limparSaldo();
});
