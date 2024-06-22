var entradaNode = require('readline-sync');

var num1 = parseFloat(entradaNode.question("Qual o valor do primeiro número?"))
var num2 = parseFloat(entradaNode.question("Qual o valor do segundo número?"))
var num3 = parseFloat(entradaNode.question("Qual o valor do terceiro número?"))

var media = (num1 + num2 + num3) / 3

console.log(`${media.toFixed(2)}`)