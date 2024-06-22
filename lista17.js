var entradaNode = require('readline-sync');

var int1 = parseInt(entradaNode.question("Digite um número inteiro: "))
var int2 = parseInt(entradaNode.question("Digite um número inteiro: "))
var resultado = int1 * int2

console.log(`o produto dos 2 números inteiros é: ${resultado}`)