var entradaNode = require('readline-sync');

var dia = entradaNode.question("Entre com o dia: ")
var mes = entradaNode.question("Entre com o mes: ")
var ano = entradaNode.question("Entre com o ano: ")

const dataformatada = `${dia.padStart(2, '0')}/${mes.padStart(2, '0')}/${ano}`

console.log(`a data formata é: ${dataformatada}`) 