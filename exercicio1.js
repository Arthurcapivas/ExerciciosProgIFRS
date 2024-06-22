var entradaNode = require('readline-sync');

//definição variaveis
var altura = 0;
var ideal = 0


//entrada de dados
altura = parseFloat(entradaNode.question("Qual sua altura? "));

//processamento dados
ideal = 72.7 * altura - 58;

//saida de dados
console.log(`Seu peso idela é ${ideal.toFixed(2)}KG`)

