const objs = [
    {
        "nome": "Matheus",
        "idade": 30,
        "esta_trabalhando": true,
        "detalhes_profissao": {
            "profissao": "Programador",
            "empresa": "Empresa X"
        },
        "hobbies": ["Programar", "Correr", "Ler"]
    },
    {
        "nome": "João",
        "idade": 23,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissao": null,
            "empresa": null
        },
        "hobbies": ["Jogar", "Malhar"]
    }
]

// JSON
// converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData);
console.log(typeof jsonData);

// converter json em objeto
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

// Recuperando valor atravez do map
objData.map(pessoa => {
    console.log(pessoa.nome);
})

// Recuperando valor expecificos
console.log(objData[1].hobbies[1]);

