var data = new Date()

        
        //adicionando /  remover dias
        document.write(data.toString())
        data.setDate(data.getDate()+1)
        document.write('<hr>')
        document.write(data.toString())
        document.write('<br><br><hr>')

        //adicionar / remover meses
        document.write(data.toString())
        data.setMonth(data.getMonth()+1)
        document.write('<hr>')
        document.write(data.toString())
        document.write('<br><br><hr>')

        //adicionar / remover anos
        document.write(data.toString())
        data.setFullYear(data.getFullYear()+1)
        document.write('<hr>')
        document.write(data.toString())
        document.write('<br><br><hr>')
        

        //15/01/2017
        var data1 = new Date(2017, 0, 15)

        //23/02/2017
        var data2 = new Date(2017, 1, 23)

        document.write(data1.toString())
        document.write('<hr>')
        document.write(data2.toString())

        document.write('<br><br><br><hr>')
        //converter datas para algo que possamos calcular
        document.write(data1.getTime())
        document.write('<hr>')
        document.write(data2.getTime())

        //getTime() -calcula a quantidade de milisegundos aparti 1 de janeiro de 1970

        document.write('<br><br><br><hr>')
        //encontrar a quantidade de milisegundo entre data1 e data2
        var milissegundo_entre_datas = Math.abs(data1.getTime() - data2.getTime())
        document.write(milissegundo_entre_datas)

        //1 dia 24 horas, 1 hora tem 60 minutos, 1 minutos tem 60 segundos e 1 segundo tem 1000 milissegundos
        document.write('<br><br><br><hr>')
        var milissegundo_por_dia = (1*24*60*60*1000)
        document.write('1 dia tem: '+milissegundo_por_dia+' milissigundos')
        document.write('<br><br><br><hr>')
        document.write('A diferença entre data1 e data2 é de: '+Math.ceil(milissegundo_entre_datas / milissegundo_por_dia)+' dias')
