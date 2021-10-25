// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: false,     // mostra a chave
        value: estoque,       // valores que vai receber
        writable: false,      // controla se o valor pode ou não ser alterado
        configurable: false   // se pode reconfigurar a propriedade (ex: delete p1.estoque)
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

console.log('###############################');

function Produto2(nome, preco, estoque) {

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: false,
            value: preco,
            writable: true,
            configurable: true
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true
        }
    });
}

const p2 = new Produto2('Camiseta', 20, 3);
console.log(p2);