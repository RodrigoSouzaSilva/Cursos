var nome = '    Jorge Sant Ana    '

        //propriedade length - retorna a quantidade de caractere
        document.write(nome.length)

        //charAt - caractere contido no indice 7
        document.write(nome.charAt(7))

        //indexof - primeira ocorrencia dentro da cadeia de caractere
        document.write(nome.indexOf('i'))

        //replace - substitui texto dentro de uma string
        document.write(nome.replace('Sant Ana','Silva'))

        //substr - recorta uma parte da string
        document.write(nome.substr(11,3))

        //toLowerCase - transfoma em minusculo
        document.write(nome.toLowerCase())

        //toUpperCase - transforma em maiusculo
        document.write(nome.toUpperCase())

        //trim - remove os espaços nas extremidades de uma string
        document.write('-'+ nome.trim() + '-')
