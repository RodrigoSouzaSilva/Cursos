// Map    -> Modificar os array

// Dobre os números
//               0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => valor * 2);



// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nome = pessoas.map(valor => valor.nome);
const remove = pessoas.map(valor => ({idade: valor.idade}));
const id = pessoas.map((valor, indice) => {
    const novoObjeto = {...valor};
    novoObjeto.id = indice;
    return novoObjeto;
})

console.log(id);
console.log(pessoas);
