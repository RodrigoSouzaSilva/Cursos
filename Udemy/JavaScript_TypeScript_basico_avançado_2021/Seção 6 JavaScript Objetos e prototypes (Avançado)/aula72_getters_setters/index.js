// defineProperty -> Getters e Setters
// Get - Obter valor
// Set - setar esse valor
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,     
        configurable: false,
        
        get: function() {    // Pegar e mostrar o valor
            return estoquePrivado;
        },

        set: function(valor) {
            if(typeof valor !== 'number') {
                console.log('Bad value');
                return
            }

            estoquePrivado = valor;
        }

    });
}

const p1 = new Produto('Camisa', 20, 3);
//console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);

console.log('#################################');

// Function Factory get e set
function criaProduto(nome) {
    return {
        get nome(){
            return nome;
        },

        set nome(valor){
            nome = valor;
        }
    };
}

const p2 = criaProduto('camiseta');
console.log(p2.nome);