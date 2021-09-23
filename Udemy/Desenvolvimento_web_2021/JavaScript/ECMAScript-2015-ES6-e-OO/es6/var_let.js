 //3 escopos: global, função e bloco
         var serie = 'Friends'
        // function x(){
        //     if(true){
        //         var serie = 'The Walking Dead'
        //     }
        //     console.log(serie)
        // }

        // x()

        // if(true){
        //     console.log(serie)
        // }

        // console.log(serie)
            
        // --== let preserva o escopo de onde a variável foi criada ==--
        if(true){
            let serie = 'Friends'
        }
        console.log(serie)
