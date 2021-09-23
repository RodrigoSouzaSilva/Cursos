var data = new Date()

        
        //adicionando /  remover dias
        console.log(data.toString())
        data.setDate(data.getDate()+1)
        console.log('<hr>')
        console.log(data.toString())
        console.log('<br><br><hr>')

        //adicionar / remover meses
        console.log(data.toString())
        data.setMonth(data.getMonth()+1)
        console.log('<hr>')
        console.log(data.toString())
        console.log('<br><br><hr>')

        //adicionar / remover anos
        console.log(data.toString())
        data.setFullYear(data.getFullYear()+1)
        console.log('<hr>')
        console.log(data.toString())
        console.log('<br><br><hr>')
        

        //15/01/2017
        var data1 = new Date(2017, 0, 15)

        //23/02/2017
        var data2 = new Date(2017, 1, 23)

        console.log(data1.toString())
        console.log('<hr>')
        console.log(data2.toString())

        console.log('<br><br><br><hr>')
        //converter datas para algo que possamos calcular
        console.log(data1.getTime())
        console.log('<hr>')
        console.log(data2.getTime())

        //getTime() -calcula a quantidade de milisegundos aparti 1 de janeiro de 1970

        console.log('<br><br><br><hr>')
        //encontrar a quantidade de milisegundo entre data1 e data2
        var milissegundo_entre_datas = Math.abs(data1.getTime() - data2.getTime())
        console.log(milissegundo_entre_datas)

        //1 dia 24 horas, 1 hora tem 60 minutos, 1 minutos tem 60 segundos e 1 segundo tem 1000 milissegundos
        console.log('<br><br><br><hr>')
        var milissegundo_por_dia = (1*24*60*60*1000)
        console.log('1 dia tem: '+milissegundo_por_dia+' milissigundos')
        console.log('<br><br><br><hr>')
        console.log('A diferença entre data1 e data2 é de: '+Math.ceil(milissegundo_entre_datas / milissegundo_por_dia)+' dias')
