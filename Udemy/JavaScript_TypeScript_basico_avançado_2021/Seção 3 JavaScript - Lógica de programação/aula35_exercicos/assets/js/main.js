const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container'); // pegando a classe de conteiner
const div = document.createElement('div');              // criando uma tag div, mais não e filho de ninguem

for (let i = 0; i < elementos.length; i++) {            // percorrendo o array de elementos
    let { tag, texto } = elementos[i];                  // incrementando por decrementação uma variavel
    const criaTag = document.createElement(tag);        // criando uma tag e jogando em uma variavel
    criaTag.innerHTML = texto                           // inserindo um valor na variavel que foi criada
    div.appendChild(criaTag);                           // inserindo a variael que foi crianda com filha de outra variavel
}

container.appendChild(div)                              // inserindo como filha todo o conteudo contido na div

const h1 = document.querySelector('h1');
h1.style.backgroundColor = 'red';