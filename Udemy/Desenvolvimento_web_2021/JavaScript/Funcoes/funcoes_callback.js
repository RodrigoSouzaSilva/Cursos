function exibirArtigo(id, callbackSucesso, callbackErro){
    //lógica recuperar o id via requisição http
    if(true){
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muito ultilizadas')
    }else{
        callbackErro('Erro ao recuperar os dados')
    }
} 

var callbackSucesso = function(titulo, descricao){
 console.log('<h1>'+titulo+ '</h1>')
 console.log('<hr>')
 console.log('<p>'+descricao+ '</p>')
}

var callbackErro = function(erro){
    console.log('<p><b>Erro</b> '+erro+'</p>')
}

exibirArtigo(1, callbackSucesso, callbackErro)
