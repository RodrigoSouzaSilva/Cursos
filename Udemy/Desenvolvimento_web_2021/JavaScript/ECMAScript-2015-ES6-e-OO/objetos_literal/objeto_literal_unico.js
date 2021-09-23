let assinatura = {
    idCliente: 1000,
    descrisao: 'Acesso a internet',
    status(){
       console.log(ativo) 
    }
}

console.log(assinatura.descrisao);

//cria aqui uma referência de acesso mesmo objeto, um ponteiro para assinatura
let y = assinatura

console.log(y.descrisao);

///
y.descrisao = 'Internet + TV + Telefone'

console.log(assinatura.descrisao);
console.log(y.descrisao);
