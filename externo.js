var velocidade = document.getElementById('vl')
var botao = document.getElementById('bt')
botao.addEventListener('click',clicou)
var resultado = document.getElementById('res')

    function clicou(){
        resultado.innerHTML = `<p>voce estva a ${velocidade.value} Km/h</p>`
            if (velocidade.value > 60){
                resultado.innerHTML+= '<p>FOI <mark>MULTADO</mark></p>'
            }else{
                resultado.innerHTML+='<mark>PARABENS MANTENHA SUA VELOCIDADE</mark>'
            }

    }