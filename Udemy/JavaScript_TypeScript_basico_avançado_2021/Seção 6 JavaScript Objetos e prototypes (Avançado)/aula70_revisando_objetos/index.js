const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

// formas de chamar um atributo
console.log(pessoa['nome']);
console.log(pessoa.sobrenome);

// chave dinamica
const chave = 'idade';
console.log(pessoa[chave]);

console.log('#############################################################'); 

// new ArraY(); ou []
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.falarNome = function(){
    return `${this.nome} está falando seu nome.`;
};
pessoa1.idade = 30;
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

// delete pessoa2.nome;
// console.log(pessoa1);
// console.log(pessoa2);
// pessoa1.falarNome()
// console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(chave, pessoa1[chave]);
}

console.log('#############################################################'); 

// factory functions / Constructor functions // Classes

// Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
};

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto());


// Constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome;

    Object.freeze(this);  // Nenhum objeto poderar ser alterado seu valor ou criado
}

// {} <- this -> retornando esse this
const pe1 = new Pessoa('Maria', 'Joaquina');
Object.freeze(pe1);   // para travar o objeto
pe1.nome = 'Monica';  // iria aterar o objeto caso não estivesse travado
const pe2 = new Pessoa('João', 'Pedro');
console.log(pe1);
console.log(pe2);

