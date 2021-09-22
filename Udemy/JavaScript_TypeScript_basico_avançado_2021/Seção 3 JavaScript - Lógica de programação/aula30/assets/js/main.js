// const data = new Date('2019-04-01 01:10:49');
// const h1 = document.querySelector('.texto')

// const dia = zeroAEsquerda(data.getDate());
// const mes = mesTexto(data.getMonth() + 1);
// const ano = data.getFullYear();
// const hora = zeroAEsquerda(data.getHours());
// const min = zeroAEsquerda(data.getMinutes());
// const seg = zeroAEsquerda(data.getSeconds());
// const semana = diaSemana(data.getDay());


// function zeroAEsquerda(num) {
//     return num < 10 ? `0${num}` : num
// }

// function diaSemana(semana) {
//     if (semana === 0) {
//         return 'Domingo'
//     } else if (semana === 1) {
//         return 'Segunda'
//     } else if (semana === 2) {
//         return 'Terça'
//     } else if (semana === 3) {
//         return 'Quarta'
//     } else if (semana === 4) {
//         return 'quinta' 
//     } else if (semana === 5) {
//         return 'Sexta'
//     } else if (semana === 6) {
//         return 'Sábado'
//     } else {
//         return 'Dia da semana Inválido'
//     }
// }

// function mesTexto (mes) {
//     if (mes === 1) return 'Janeiro';
//     if (mes === 2) return 'Fevereiro';
//     if (mes === 3) return 'Março';
//     if (mes === 4) return 'Abril';
//     if (mes === 5) return 'Maio';
//     if (mes === 6) return 'Junho';
//     if (mes === 7) return 'Julho';
//     if (mes === 8) return 'Agosto';
//     if (mes === 9) return 'Setembro';
//     if (mes === 10) return 'Outubro';
//     if (mes === 11) return 'Novembro';
//     if (mes === 12) return 'dezembro';
// }

// h1.innerHTML = `${semana}, ${dia} de ${mes} de ${ano} ${hora}:${min}:${seg}`

//OU MAIS RÁPIDO
const data = new Date();
const h1 = document.querySelector('.texto');

h1.innerHTML = data.toLocaleString('pt-BR', {
    dateStyle:'full', timeStyle:'short'
});