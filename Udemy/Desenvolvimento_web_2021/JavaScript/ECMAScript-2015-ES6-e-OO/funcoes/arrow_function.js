// let quadrado = function(x = 0){
        //     return x * x
        // } 


        //         --== ARROW FUNCTION ==--
        // let quadrado = (x) => {
        //     return x * x
        // }

        // lembra de colocar os parênteses para indicar que você quer que a função seja executada
        
        // document.write( quadrado(30) )


        // return implicito, deixando o código menos verboso 
        // let quadrado = x => x * x

        
        /*let parOuImpar = function(numero){
            if(numero % 2 === 0){
                return 'Par'
            }else{
                return 'Impar'
            }
        }
        */


        //        --== REFATORANDO O CÓDIGO ==--
        /*
        let parOuImpar = numero =>{
            if(numero % 2 === 0){
                return 'Par'
            }else{
                return 'Impar'
            }
        }

        document.write(parOuImpar(8))
        */

        let parOuImpar = numero => numero % 2 === 0? 'Par' : 'Impar'

        console.log(parOuImpar(2));
