let x;
if(typeof x === 'undefined') x = 20

// console.log(x * 2);


export function createPerson(firstName: string, lastName?: string): {
    firstName: string;          // A saida será string
    lastName?: string;          // A saida será string
} {
    return {
        firstName,
        lastName
    }
}

export function squareOf(x: any) {
    if(typeof x === 'number') return x * x;
    return null
}


const squareOfTwoString = squareOf(2)

if(squareOfTwoString === null) {
    console.log('Conta invalida');
} else {
    console.log(squareOfTwoString * 100);
}