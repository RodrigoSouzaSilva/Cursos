//objeto criado em base em um classe
class Produto{
    constructor(descricao, preco){
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

let lapis = new Produto('Notebook', 2200)
lapis.verDescricao()

//---------------------------------------------------------

//objeto literal(objeto descritivo)
let produtoLiteral = {
    descricao: 'Geladeira', 
    preco: 1800,
    verDescricao: function(){
        console.log(`${this.descricao} custa ${this.preco}`)
    }
}

produtoLiteral.verDescricao()