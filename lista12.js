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

//if(SE), else if(senão se) e else(outro) | Professor não ensinou, se alguém souber um método de fazer sem usar eles avisar por favor.
if(sexo.toUpperCase() === 'M') { //toUpperCase - Converte todos os caracteres alfabéticos de uma string em letras maiúsculas.
    pesoideal = 72.7 * altura - 58
} else if (sexo.toUpperCase() === 'F') {
    pesoideal = 62.1 * altura - 44.7
} else {
    console.log("Sexo inválido. Por favor, digite M para masculino ou F para feminino.")
    process.exit(1)
}

if (peso === pesoideal) {
    console.log("Você está dentro do peso ideal")
} else if (peso < pesoideal) {
    console.log("Você está abaixo do peso ideal")
} else {
    console.log("Você está acima do peso ideal")
}