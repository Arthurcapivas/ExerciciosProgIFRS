var entradaNode = require ('readline-sync');

var salario = 0
var ir = 0.0
var salliq = 0

salario = parseFloat(entradaNode.question("Qual seu salario? "))
ir = parseFloat(entradaNode.question("Quanto é seu IR? "))

ir = salario / 100 * ir
salliq = salario - ir

console.log(salliq >= 100)
console.log(salliq < 190) 
console.log(salliq = salario - ir)
console.log(salliq = salario > 250)
//console.log(salliq = salario <> 300) ERROR
console.log(salliq = salario >=500)
console.log(salliq <= 10**2 + 300)
console.log(salliq >=675)