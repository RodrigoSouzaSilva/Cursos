function calcularAreaTerreno ( largura, comprimento){
    //lógica
    var area = largura * comprimento

    return area
}

var largura = 45
var comprimento = 15

var area = calcularAreaTerreno(largura, comprimento)

console.log('O terreno possui ' + area + ' metros quadrados.')
