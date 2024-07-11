// desafio
/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

*/

// Pegar dois números 
const num1 = parseFloat(prompt("Insira o primeiro número: "));
const num2 = parseFloat(prompt("Insira o segundo número: "));
// parseFloat = é uma função atribuida com o intúito de analisar uma string e extrair um valor numérico dela, ignorando qualquer caractere que não seja um dígito ou um ponto decimal.

// Calcular os resultados
const sum = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num2 !== 0 ? num1 / num2 : "Não é possível dividir por zero!";
const remainder = num2 !== 0 ? num1 % num2 : "Não é possível dividir por zero!";


// Mostrar os resultados
alert(`|Resultados| Soma: ${sum}`);
alert(`Subtração: ${subtraction}` )
alert(`Multiplicação: ${multiplication}`)
alert(`Divisão: ${(division.toFixed(3))}`)
alert(`Restto da divisão: ${remainder}`)

  /*
  - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
  - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
  */

if(sum % 2 == 0 ){ 
  alert(`A soma de ${num1} + ${num2} é um número par `)
} else if (sum % 2 == 1){
  alert(`A soma de ${num1} + ${num2} é um número ímpar `)
}

if(num1 === num2){
  alert("Os números inseridos são iguais!");
  } else {
    alert("Os números inseridos são diferentes!");
}


