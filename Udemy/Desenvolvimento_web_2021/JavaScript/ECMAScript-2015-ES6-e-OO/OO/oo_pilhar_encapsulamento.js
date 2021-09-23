class Tv{
    constructor(){
        this._relacaoCanais = Array(2, 4, 5, 7, 10)
        this._canalAtivo = 5
        this._volume = 5
    }

    //getters e setters
    get canalAtivo(){
        return this._canalAtivo
    }

    set canalAtivo(canal){
        if(this._relacaoCanais.indexOf(canal) !== -1){
            this._canalAtivo = canal
        }

    }
}

let tv = new Tv()

//não irá acessar e alterar o valor, pois o valor 8 não existe dentro da Arery de _relacaoCanais
tv.canalAtivo = 8
console.log(tv.canalAtivo)

tv.canalAtivo = 7
console.log(tv.canalAtivo)
