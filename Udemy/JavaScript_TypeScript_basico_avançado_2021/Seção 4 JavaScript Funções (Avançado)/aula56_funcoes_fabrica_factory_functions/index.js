// Factory function (Função fábrica)
// Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' '); //dividindo a string por espaços
            this.nome = valor.shift(); // pegando o primeiro indice
            this.sobrenome = valor.join(' '); //juntando os indice com espaço
        },

        fala(assunto){
            return `${this.nome} está ${assunto}`
        },

        altura: altura,
        peso: peso,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.80, 80);
const p2 = criaPessoa('Maria', 'Otavio', 1.30, 90);
const p3 = criaPessoa('João', 'Otavio', 1.60, 110);

console.log(p1.nome, p1.sobrenome);
p1.nomeCompleto = 'Rodrigo de Souza Silva';
console.log(p1.nome, p1.sobrenome);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

