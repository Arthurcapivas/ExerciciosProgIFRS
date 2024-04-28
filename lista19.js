var entradaNode = require('readline-sync');

var int1 = parseInt(entradaNode.question("Digite um número inteiro: "))
var int2 = parseInt(entradaNode.question("Digite um número inteiro: "))
var int3 = parseInt(entradaNode.question("Digite um número inteiro: "))
var int4 = parseInt(entradaNode.question("Digite um número inteiro: "))

var soma = int1 + int2 + int3 + int4
var subt1e2 = int1 - int2
var multi3p = int1 * int2 * int3
var media = soma / 4
var equacao = (int1 + int2) / (int3 - int4)

console.log(`A soma dos 4 números é: ${soma} \nA subtração do 1º e 2º valor é: ${subt1e2} \nA multiplicação dos 3 primeiros números é: ${multi3p} \nA media dos 4 números é: ${media} \nO valor da Equação é: ${equacao}`)