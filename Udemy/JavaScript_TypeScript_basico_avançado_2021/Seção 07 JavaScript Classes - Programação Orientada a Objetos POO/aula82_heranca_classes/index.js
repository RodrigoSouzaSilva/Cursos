class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado`);
            return;
        }
        this.ligado = true;
        console.log(this.nome +' ligado.');
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado`);
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi)  {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar');
    }

    falaOi() {
        console.log('Oi');
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
const t1 = new Tablet('iPad', true);
s1.ligar();  // Samsung ligado.
s1.ligar();  // Samsung já ligado
t1.ligar();  // Olha, você alterou o método ligar
t1.falaOi(); // Oi

