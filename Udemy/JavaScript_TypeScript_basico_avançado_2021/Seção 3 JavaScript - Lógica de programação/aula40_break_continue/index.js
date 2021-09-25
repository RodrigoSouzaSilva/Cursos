const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let c = 0;
while (c < numeros.length) {

    if (c === 2) {
        console.log('Pulando o indice 2');
        c++;
        continue;
    }

    console.log(numeros[c]);
    c++;
}





// for (let numero of numeros) {

//     if (numero === 2) {
//         console.log('Pulei o número 2');
//         continue;
//     }

//     if (numero === 7) {
//         console.log('7 encontrado saindo');
//         break;
//     }

//     console.log(numero);
// }

// console.log('Fim');
