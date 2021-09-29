// arguments que sustenta todos os argumentos enviados
// Só para funções criadas com a palavra function

// function funcao(a, b, c){
//     let total = 0;
//     for(let argumento of arguments){
//         total += argumento
//     }
//     console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao(a, b, c, d, e, f){   // menos argumentos que parametro retorna undefied
//     console.log(a, b, c, d, e, f);   // naqueles que não foram passado
// }
// funcao(1, 2, 3);

// function funcao(a, b = 2, c = 4){    // b como padrão será 2, caso não haja algum
//     console.log(a + b + c);
// }
// funcao(2, undefined, 20);  // para deixar o valor padrão de b

// function funcao({ nome, sobrenome, idade }){
//     console.log(nome, sobrenome, idade);
// }
// let obj = { nome: 'Luiz', sobrenome: 'Otavio', idade: 30 };
// console.log(obj);

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }
// funcao(['Luiz Otávio', 'Miranda', 30])

// const conta = function(operador, acumulador, ...numeros){  // rest operator - sempre deve ser o ultimo
//     for(let numero of numeros){
//         if(operador === '+') acumulador += numero;
//         if(operador === '-') acumulador -= numero;
//         if(operador === '*') acumulador *= numero;
//         if(operador === '/') acumulador /= numero;
//     }
//     console.log(acumulador);
// };
// conta('+', 1, 20, 30, 40 ,50);

// const conta = function(operador, acumulador, ...numeros){
//     console.log(operador, acumulador, numeros);
// };
// conta('+', 1, 20, 30, 40, 50)

const conta = (...args) => {   // para pegar os argumentos com arrow function
    console.log(args);
}
conta('+', 1, 20, 30, 40, 50);