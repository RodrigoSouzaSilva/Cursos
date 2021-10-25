const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 29,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// const nome = pessoa.nome
// console.log(nome); //Luiz

//Atribuição via desestruturaçao
const { sobrenome, time = 'Não tem'} = pessoa  //setando um valor padrão
console.log(sobrenome, time); 

const { nome: teste = 'Rodrigo' } = pessoa  // alterando o nome do atributo
console.log(teste);

//const { endereco: { rua, numero } } = pessoa; //pegando o objeto dentro de objeto
//console.log(rua, numero);

//const { endereco: { rua: r, numero } } = pessoa; //atribuindo a variavel rua em r
//console.log(r, numero);

const { nome, ...resto } = pessoa;
console.log(nome, resto);