var entradaNode = require('readline-sync');

var base = parseFloat(entradaNode.question("Qual a base do triangulo? "))
var altura = parseFloat(entradaNode.question("Qual a altura do triangulo? "))

var perimetro = (base + altura) * 2
var area = base * altura
var diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));

console.log(`O Perimetro é: ${perimetro} \nA Area do triangulo é: ${area} \nA diagonal do triangulo é: ${diagonal.toFixed(2)} `)