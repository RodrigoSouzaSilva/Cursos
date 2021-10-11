/*
Object.values                               // Mostra somente seus valores
Object.entries                              // Mostra as chaves e os valores
Object.getOwnPropertyDescriptor(o, 'prop')  // Mostras suas propriedades
Object.assign(des, any)                     // Copiar um objeto
...(spread)                                 // Espalha os valores do objeto

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedade)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Produto', preco: 1.8};
const caneca = {...produto};

//const caneca = Object.assign({}, produto, {material: 'porcelana'});
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(Object.values(produto));
//console.log(Object.entries(produto));

// Desestruturando um objeto
for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
}