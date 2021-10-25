function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// FUNÇÃO MAIS VERBOSA que retorna uma promessa

// esperaAi('FASE 1', rand())
// .then(valor => {
//     console.log(valor);
//     return esperaAi('FASE 2', rand());
// })
// .then(fase => {
//     console.log(fase);
//     return esperaAi('FASE 3', rand())
// })
// .then(fase => {
//     console.log(fase);
//     return fase;
// })
// .then(fase => {
//     console.log('Terminamos na fase', fase);
// })
// .catch(e => console.log(e))

///////////////////////////////////////////////////////////////////////////////

// ASYNC/AWAIT

async function executa() {
    try {
        const fase1 = await esperaAi('FASE 1', rand());
        console.log(fase1);

        const fase2 = await esperaAi(9876, rand());
        console.log(fase2);

        const fase3 = await esperaAi(3333, rand()); // <- ERRO
        console.log(fase3);

        console.log('Terminamos na:', fase3);
    } catch(e) {
        console.log(e);
    }
}

executa();

// pending - ainda está sendo executada
// fullfilled - quando está completamente resolvida
// rejected - uma promessa rejeitada