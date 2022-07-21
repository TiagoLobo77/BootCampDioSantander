//solução 1
function verificarPalindromo(string) {
  if (!string) return "string inexixtente";

  return string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo("ama"));

//solução 2
// omo
// 012
// abbbba
// 012345

function verificarPalindromo2(string) {
  if (!string) return "string inexixtente";

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(verificarPalindromo2("omo"));
