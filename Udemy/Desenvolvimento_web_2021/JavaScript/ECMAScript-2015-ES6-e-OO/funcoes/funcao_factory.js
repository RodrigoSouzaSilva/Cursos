let bicicleta1 = {
    cor: 'Branca',
    macha: 'única',
    aro: 12,
    pedalar(){
        console.log('Método pedalar executado');
    }
}

let bicicleta2 = {
    cor: 'Vermelha',
    macha: '18',
    aro: 26,
    pedalar(){
        console.log('Método pedalar executado');
    }
}

console.log(bicicleta1)
console.log(bicicleta2)

//-----------------------------------------------
let BicicletaFactory = function(cor, marcha, aro){
    return {
        cor: cor,
        marcha: marcha,
        aro: aro,
        pedalar(){console.log('Método pedalar executado')}
    }
}

let Bicicleta3 = BicicletaFactory('Vermelha', '18', 26)
console.log(Bicicleta3)

let Bicicleta4 = BicicletaFactory('Preta', '21', 29)
console.log(Bicicleta4)
