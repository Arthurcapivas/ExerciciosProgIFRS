var entradaNode = require ('readline-sync');

//definicao de variaveis
var totalvendas = 0;
var totalsalario = 0;
var comission = 0;
const salariobruto = 1200

//processamento
totalvendas = parseFloat(entradaNode.question("Qual foi o total em vendas?"));

comission = totalvendas / 10
totalsalario = salariobruto + comission

//saida de dados
console.log(`o seu salario bruto é R$${salariobruto}, em comissao este mes voce recebeu R$${comission}, juntando com seu salario bruto o seu total fica R$${totalsalario}`)