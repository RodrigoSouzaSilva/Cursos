// Função construtora -> constroi obetos
// Função fabrica -> fabrica objetos

// Construtora -> Pessoa (new) = new Pessoa = o nome prescisa ser em maiusculos

function Pessoa(nome, sobrenome) {
    // Atributos ou Métodos Privados
    const ID = 123456;
    const metodoInterno = function(){
        console.log('Não poderá ser chamada');
    };

    // Atributos ou Métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log('Sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Oliveira');
console.log(p1.ID); // ERRO