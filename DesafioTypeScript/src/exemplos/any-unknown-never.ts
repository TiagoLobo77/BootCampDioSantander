let anyEstaDevolta: any;
anyEstaDevolta = 3;
anyEstaDevolta = "teste";
anyEstaDevolta = 5;

let stringTest: string = "verificar";
stringTest = anyEstaDevolta;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = "opa";
unknowValor = true;
unknowValor = "vai sim";

let stringTest2: string = "agora vai";

if (typeof unknowValor === "string") {
  stringTest2 = unknowValor;
}

function jogarErro(erro: string, codigo: number): never {
  throw { error: erro, code: codigo };
}

jogarErro("deu erro", 500);
