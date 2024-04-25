var entradaNode = require ('readline-sync');

//definicao de variaveis
var totalvendas = 0;
var totalsalario = 0;
var comission = 0;
const salariobruto = 1500

//processamento
totalvendas = parseFloat(entradaNode.question("Qual foi o total em vendas?"));

comission = totalvendas / 10 * 1.5
totalsalario = salariobruto + comission

//saida de dados
console.log(`Comissão R$${comission} \nSalário bruto R$${totalsalario}`);

