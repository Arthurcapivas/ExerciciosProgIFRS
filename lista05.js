var entradaNode = require('readline-sync');

var metros = 0;
var centrimetros = 0;
var soma = 0;

metros = parseFloat(entradaNode.question("Quantos metros? "))

soma = metros * 100

console.log(`a quantidade em centrimetos é: ${soma}`)