var entradaNode = require('readline-sync');

//definição variaveis
var celsius = 0;
var fahrenheit = 0;

//entrada de dados
celsius=parseFloat(entradaNode.question("Quantos graus celsius esta? "))

//processamento de dados
fahrenheit = (9 / 5) * celsius + 32

//saida de dados
console.log(`A temperatura em fahrenheit é ${fahrenheit}`)