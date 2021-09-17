function soma(a, b) {
    // b = b === undefined ? 0 : b  //testando atravez de um valor ternário
    return a + b
}

console.log(soma(7, 7))
console.log(soma(7, 7, 9 ,15)) //O JavaScript desconsidera os parâmetros adcionais
console.log(soma(7)) //faltando 1 parâmetro, not a number NaN
console.log(soma())  //faltando 2 parâmetro, not a number NaN
