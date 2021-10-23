// const path = require('path')

// console.log(__filename);  // nome do arquivo atual, caminho absoluto
// console.log(__dirname);   // nome da pasta atual, caminho absoluto

// console.log(path.resolve(__dirname, '..', '..','nome_da_pasta_para_ir'));


const Cachorro = require('./Z/mod2.js')

const c1 = new Cachorro('Dog')
c1.latir()