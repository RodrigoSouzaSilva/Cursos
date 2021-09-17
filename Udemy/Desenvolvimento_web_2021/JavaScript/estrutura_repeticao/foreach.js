var lista_funcionarios = ['Vivivane', 'Rosângela', 'Miguel', 'Lucas', 'Fernanda']

    var f = function(valor, indice){
        document.write(valor, indice)
    }

    lista_funcionarios.forEach(f)

    //           == 2° MODELO ==
    // console.log(lista_funcionarios)
    // document.write(lista_funcionarios[3])

    // lista_funcionarios.forEach(function(valor, indice, array){
    //        console.log('indice: ' +indice +' Valor:' +valor)

    //        if(valor == 'Lucas'){
    //            array[indice] = 'Um novo valor'
    //        }
    //    })

    //    console.log(lista_funcionarios)
    //    document.write('<br>'+lista_funcionarios[3])

    //         --== ATENÇÃO ==--
    // O INDICE SÓ SERÁ LIDO SE ELE FOR MAIOR OU IGUAL A 0
    // lista_funcionarios[3] = 'RODRIGO'  - OK
    // lista_funcionarios[-3] = 'RODRIGO' - NÃO SERÁ LIDO
