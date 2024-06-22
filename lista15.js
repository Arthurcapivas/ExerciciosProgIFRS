var entradaNode = require('readline-sync');

//variaveis
var areapintura = 0
var precototal = 0
var litrosnecessarios = 0
var latasnecessarias = 0
var custolatas = 0
var custogaloes = 0
let galaoesnecessarios = 0
var latasmis = 0
var litrosrestantes = 0
var galoesmis = 0
var valormis = 0
const coberturalitro = 6 //1 litro cobre 3m²
const lata = 18 //quantidade de litros da lata
const valorlata = 80 //lata de tinta = R$80
const valorgalao = 25
const galaolitro = 3.6

//pergunta
areapintura = parseFloat(entradaNode.question("Qual a area a ser pintada? Em metros quadrados: "))

//Calculos
litrosnecessarios = Math.ceil(areapintura / coberturalitro * 1.10)
latasnecessarias = Math.ceil(litrosnecessarios / lata) //Math.ceil é utilizada para arredondar um número para cima para o próximo inteiro.
custolatas = latasnecessarias * valorlata

galaoesnecessarios = Math.ceil(litrosnecessarios / galaolitro)
custogaloes = galaoesnecessarios * valorgalao

latasmis = Math.floor(litrosnecessarios / lata) //A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
litrosrestantes = litrosnecessarios % lata
galoesmis = Math.ceil(litrosrestantes / galaolitro)
valormis = (latasmis * valorlata) + (galoesmis * valorgalao)

//Opção 1
console.log("Opção 1: Apenas galões")
console.log(`Quantidade de galões: ${galaoesnecessarios}`)
console.log(`Custo: R$${custogaloes}`)

//Opção 2
console.log("Opção 2: Apenas latas")
console.log(`Quantidade de latas: ${latasnecessarias}`)
console.log(`Custo: R$${custolatas}`)

//Opção 3
console.log("Opção 3: Mistura de latas e galões")
console.log(`Quantidade de latas: ${latasmis}`)
console.log(`Quantidade de galões: ${galoesmis}`)
console.log(`Custo: R$${valormis}`)

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor