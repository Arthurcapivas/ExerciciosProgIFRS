var entradaNode = require('readline-sync');


var altura = 0;
var ideal = 0

altura = parseFloat(entradaNode.question("Qual sua altura? "));

ideal = 72.7 * altura - 58;

console.log(`Seu peso idela é ${ideal.toFixed(2)}KG`)