var entradaNode = require('readline-sync');

//Definição de variáveis
var nr1 = 0;
var nr2 = 0;
var soma = 0;

//Entrada de dados usando nodejs
nr1 = parseInt(entradaNode.question("Digite o primeiro número: "))
nr2 = parseInt(entradaNode.question("Digite o segundo número: "))

//Processamento
soma = nr1 + nr2

//Saída de dados
console.log(`SOMA \nO resultado da soma é ${soma}!`); 