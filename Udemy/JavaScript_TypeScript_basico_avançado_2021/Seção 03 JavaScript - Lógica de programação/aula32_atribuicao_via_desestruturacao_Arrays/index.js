// let a = 'A'; //B
// let b = 'B'; //C
// let c = 'C'; //A

// const numeros = [b, c, a];
// [a, b, c] = numeros;

// console.log(a, b, c);
 
//...rest, spread...
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, , tres, , cinco, , sete] = numeros;

console.log(um, tres, cinco);

//               0          1          2
//            0  1  2    0  1  2    0  1  2
const num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [, [ , , seis], ] = num;
console.log(seis);