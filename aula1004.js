var entradaNode = require('readline-sync')var entradaNode = require('readline-sync')

//definição de variaveis
var nome = "";

//entrada de dados
nome = entradaNode.question("Digite o seu nome: ");

//saida de dados
console.log(`Ola mundo! \nBom dia ${nome} !`);