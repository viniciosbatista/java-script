let ano = new Date()
let anoatual = ano.getFullYear()
let nascimento = document.getElementById('ano')
let resultado = document.getElementById('res')
let botao = document.getElementById('bt')
botao.addEventListener('click',clicou)
let sex = document.getElementsByName('sexo')
let foto = document.getElementById('img')
    function clicou(){
            if (nascimento.value.length == 0 || Number(nascimento.value) > anoatual){
                alert('[ERRO] verifique os DADOS')
            }else{
                let idade = anoatual - Number(nascimento.value)
                let genero = ''
                // let img = document.createElement('img')
                // img.setAttribute('id','foto')

                if (sex[0].checked){
                    genero = 'homem'
                    if (idade >= 0 || idade <= 10){
                        // img.setAttribute('src','bebemenino.jpg')
                        img.src = 'des15/imagens/bebemenino.jpg'
                        
                        
                    }else if (idade <= 18){
        

                    }else if (idade <= 45){
                        

                    }else{
    
                    }
                

                }else if(sex[1].checked){
                    genero = 'mulher'
                    if (idade >= 0 || idade <= 10){
                

                    }else if (idade <= 18){
        

                    }else if (idade <= 45){
                        

                    }else{
            
                    }


                }
                // resultado.style.textAlign = 'center'
                resultado.innerHTML = `detectamos ${genero} com ${idade} anos`
                // resultado.appendChild(img)


            }
            
        
    }