var nome = '    Jorge Sant Ana    '

        //propriedade length - retorna a quantidade de caractere
        console.log(nome.length)

        //charAt - caractere contido no indice 7
        console.log(nome.charAt(7))

        //indexof - primeira ocorrencia dentro da cadeia de caractere
        console.log(nome.indexOf('i'))

        //replace - substitui texto dentro de uma string
        console.log(nome.replace('Sant Ana','Silva'))

        //substr - recorta uma parte da string
        console.log(nome.substr(11,3))

        //toLowerCase - transfoma em minusculo
        console.log(nome.toLowerCase())

        //toUpperCase - transforma em maiusculo
        console.log(nome.toUpperCase())

        //trim - remove os espaços nas extremidades de uma string
        console.log('-'+ nome.trim() + '-')
