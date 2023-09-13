function carregar(){
    var tx = document.getElementById('texto')
    var img = document.getElementById('imagen')
    var hora = new Date()
    var atual = hora.getHours()
    tx.innerHTML = `agora sao ${atual} horas`
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




