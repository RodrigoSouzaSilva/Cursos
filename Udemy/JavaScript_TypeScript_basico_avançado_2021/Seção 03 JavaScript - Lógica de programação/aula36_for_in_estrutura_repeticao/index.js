//For in ->lêos indices ou  chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// console.log(pessoa.nome);    //Luiz
// const chave = 'nome';
// console.log(pessoa[chave]); //Luiz

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }