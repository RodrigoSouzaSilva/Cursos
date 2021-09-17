function calcularAreaTerreno ( largura, comprimento){
    //lógica
    var area = largura * comprimento

    return area
}

var largura = parseInt(prompt('Digite a largura do terreno em metros: '))
var comprimento = parseInt(prompt('Digite o comprimento do terreno em metros: '))

var area = calcularAreaTerreno(largura, comprimento)

document.write('O terreno possui ' + area + ' metros quadrados.')
