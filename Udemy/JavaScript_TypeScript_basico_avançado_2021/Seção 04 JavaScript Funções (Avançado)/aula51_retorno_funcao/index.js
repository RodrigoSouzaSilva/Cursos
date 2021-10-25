// return 
// Retorna um valor
// Termina a função

function soma(a , b){
    return a + b;       // retorna valor
}
let s1 = soma(2, 5);

function soma2(a, b){
    console.log(a + b); // não retorna valor
}
soma2(5, 2);

// document.addEventListener('click', function(){  //não retorna nada, mais muda algo
//     document.body.style.backgroundColor = 'red';
// });

function criaPessoa(nome, sobrenome){
    return { nome: nome, sobrenome: sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
    function falaResto( resto){
        return comeco + ' ' +resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('Mundo!'));


function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));