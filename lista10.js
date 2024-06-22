var entradaNode = require('readline-sync');


//variaveis dos numeros iniciais
var int1 = 0
var int2 = 0
var real = 0.0

//entrad de dados (pergunta de quais os números)
int1 = parseInt(entradaNode.question("Digite um numero inteiro: "))
int2 = parseInt(entradaNode.question("Digite um numero inteiro: "))
real = parseFloat(entradaNode.question("Digite um numero real: "))

//variaveis para o produto, soma e cubo das equações 
var produto = (2 * int1) * (int2 / 2)
var soma = (3 * int1) + real
var cubo = Math.pow(real, 3) //Math.pow(base, expoente)

console.log(`O produto do dobro do primeiro com metade do segundo é ${produto} \nA soma do triplo do primeiro com o terceiro é ${soma} \nO terceiro elevado ao cubo é ${cubo}`) 