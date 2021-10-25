//  01/01/1970 - Timestamp unix ou época unix - marco 0
//                  s   m    h  *  milisegundos
// const tresHoras = 60 * 60 * 3  *  1000;
// const umDia = 60 * 60 * 24 * 1000

// const date = new Date(0 + tresHoras); // marco 0, poorque temos um recuo de -3 horas

//                    ano  mês dia  h  m   s   milessimosegundos
//const date = new Date(2019, 3, 20, 15, 14, 27, 500);
//console.log(date.toString());

// const data = new Date();
// console.log('Dia',data.getDate());         //Dia
// console.log('Mês',data.getMonth() + 1);    //Mês
// console.log('Ano',data.getFullYear());     //Ano
// console.log('Hora',data.getHours());       //Hora
// console.log('Min',data.getMinutes());      //Minutos
// console.log('Seg',data.getSeconds());      //segundos
// console.log('ms',data.getMilliseconds());  //Milisegundos
// console.log('Dia da semana',data.getDay());//Dia da semana
// console.log(data.toString());

// console.log(Date.now());
// //milesimos de segundos desdo marco 0 até agora

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formatData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano =  zeroAEsquerda(data.getFullYear());
    const hora =  zeroAEsquerda(data.getHours());
    const min =  zeroAEsquerda(data.getMinutes());
    const seg =  zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formatData(data)
console.log(dataBrasil);