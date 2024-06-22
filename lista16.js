var entradaNode = require('readline-sync');

var tamanhoarquivo = parseFloat(entradaNode.question("Qual o tamanho do arquivo? (Em MB) "))
var velocidadeinternet = parseFloat(entradaNode.question("Qual a velocidade da sua internet? (Em mbps/megas) "))

velocidadeinternet = velocidadeinternet / 8
var tempodownload = tamanhoarquivo  / velocidadeinternet

var tempodownloadminutos = tempodownload / 60

console.log(`O tempo de Download em segundos é: ${tempodownload} \nO tempo de Download em minutos é: ${tempodownloadminutos.toFixed(2)}`)



