let botao = document.getElementById('bt')
botao.addEventListener('click',clicou)

function clicou(){
    let nome = prompt('qual e seu nome ?')
    let idade = prompt(`${nome} voce tem quantos anos ?`)
    alert(`acabei de conhecer ${nome} com ${idade} anos`)
}