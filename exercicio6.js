var entradaNode = require ('readline-sync');

var nr1 = 0
var nr2 = 0
var nr3 = 0
var media = 0

nr1 = parseFloat(entradaNode.question("Qual o primeiro numero? "))
nr2 = parseFloat(entradaNode.question("Qual o segundo numero? "))
nr3 = parseFloat(entradaNode.question("Qual o terceiro numero? "))

media = nr1 + nr2 + nr3 / 3

console.log(`a media dos números é ${media}`)