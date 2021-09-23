//modelo do objeto
class ContaBancaria {

    constructor(){
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = 450
    }

    depositar(valorDeposito){
        this.saldo += valorDeposito
        console.log(`Foi feito um deposito de R$ ${valorDeposito} reais`)
    }

    sacar(valorSaque){
        this.saldo -= valorSaque
        console.log(`Foi feito um saque de R$ ${valorSaque} reais`)
    }

    consultarSaldo(){
        return console.log(`Seu saldo é de: R$ ${this.saldo} reais`)
    }
}

let x = new ContaBancaria()
let y = new ContaBancaria()

x.consultarSaldo()
x.depositar(450)
x.sacar(200)
x.consultarSaldo()
