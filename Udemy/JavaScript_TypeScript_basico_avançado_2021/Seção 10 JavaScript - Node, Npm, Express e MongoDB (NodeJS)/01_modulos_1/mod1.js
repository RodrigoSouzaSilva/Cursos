const nome = 'Luiz'
const sobrenome = 'Miranda'

const falaNome = () => nome + ' '+sobrenome

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

// this.qualquerCoisa = 'O que eu quiser exportar'

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}

const qualquer = 'Qualquer coisa'

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
exports.qualquer = qualquer

module.exports = {
    nome, sobrenome, Pessoa
}