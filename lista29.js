var entradaNode = require('readline-sync');

var num1 = parseFloat(entradaNode.question("qual o valor do primeiro numero?"))
var metade = num1 / 2
var tercaparte = (num1 /4) * 3

console.log(`A metade do número é: ${metade} e a terça parte do número é: ${tercaparte}`)