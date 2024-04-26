var entradaNode = require('readline-sync');

var areapintura = 0
var precototal = 0
var litrosnecessarios = 0
var latasnecessarias = 0
const coberturalitro = 3 //1 litro cobre 3m²
const lata = 18 //quantidade de litros da lata
const valorlata = 80 //lata de tinta = R$80


areapintura = parseFloat(entradaNode.question("Qual a area a ser pintada? Em metros quadrados: "))


litrosnecessarios = areapintura / coberturalitro
latasnecessarias = Math.ceil(litrosnecessarios / lata) //Math.ceil é utilizada para arredondar um número para cima para o próximo inteiro.

precototal = latasnecessarias * valorlata

console.log(`Quantidade de latas de tinta a serem compradas ${latasnecessarias} \nPreço total R$${precototal}`)

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil