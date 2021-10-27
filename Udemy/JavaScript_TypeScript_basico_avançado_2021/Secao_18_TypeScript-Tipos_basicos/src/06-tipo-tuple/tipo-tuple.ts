// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Luiz']
const dadosCliente2: [number, string, string] = [2, 'Mario', 'Solto']
const dadosCliente3: [number, string, string?] = [4, 'Luiz']
const dadosCliente4: [number, string, ...string[]] = [8, 'Carlos', 'Volto', 'JN', 'PodCast']

// dadosCliente1[0] = 100
// dadosCliente1[1] = "300"

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Luiz', 'Otavio']
const array2: ReadonlyArray<string> = ['Maria', 'Julia']

console.log(array1);
console.log(array2);