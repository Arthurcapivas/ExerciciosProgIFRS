var entradaNode = require('readline-sync');

var valor1 = parseFloat(entradaNode.question("Digite o primeiro valor: "))
var valor2 = parseFloat(entradaNode.question("Digite o segundo valor: "))
var valor3 = parseFloat(entradaNode.question("Digite o terceiro valor: "))

var soma = valor1 + valor2 + valor3
var produto = valor1 * valor2 * valor3

console.log(`A soma dos valores é: ${soma} \nO produto dos valores é: ${produto} \nOs 3 valores digitados foram: \n${valor1} \n${valor2} \n${valor3}`)