const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//const a3 = a1 + a2;          // ERRADO
//const a3 = a1.concat(a2)     // CERTO
// ...rest -> ...spread

const a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];    // OUTRO CERTO
console.log(a3);