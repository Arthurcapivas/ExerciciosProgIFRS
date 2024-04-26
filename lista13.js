var entradaNode = require('readline-sync');

var horastrabalhadas = 0
var valorhora = 0
var salariobruto = 0
var ir = 0
var inss = 0
var sindicato = 0
var salarioliquido

horastrabalhadas = parseFloat(entradaNode.question("Quantas horas voce trabalha? "))
valorhora = parseFloat(entradaNode.question("Quanto voce ganha por hora? "))

salariobruto = horastrabalhadas * valorhora

inss = salariobruto * 0.08
sindicato = salariobruto * 0.05
ir = salariobruto * 0.11
salarioliquido = salariobruto - ir - sindicato - inss

console.log(`seu salario bruto é R$${salariobruto} \nde IR foi descontado R$${ir}, \nde INSS foi descontado R$${inss} \ndo Sindicato foi descontado R$${sindicato}. \nNo final seu salario liquido ficou R$${salarioliquido}`)

