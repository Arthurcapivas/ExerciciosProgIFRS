var entradaNode = require('readline-sync');

//variaveis de altura, sexo e peso
var altura = 0
var sexo = ""
var peso = 0
var pesoideal = ""

//perguntas
sexo = entradaNode.question("Digite seu sexo (M para masculino e F para feminino): ") 
altura = parseFloat(entradaNode.question("Digite sua altura: ")) 
peso = parseFloat(entradaNode.question("Digite seu peso: "))

//Fiz este modelo para testar operadores condicionais ternarios. 
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_operator 
pesoideal = sexo.toUpperCase() === 'M' ? 72.7 * altura - 58 :
            sexo.toUpperCase() === 'F' ? 62.1 * altura - 44.7 :
            null;

if (pesoideal = null) {
    console.log("Sexo inválido. Por favor, digite M para masculino ou F para feminino.")
    process.exit(1)
}

console.log(peso === pesoideal ? "Você está dentro do peso ideal" : (peso < pesoideal ? "Você está abaixo do peso ideal" : "Você está acima do peso ideal"))
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else
