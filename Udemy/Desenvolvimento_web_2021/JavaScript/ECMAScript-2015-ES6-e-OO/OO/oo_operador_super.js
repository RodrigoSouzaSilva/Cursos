class Animal{
    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir(){
        console.log('Dormir')
    }
}

class Passaro extends Animal{
    constructor(bico, cor, tamanho, peso){
       super(cor, tamanho, peso)
       this.bico = bico
    }

    voar(){
        console.log('Voar')
    }
}

class Papagaio extends Passaro{
    constructor(bico ,sabeFalar, cor, tamanho, peso){
        super(bico, cor, tamanho, peso)
        this.saberFalar = sabeFalar
    }

    falar(){
        console.log('Falar')
    }
}

let papagaio = new Papagaio('grande',true, 'verde', 250, 350)
console.log(papagaio)

let papagaio2 = new Papagaio('pequeno',false, 'azul', 100, 250)
console.log(papagaio2)
