var entradaNode = require('readline-sync');

const dividendo = parseFloat(entradaNode.question('Entre com o dividendo: '));
const divisor = parseFloat(entradaNode.question('Entre com o divisor: '));


const quociente = Math.floor(dividendo / divisor); // Divisão inteira
const resto = dividendo % divisor;

console.log('Dividendo:', dividendo);
console.log('Divisor:', divisor);
console.log('Quociente:', quociente);
console.log('Resto:', resto);