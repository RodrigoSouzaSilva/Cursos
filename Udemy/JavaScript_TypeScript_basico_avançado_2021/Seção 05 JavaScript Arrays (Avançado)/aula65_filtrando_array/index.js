// Filter, map, reduce
// Filter -> filtrar os arrays -> sempre retorna um array, com a mesma quantidade ou menos
// Map    -> Modificar os array
// Reduce -> Reduzir o array em um único valor

// Retorna os números maiores que 10
//               0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados); //[ 50, 80, 11, 15, 22, 27 ]

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter(valor => valor.idade > 50);
const nomeComAUltimaLetraA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));