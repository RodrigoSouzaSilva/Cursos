function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        };

        setTimeout( () => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });    
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    // esperaAi(1000, 1000),
    'Outro Valor'
];

// Promise.all(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function (erro){
//     console.log(erro);
// });

// Promise.race(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function (erro){
//     console.log(erro);
// });

function baixaPagina() {
    const emChache = false;

    if(emChache) {
        return Promise.resolve('Pagina em chache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e))