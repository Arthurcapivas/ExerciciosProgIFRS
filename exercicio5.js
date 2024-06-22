var entradaNode = require ('readline-sync');

var um = 0
var dois = 0
var total = 0

um = parseFloat(entradaNode.question("Qual o primeiro numero? "));
dois = parseFloat(entradaNode.question("Qual o segundo numero? "));

total = um * dois

console.log(`o produto dos dois números é ${total}`)