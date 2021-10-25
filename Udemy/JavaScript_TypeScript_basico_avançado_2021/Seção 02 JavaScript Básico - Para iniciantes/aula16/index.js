//              0       1        2
let alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Eduardo'
//editando a arrey

alunos.push('Luiza')
alunos.push('Otávio')
//inserindo pelo push, insere no final da arrey

alunos.unshift('Luiza')
//inserindo no começo da arrey, no indice 0

alunos.pop()
// remove o ultimo item do array

alunos.shift()
// remove do começo da array

delete alunos[1];
// apaga o item do indice, mais nao altera os indices

alunos[1] = 'Maria'    //inseri
alunos.push('Eduardo') //adciona no final

console.log(alunos.slice(0,3));
//para fatiar os indices como um string, começa no 0 e vai até o 2

console.log(alunos instanceof Array);
// verificando se isso e uma instancia de arrey

console.log(alunos);