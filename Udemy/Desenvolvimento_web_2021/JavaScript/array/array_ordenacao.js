// var lista_frutas = Array()

        // lista_frutas[0] = 'Maça'
        // lista_frutas[1] = 'Uva'
        // lista_frutas[2] = 'Banana'
        // lista_frutas[3] = 'Morango'

        // console.log(lista_frutas.sort())

        var  lista_numero = Array()

        lista_numero[0] = 12
        lista_numero[1] = 40
        lista_numero[2] = 3
        lista_numero[3] = 7
        lista_numero[4] = 19
        lista_numero[5] = 1

        console.log(lista_numero.sort(ordenaNumeros))

        function ordenaNumeros(a, b){
            return a - b
            // < 0 = a ordenado antes de b
            // > 0 = b ordenado antes de a
            // ==  = a ordem é mantida
        }