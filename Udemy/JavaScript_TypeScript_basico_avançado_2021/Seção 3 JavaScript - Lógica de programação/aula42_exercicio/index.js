// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem

function ePaisagem(l, a) {
    return l > a;
}

const ePaisagem1 = (largura, altura) => largura > altura;

console.log(ePaisagem(200,100));
console.log(ePaisagem1(5,65));