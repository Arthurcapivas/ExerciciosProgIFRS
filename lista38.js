var entradaNode = require('readline-sync');

var numeroraiz = parseFloat(entradaNode.question("Digite um numero para calcular a raiz quadrada! "))

var raizquadrada = Math.sqrt(numeroraiz)

console.log(`A raiz quadrada do numero digitado (${numeroraiz}) é ${raizquadrada}`)