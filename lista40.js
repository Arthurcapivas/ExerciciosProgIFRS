var entradaNode = require('readline-sync');

var base = parseFloat(entradaNode.question("Qual a base do retangulo? "))
var altura = parseFloat(entradaNode.question("Qual a altura do retangulo? "))

var area = base * altura

console.log(`A Area calculado foi ${area}`)