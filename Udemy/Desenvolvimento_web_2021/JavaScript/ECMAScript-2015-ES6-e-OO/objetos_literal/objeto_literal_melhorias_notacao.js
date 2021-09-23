let nome = 'Jorge'
let idade = 29
let sexo = 'Masculino'
let profissao = 'Programador'

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function(){
        console.log(`Olá ${this.nome}, você tem ${idade} anos, i é ${profissao}`)
    }
}

console.log(objeto)
objeto.exibirResumo()


let objeto2 = {
    nome,  //nome = nome variável / valor = valor da variavel
    idade,
    sexo,
    profissao,
    exibirResumo(){
        console.log(`Olá ${this.nome}, você tem ${idade} anos, i é ${profissao}`)
    }
}

console.log(objeto2)
objeto2.exibirResumo()
