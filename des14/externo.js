let tx = document.getElementById('texto')
let img = document.getElementById('imagen')
let hora = new Date()
let atual = hora.getHours()
let minutos = new Date()
let atualm = minutos.getMinutes()

function carregar(){
    
    tx.innerHTML = `agora sao ${atual}:${atualm}`
    if (atual >=0 && atual < 12){
        img.src = 'imagens/dia.jpg'
        document.body.style.backgroundColor = '#FFC737'
    }else if (atual >=12 && atual <= 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#BC6B4D'
    }else{
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#19456E'
    }
}




