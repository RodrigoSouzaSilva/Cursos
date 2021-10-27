const objetoA: {
    readonly chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B'
}

//objetoA.chaveA = 'Outro valor'
objetoA.chaveC = 'Nova chave'
objetoA.qualquer = 'coisa'
objetoA.outraChave = 1234

console.log(objetoA);
