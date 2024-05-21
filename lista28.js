var entradaNode = require('readline-sync');

var num1 = parseFloat(entradaNode.question("qual o valor do primeiro numero?"))
var num2 = parseFloat(entradaNode.question("qual o valor do primeiro numero?"))
var soma = num1 + num2

console.log(`SOMA ${soma}`)