var entradaNode = require('readline-sync');

var area = 0
var raio = 0 

raio = parseFloat(entradaNode.question("qual o raio do circulo? "))

area = Math.PI * raio * raio //Math.PI representa a proporção entre circunferência de um círculo com o seu diâmetro, proximadamente 3.14159
area = area * 2

console.log(`a area do circulo é: ${area.toFixed(0)}`)