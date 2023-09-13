// var idade = 65
// console.log(`voce tem ${idade} anos`)
// if (idade < 16){
//     console.log('nao vota')
// }else if (idade < 18 || idade > 65){
//     console.log('voto opcional')
// }else{
//     console.log('voto obrigatorio')
// }
var agora = new Date()
var hora = agora.getHours()
console.log(`agora sao ${hora} horas`)
if (hora < 12){
    console.log('Bom dia ')
} else if (hora <= 17){
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}