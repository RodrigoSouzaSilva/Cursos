//const nomes = new Array('Eduardo', 'Maria', 'Joana');

// Valor por referência
//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes]; // fazendo um espalhamento dos valores de nomes para dentro de novo

//const novo = nomes       // fazendo desse metodo um aponta para outro, caso um mude o outro muda tambem

nomes.pop();             // remove elemento do final array
novo.shift();            // remove do começo e realoca os indicces
nomes.push('João')       // adiciona um novo elemento ao final
novo.unshift('Wallace')  // adiciona no começo do array
console.log(nomes.slice(0, 2));            // fatia o array para qual valor deseja

console.log(nomes);
console.log(novo);
console.log(nomes.length);

const nome1 = 'Luiz Otávio Midanda';
const nomes1 = nome1.split(' ');         // transformando uma string em um array a cada espaço
console.log(nomes1);

const nomes2 = ['Luiz', 'Otávio', 'Miranda'];
const nome2 = nomes2.join(' ');          // une todos os valores de uma array em string
console.log(nome2);