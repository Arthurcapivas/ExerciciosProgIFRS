var entradaNode = require('readline-sync')

var num1 = 0
var num2 = 0
var soma = 0

num1 = parseFloat(entradaNode.question("Digite o primeiro numero"))
num2 = parseFloat(entradaNode.question("Digite o segundo numero"))

soma = num1 + num2

console.log(`a soma dos dois números é: ${soma}`)