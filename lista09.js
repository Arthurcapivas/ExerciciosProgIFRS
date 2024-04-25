var entradaNode = require('readline-sync');

var celsius = 0;
var fahrenheit = 0;

fahrenheit = parseFloat(entradaNode.question("Quantos graus fahrenheit esta? "))

celsius = (5 * (fahrenheit-32) / 9)

console.log(`A temperatura em celsius é ${celsius}`)