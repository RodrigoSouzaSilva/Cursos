// const data = new Date('1987-04-5 00:00:00');
// const diaSemana = data.getDay();
// let diaSemanaTexto;

// if (diaSemana === 0 ) {
//     diaSemanaTexto = 'domingo';
// } else if (diaSemana === 1 ) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2 ) {
//     diaSemanaTexto = 'terça';
// } else if (diaSemana === 3 ) {
//     diaSemanaTexto = 'quarta';
// } else if (diaSemana === 4 ) {
//     diaSemanaTexto = 'quinta';
// } else if (diaSemana === 5 ) {
//     diaSemanaTexto = 'sexta';
// } else if(diaSemana === 6 ) {
//     diaSemanaTexto = 'sabado';
// } else {
//     diaSemanaTexto = 'Dia da semana INVÁLIDO'
// }

// console.log(diaSemanaTexto);

function getDiaSemanaTexto(diaSemana){
 let diaSemanaTexto;

 switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = 'Valor Inválido';
    }
}

const data = new Date('1987-04-20 00:00:00')
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)

console.log(diaSemana, diaSemanaTexto);