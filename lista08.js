var entradaNode = require('readline-sync');

var horas = 0
var valorhora = 0
var salario = 0

horas = parseFloat(entradaNode.question("Quantas horas por dia voce trabalha? "))
valorhora = parseFloat(entradaNode.question("Qual o valor da sua hora? "))

salario = horas * valorhora

console.log(`o seu salário é: ${salario}`)