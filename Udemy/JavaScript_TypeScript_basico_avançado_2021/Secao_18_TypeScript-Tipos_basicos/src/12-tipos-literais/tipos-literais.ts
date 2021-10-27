/* eslint-disable */
let x = 10  // number inteiro
x = 0b1010  // number binario

const y = 10

// let a: 100 = 100  
// a = 120           // essa variavel só poderá ter o valor 100

let a = 100 as const // eslint-disable-line

const pessoa = {
    nome: 'Luiz' as const,
    sobrenome: 'Miranda'
}

function escolhaCor(cor: 'Vermelha' | 'Amarelo' | 'Azul'):string {
    return cor
}

console.log(escolhaCor('Vermelha'));

// Module mode
export default 1