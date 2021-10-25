// let nome = 'Luiz';
// var nome2 = 'Luiz';

// let nome2 = 'Otávio'
// //ERRO

// var nome2 = 'Otávio'
// // e possivel sobrepor uma declaração

// const verdadeira = true;

// // Let tem escopo de bloco { ...bloco}
// // Var só tem escopo de função

// let nome = 'Luiz';//criada
// var nome2 = 'Luiz';

// if (verdadeira) {
//     let nome = 'Otávio'; //criada
//     var nome2 = 'Rogerio' //redeclarando

//     if (verdadeira) {
//         let nome = 'Outra coisa';
//         var nome2 = 'Ronaldo' //redeclarada
//     }
// }

// console.log(nome, nome2);

// function falaOi () {
//     var nome = 'Luiz'
// }

// falaOi();
// console.log(nome); //ERRO pois as funções protegem as variaveis

console.log(nome);  //Undefined
console.log(sobrenome); //Gera ERRO

let sobrenome = 'Miranda' // Não acontece a elevação
var nome = 'João' // Faz a ELEVAÇÃO