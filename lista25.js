var entradaNode = require('readline-sync');

var num1 = parseFloat(entradaNode.question("Qual o valor do primeiro número?"))
var num2 = parseFloat(entradaNode.question("Qual o valor do segundo número?"))
var num3 = parseFloat(entradaNode.question("Qual o valor do terceiro número?"))

var soma1e3 = num1 + num3
var div3por2 = num3 / num2
var produt1e2 = num1 * num2
var subt2e3 = num2 - num3

console.log(`A soma do 1º e 3º número é: ${soma1e3}, \nA divisão do 3º valor pelo 2º valor é: ${div3por2}`)
console.log(`O produto entre o 1º eo  2º número é: ${produt1e2} \nA subtração entre o 2º e 3º valor é: ${subt2e3}`)