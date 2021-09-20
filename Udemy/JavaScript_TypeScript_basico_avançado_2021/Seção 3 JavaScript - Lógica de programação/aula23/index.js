/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar o valor verdadeiro

FALSY
false
0
'' "" ``
null / underfined
NaN
*/

console.log('Rodrigo' && true && 'Maria'); // vai retornar o ultimo valor no caso 'Maria'
console.log('Luiz' && undefined && 'Maria'); //ao encontrar um valor sendo como falso , a operação irá parar

function falaOi(){
    return 'Oi'
}

const vaiExecutar = false

//true         //false
vaiExecutar && falaOi() 

console.log(vaiExecutar && falaOi()); // vai retornar false
console.log(0 || false || null || 'Luiz Otávio' || true); // vai retornar o primeiro valor verdadeiro que ele encontrou