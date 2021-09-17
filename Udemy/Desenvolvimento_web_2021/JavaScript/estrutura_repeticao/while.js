var x = 1

        document.write('--== Início ==-- <br>')

        while(x <= 10){
           
           if(x === 5){
            x++
            continue
           }

           document.write(x + '<br>')
           console.log(x)
           x++
        }

        document.write('--== Fim ==--<br>')