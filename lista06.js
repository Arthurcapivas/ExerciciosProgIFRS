var entradaNode = require('readline-sync');

var area = 0
var raio = 0 

raio = parseFloat(entradaNode.question("qual o raio do circulo? "))

area = Math.PI * raio * raio 

console.log(`a area do circulo é: ${area.toFixed(1)}`)