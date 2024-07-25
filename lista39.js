var entradaNode = require('readline-sync');

var cavaloscomprados = parseFloat(entradaNode.question("Quantos cavalos foram comprados? "))

var ferraduras = cavaloscomprados * 2

console.log(`para equipar todos os cavalos comprados com ferraduras, será necessario ${ferraduras} ferraduras`)