var entradaNode = require('readline-sync');

var aluno1 = parseFloat(entradaNode.question("Qual a nota do aluno 1? "))
var aluno2 = parseFloat(entradaNode.question("Qual a nota do aluno 2? "))
var aluno3 = parseFloat(entradaNode.question("Qual a nota do aluno 3? "))
var aluno4 = parseFloat(entradaNode.question("Qual a nota do aluno 4? "))
var aluno5 = parseFloat(entradaNode.question("Qual a nota do aluno 5? "))

var medialunos = aluno1 + aluno2 + aluno3 + aluno4 + aluno5 / 5

console.log(`a media de nota dos alunos foi: ${medialunos}`)