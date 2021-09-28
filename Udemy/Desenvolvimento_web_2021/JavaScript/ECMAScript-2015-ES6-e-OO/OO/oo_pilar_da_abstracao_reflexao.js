//um software de marcenaria
        //cadeira e sofá

    /*    //paradigma procedural

        //cadeira
        let qtde_pernas = 4
        let giratoria = false
        let cor = 'azul'

        //array de cadeiras
        let cadeiras = Array()

        cadeiras[0] = Array()
        cadeiras[0]['qtde_pernas'] = 4
        cadeiras[0]['giratoria'] = false
        cadeiras[0]['cor'] = 'azul'

        cadeiras[1] = Array()
        cadeiras[1]['qtde_pernas'] = 1
        cadeiras[1]['giratoria'] = true
        cadeiras[1]['cor'] = 'vermelha'

            function girar_cadeira(indice){
            if(cadeiras[indice]['giratoria'] === true){
                console.log('girou')
            }else{
                console.log('Cadeira não e giratória')
            }
        }

        function adicionar_cadeira(qtde_pernas, giratoria, cor){
            let cadeira = Array()

            cadeira['qtde_pernas'] = qtde_pernas
            cadeira['giratoria'] = giratoria
            cadeira['cor'] = cor

            cadeiras.push(cadeira)
        
        }

       adicionar_cadeira(3, false, 'verde')

       console.log(cadeiras)
    */


       //                --== Paradigma OO ==--

       class Cadeira{

        constructor(qtde_pernas, giratoria, cor){
            this.qtde_pernas = qtde_pernas
            this.giratoria = giratoria
            this.cor = cor
        } 

        girarCadeira(){
            if(this.giratoria === true){
                console.log('girou')
            }else{
                console.log('cadeira não é giratoria')
            }
        }
     }

     let cadeira1 = new Cadeira(4, false, 'azul')
     let cadeira2 = new Cadeira(1, true, 'vermelha')

     cadeira1.girarCadeira()
     cadeira2.girarCadeira()