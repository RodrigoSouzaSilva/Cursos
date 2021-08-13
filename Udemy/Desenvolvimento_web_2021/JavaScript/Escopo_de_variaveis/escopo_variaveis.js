//3 escopos: global, função e o  bloco

var serie = 'Friends'

//escopo de bloco
if(true){
    var serie2 = 'Game of Thones'
    document.write(serie)
}

document.write(serie2)

document.write('<br>')

//escopo da função
function x() {
    var serie3 = 'The Walking Dead'
    document.write(serie)
    document.write(serie2)
}

x()

document.write('<br>')
document.write(serie3)