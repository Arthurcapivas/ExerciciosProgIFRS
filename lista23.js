var entradaNode = require('readline-sync');

var prova1 = parseFloat(entradaNode.question("Quanto voce tirou na sua primeira prova? "))
var prova2 = parseFloat(entradaNode.question("Quanto voce tirou na sua segunda prova? "))
var trabalho1 = parseFloat(entradaNode.question("Quanto voce tirou no seu primeiro trabalho? "))
var trabalho2 = parseFloat(entradaNode.question("Quanto voce tirou no seu segundo trabalho? "))

var notafinal = (prova1 + prova2) * 0.60 + (trabalho1 + trabalho2) * 0.40

console.log(`sua nota final é ${notafinal}`)