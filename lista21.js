var entradaNode = require('readline-sync');

var valorpedido = parseFloat(entradaNode.question("Qual foi o valor pedido pelo colega? "))
var valorjuros = valorpedido * 1.15

console.log(`O valor emprestado com juros de 15% fica: ${valorjuros} \nFoi emprestado para ele ${valorpedido}`)