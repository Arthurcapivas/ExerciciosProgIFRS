var entradaNode = require('readline-sync');

var b1 = 0;
var b2 = 0;
var b3 = 0;
var b4 = 0;
var media = 0

b1 = parseFloat(entradaNode.question("Digite a nota do seu primeiro bimestre"))
b2 = parseFloat(entradaNode.question("Digite a nota do seu segundo bimestre"))
b3 = parseFloat(entradaNode.question("Digite a nota do seu terceiro bimestre"))
b4 = parseFloat(entradaNode.question("Digite a nota do seu quarto bimestre"))

media = b1 + b2 + b3 + b4 / 4

console.log(`sua média dos 4 bimestres foi: ${media}`)