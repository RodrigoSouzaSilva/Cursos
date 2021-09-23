//contexto spread

        //striing
        let tituloArtigo = 'Como ultilizar o operador rest/spreak'

        console.log(tituloArtigo)
        console.log(...tituloArtigo)
        console.log([...tituloArtigo])

        //arrays
        let listaCurso1 = ['NodeJS e MongoDB','ES6, TypeScript e Angular 4']
        let listaCurso2 = ['Multiplataforma Android/IOS', 'Introdução ao GNU/Linux']
        let listaCursosCompleto = [...listaCurso1,'Web Completo',...listaCurso2, 'Apk android']

        console.log(listaCursosCompleto)

        //objeto
        let pessoa = { nome: 'João', idade: 27}
        let clone = {endereco: 'Rua Abc', ...pessoa}

        console.log(clone)