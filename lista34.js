var entradaNode = require('readline-sync');

var valuetoconvertdol = parseFloat(entradaNode.question("Qual o valor em Dolar? "))
var dolarcotation = parseFloat(entradaNode.question("Qual o valor do Dolar? "))

var result = valuetoconvertdol / dolarcotation

console.log(`${result}`)