Object.prototype.attr50 ='z'//cuidado metodo que será global, todos terão esse recurso

let animal = { attr1: 'a'}
//relação de herança
let vertebrado = { __proto__:animal, attr2: 'b'}
//o prototipo associado a ave será o de vertebrado
let ave = { __proto__: vertebrado, attr3: 'c', attr2: 'x'}

console.log(ave.attr3, ave.attr2, ave.attr1, ave.attr50);
