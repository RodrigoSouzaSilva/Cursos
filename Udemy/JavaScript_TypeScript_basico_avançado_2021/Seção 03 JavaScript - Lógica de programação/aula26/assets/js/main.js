const form = document.querySelector('#form')


form.addEventListener('submit', function (e) {
    e.preventDefault(); // preinindo o evento de click de atualizar
    const inputPeso = e.target.querySelector('#peso'); // pegando valor digitado em peso
    const inputAltura = e.target.querySelector('#altura'); // pegando valor digitado em altura

    const peso = Number(inputPeso.value); // transformando valor um numerico
    const altura = Number(inputAltura.value); // transformando valor em numerico

    
    if (!peso) { // se não tiver nada em peso faça
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) { // se não tive nada em altura faça
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura); //faz o calculo
    const nivelImc = getNivelImc(imc); // pega qual o indice do calculo

    const msg = `Seu IMC é ${imc} - ${nivelImc}` // joga tudo em msg

    setResultado(msg, true); // chama o metodo, e passa os parametros que caiu, o segundo parametro por padrão e true, só será alterado caso entre em algum if acima
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso','Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >=   39) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc <  18.5) return nivel[0]
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid) {  // verifica qual a flag foi passada
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resultado.appendChild(p)
}


