const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    },
};

const pessoaPrototypes = Object.assign({}, falar, comer, beber);



function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototypes, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
};

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'Joaquina');
console.log(p1);
console.log(p2);