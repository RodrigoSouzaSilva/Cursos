// setTimeout(function(){ document.write('teste')}, 2000);
        // clearTimeout()

        // setInterval(function(){document.write('teste2')}, 1000)
        // clearInterval

        var i = 5

        var x = setInterval(function(){
            document.write(i);
            i--

            if(i === 0){
                clearInterval(x)
                document.write('Fim do loop')
            }
        }, 1000)