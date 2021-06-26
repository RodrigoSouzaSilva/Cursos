// var nome = "Rodrigo de Souza"
// var n1 = 5
// var n2 =3
// var frase = "Japão é o melhor time do mundo"
// alert(nome + " tem " + idade)
// alert(idade + idade2)
// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.replace("Japão","Brasil"));
// console.log(frase.toUpperCase());
// console.log(frase.toLocaleLowerCase())


// var lista = ["maça", "pêra", "laranja"];
// console.log(lista);
// lista.pop()
// lista.push("Uva")
// console.log(lista[0])
// console.log(lista.toString()[0]);
// console.log(lista.join(" - "))

// var fruta = {nome:"maça", cor:"vermelha"}
// console.log(fruta);
// console.log(fruta.nome);

// var frutas =[{nome:"maça",cor:"vermelha"},{nome:"uva",cor:"roxa"}]
// console.log(frutas[1].cor);


// var idade = prompt("Qual a sua idade:")
// if (idade >= 18){
//     alert("Maior de idade")
// }else{
//     alert("Menor de idade")
// }

// var count = 0;
// while (count <= 5){
//     console.log(count);
//     alert(count)
//     count++
// }

// var count;
// for (count = 0; count <= 5; count++){
//     console.log(count);
// }

// var d = new Date();
// alert(d)
// alert(d.getMonth()+1)
// alert(d.getMinutes())

// var lista = ["Alemanha", "Inglaterra", "Escócia"]
// lista.push("Polônia");
// lista.pop("Inglaterra");
// console.log(lista);

// function soma(n1, n2){
//     return n1 + n2
// }
// alert(soma(5,10));

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }
// alert(setReplace("Vai Japão", "Japão", "Brasil"))

// function validaIdade(idade){
//     if (idade >= 18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar
// }
// var idade = prompt("Qual a sua idade: ")
// console.log(validaIdade(idade));

// function clicou(){
//     alert("Obrigado por clicar")
// }

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
}

function redirecionar(){
    window.open("http://www.google.com.br")
    window.location.href = "http://www.google.com.br"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
