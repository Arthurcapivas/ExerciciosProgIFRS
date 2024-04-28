var entradaNode = require('readline-sync');

var numero1 = parseFloat(entradaNode.question("Digite um número: "))
var numero2 = parseFloat(entradaNode.question("Digite um número: "))
var numero3 = parseFloat(entradaNode.question("Digite um número: "))

var soma2p = numero1 + numero2
var sub2ult = numero3 - numero2
var multi3 = numero1 * numero2 * numero3

console.log(`A soma dos 2 primeiros números é: ${soma2p}  \nA subtração dos 2 ultimos números é: ${sub2ult}  \nA multiplicação dos 3 números é: ${multi3}`)