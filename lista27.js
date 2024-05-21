var entradaNode = require('readline-sync');

var nr1 = parseFloat(entradaNode.question("Qual o numero? "))
var sucnr1 = nr1 + 1
var antnr1 = nr1 - 1

console.log(`o sucessor do número é ${sucnr1} e o antecessor do número é ${antnr1}`)