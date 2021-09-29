const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return; //se for vazio nada acontece
    criaTarefa(inputTarefa.value); //joga o texto pra outra função
});

inputTarefa.addEventListener('keypress', function(e){ //vigiando a tecla ENTER
    if(e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

document.addEventListener('click', function(e){ // apaga a li se tiver a classe apagar quando clicar
    const el = e.target;
    
    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

function criaTarefa(textoInput){
    const li = criaLi();  //li desta função, diferente o outro
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function criaLi(){
    const li = document.createElement('li');
    return li; //li desta função, diferente do outro
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus(); //para deixar o focus do ponteiro marcado nela
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar está tarefa');
    li.appendChild(botaoApagar);
}

function salvarTarefas() {      // salvar no JSON
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){   // Recuperar no JSON
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();