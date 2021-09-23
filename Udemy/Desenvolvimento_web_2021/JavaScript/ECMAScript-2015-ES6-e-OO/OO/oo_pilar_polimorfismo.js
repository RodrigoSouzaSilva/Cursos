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

class Avestruz extends Passaro{
    constructor(){
        super('Grande', 'Branco e preto', 250, 150)
    }

    enterrarCabeça(){
        console.log('Enterrar a cabeça')
    }

    //a função voar() e sobreescrita, passando a ser essa para avestruz
    voar(){
        console.log('Não sabe voar')
    }
}

let papagaio = new Papagaio('grande',true, 'verde', 250, 350)
console.log(papagaio)

papagaio.voar()

let avestruz = new Avestruz()
avestruz.enterrarCabeça()
avestruz.voar()

