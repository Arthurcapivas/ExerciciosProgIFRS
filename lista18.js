var entradaNode = require('readline-sync');

var valor1 = parseFloat(entradaNode.question("Digite o primeiro valor decimal: "))
var valor2 = parseFloat(entradaNode.question("Digite o segundo valor decimal: "))
var soma = valor1 + valor2
var produto = valor1 * valor2

console.log(`a soma dos dois números decimais é: ${soma} \nE o produto dos dois números decimais é: ${produto}`)