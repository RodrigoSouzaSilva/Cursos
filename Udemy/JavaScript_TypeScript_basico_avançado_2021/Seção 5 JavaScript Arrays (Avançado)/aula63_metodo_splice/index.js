//              -5       -4        -3         -2        -1
//               0        1         2          3         4 
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// excluir e adicionar
// nomes.splice(indice, delete, elem1, elem2, elem3);

// pop - tira do final
nomes.splice(-1,1);
console.log(nomes);

// push - adiciona no final
nomes.splice(nomes.length ,0, 'Luiz');
console.log(nomes);

// shift - remove do começo
nomes.splice(0, 1);
console.log(nomes);

//unshift - adiciona do começo
nomes.splice(0, 1, 'Otávio');
console.log(nomes);