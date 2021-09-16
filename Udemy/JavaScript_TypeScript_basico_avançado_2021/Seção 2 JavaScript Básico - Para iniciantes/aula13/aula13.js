//               0123456789
let umaString = "O rato roeu a roupa do rei de roma"

console.log(umaString[3]);
//verifica qual o valor está no indice 3

console.log(umaString.charAt(3));
//verifica qual o valor que está no indice 3

console.log(umaString.concat(' em um lindo dia'));
//para concatena mais uma string

console.log(umaString.indexOf('rato'));
//procura em qual indice está escrito rato

console.log(umaString.indexOf('r', 3));
//procura pela string r apartir do indice 3

console.log(umaString.replace('rato', '#'));
//troca a string rato por #

console.log(umaString.length);
//conta o total de caracteres da string. NÃO os indices

console.log(umaString.slice(2, 6));
//vai retonar a string do indece 2 ate o indice 6, NÃO mostrará o que tem na 6 vai até a 6

console.log(umaString.slice(-11,-8));
//estando negativo ele começará do final

console.log(umaString.split(' ', 2));
//vai dividir a frase em itens de array cada vez que ele achar um espaço, só duas vezes

console.log(umaString.toUpperCase());
//transforma tudo em maiusculo

console.log(umaString.toLowerCase());
//transfomar tudo em minusculo