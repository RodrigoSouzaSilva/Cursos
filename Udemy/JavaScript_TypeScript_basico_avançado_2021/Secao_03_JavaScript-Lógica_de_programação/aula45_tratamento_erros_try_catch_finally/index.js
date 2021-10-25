function retornaHora(data) {
    if (data && !(data instanceof Date)) {
       throw new TypeError('Esperando instancia de Date.')
    }

    if (!data) {
        data= new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour:'2_digit',
        minute:'2_digit',
        second:'2_digit',
        hour12: false
    });
}

const data = new Date('01-01-1970 12:58:43');
const hora = retornaHora(11);
console.log(hora);
