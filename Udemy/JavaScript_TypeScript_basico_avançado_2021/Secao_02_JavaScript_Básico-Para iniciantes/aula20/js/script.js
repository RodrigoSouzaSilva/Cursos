function meuEscopo () {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
    function recebeEventoForm (evento) {
        evento.preventDefault();  //evento que impede ao clique do botão a pagina atualize
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        const individuo = {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        }

        pessoas.push(individuo)
        console.log(pessoas);

        resultado.innerHTML += `<p>${individuo.nome} ${individuo.sobrenome} ${individuo.peso} ${individuo.altura}</p>`
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo()

