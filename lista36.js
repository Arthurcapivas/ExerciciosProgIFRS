var entradaNode = require('readline-sync');


var raio = parseFloat(entradaNode.question("Qual o raio do circulo? "))
var perimetro = 2*Math.PI*raio
var area = Math.PI*raio**2

console.log(`o perimetro do circulo é ${perimetro} e a area do circulo é ${area}`)