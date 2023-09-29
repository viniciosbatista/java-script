let b1 = document.getElementById('bt1')
let b2 = document.getElementById('bt2')
let b3 = document.getElementById('bt3')
b1.addEventListener('click',clicou1)
b2.addEventListener('click',clicou2)
b3.addEventListener('click',clicou3)
function clicou1(){
    alert(`voce apertou o 1° Botão`)
    b1.style.backgroundColor = 'green'
}
function clicou2(){
    alert('voce apertou o 2° Botão')
    b2.style.backgroundColor = 'yellow'
}
function clicou3(){
    alert('voce apertou o 3° Botão')
    b3.style.backgroundColor = 'red'
}