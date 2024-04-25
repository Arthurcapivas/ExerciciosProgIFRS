var entradaNode = require('readline-sync');

var nr1 = 0
var sucnr1 = 0
var antnr1 = 0

nr1 = parseFloat(entradaNode.question("Qual o numero? "))

sucnr1 = nr1 + 1
antnr1 = nr1 - 1

console.log(`o sucessor do número é ${sucnr1} e o antecessor do número é ${antnr1}`)