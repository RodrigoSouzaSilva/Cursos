const nome = 'Rodrigo'
const sobrenome = 'Souza'
const idade = 29
const peso = 69
const altura = 1.74
let imc = peso / (altura * altura); //peso / (altura * altura)
let anoNascimento = 2021 - idade

// tempates strings

console.log(`${nome} ${sobrenome} tem, ${idade} anos, pesa ${peso} Kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);