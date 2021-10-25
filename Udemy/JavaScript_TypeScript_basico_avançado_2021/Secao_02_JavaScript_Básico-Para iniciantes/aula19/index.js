/*
Primitivos (imutáveis)
string, number, boolean, underfined, null (bigint, symbol) = VALORES COPIADOS

Referência (mutável)    = APONTA PARA O ESPAÇO DA MEMÓRIA QUE ELE FAZ REFERÊNCIA
Array, object, function
*/

let a = [1, 2, 3]
let b = a       //referencia b=a e a=b
let c = [...a]  // para que o valor de a seja puxado para o c, fez a cópia e não a referência

console.log(a, b);

a.push(4)  // a e b  serão afetados

console.log(a, b);
b.pop()    // a e b serão afetados
a.pop()    // a e b serão afetados

console.log(a, b, c);


const nome1 = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}

const nome2 = {...nome1} // nome2 recebe os valores de a espalhados, não a referência

nome1.nome = 'Maria' // somente nome1 será alterado

console.log(nome1, nome2);