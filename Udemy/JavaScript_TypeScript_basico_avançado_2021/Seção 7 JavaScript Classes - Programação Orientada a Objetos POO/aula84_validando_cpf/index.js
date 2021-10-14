// 705.484.450-52 
// 070.987.720-03

class validaCpf {
    // constructor(cpfEnviado) {
    //     Object.defineProperty(this, 'cpfLimpo', {
    //         writable: false,
    //         enumerable: true,
    //         configurable: true,
    //         value: cpfEnviado.replace(/\D+/g, '')
    //     })
    // }

    constructor(cpfEnviado) {
        this.cpfLimpo = cpfEnviado.replace(/\D+/g, '')
    }

    geraNovoCpf() {
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = validaCpf.geraDigito(cpfSemDigito);
        const digito2 = validaCpf.geraDigito(cpfSemDigito + digito1);
        this.novoCpf = cpfSemDigito + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 -(total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    esequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.esequencia()) return false;
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    }
}

let validacpf = new validaCpf('13459539763');
// validacpf = new validaCpf('999.999.999-99');

if(validacpf.valida()) {
    console.log('CPF Válido');
} else {
    console.log('CPF Inválido');
}