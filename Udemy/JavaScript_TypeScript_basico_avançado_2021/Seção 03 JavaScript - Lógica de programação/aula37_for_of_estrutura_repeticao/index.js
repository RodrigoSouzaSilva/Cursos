//For classico - Geralmente com iteravéis ( array ou strings)
//For in - Retorna o índice ou chave (strings, arrya ou Objetos)
//For of - Retorna o valor em si (iteráveis, array ou string)

//            012345678910
const nomes = ['Luiz', 'Otávio','Henrique'];

for (let i= 0; i < nomes.length; i++) { // retorna o indice
    console.log(nomes[i]);
}

console.log('############');

for ( let i in nomes) {          //retorna o indice
    console.log(i);
}

console.log('############');

for (let valor of nomes) {       //retorna o valor do indice
    console.log(valor);
}

console.log('############');

nomes.forEach( function(valor, indice, array) {  // retorna o valor, indice eo array completo
    console.log(valor, indice, array);
})