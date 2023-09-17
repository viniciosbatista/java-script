let ano = new Date()
let anoatual = ano.getFullYear()
let nascimeto = document.getElementById('ano')
let botao = document.getElementById('bt')
botao.addEventListener('click',clicou)
let resultado = document.getElementById('res')
    function clicou(){
        if (nascimeto.value.length == 0 || nascimeto.value > anoatual){
            alert('[ERRO] verifique os dados')
        }else{
            let idade = anoatual - Number(nascimeto.value)
            let sex = document.getElementsByName('sexo')
            genero = ''
            let img = document.createElement('img')
            img.setAttribute('id','foto')
                if (sex[0].checked){
                    genero = 'homem'
                    if (idade < 10){
                        // criança
                        img.setAttribute('src','imagens/bebemenino.jpg')
                    }else if (idade < 21){
                        // jovem
                        img.setAttribute('src','imagens/rapaz.jpg')
                    }else if(idade < 45){
                        // homem
                        img.setAttribute('src','imagens/homem.jpg')
                    }else{
                        // idoso
                        img.setAttribute('src','imagens/idoso.jpg')
                    }
                    
                    
                }else if (sex[1].checked){
                    genero = 'mulher'
                    if(idade < 10){
                        // criança
                        img.setAttribute('src','imagens/bebemenina.jpg')
                    }else if(idade < 21){
                        // jovem
                        img.setAttribute('src','imagens/moca.jpg')
                    }else if(idade < 45){
                        // mulher
                        img.setAttribute('src','imagens/mulher.jpg')
                    }else{
                        // idosa
                        img.setAttribute('src','imagens/idosa.jpg')
                    }
                }
                resultado.innerHTML=`detectamos ${genero} com ${idade}`
                resultado.appendChild(img)
        }
       
    }