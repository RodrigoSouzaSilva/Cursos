// Escreva uma função que recebe2 números e retorne o maior deles

function max(x, y) {                            //função normal
    if(x > y){
        return x
    } else {
        return y
    }
}

function max1(x, y) {                            //função ternária
    return x > y ? `${x}` : `${y}`;
}

const max2 = (x, y) => x > y ? `${x}` : `${y}`;  //arrow function

console.log(max(104, 20));
console.log(max1(104, 20));
console.log(max2(104, 20));
