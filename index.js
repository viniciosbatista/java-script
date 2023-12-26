// ALGORITIMO E LOGICA DE PROGRAMAÇAO JS 

// DESAFIO 1 
// {
//     console.log('1')
//     console.log('3')
//     console.log('5')
//     console.log('7')
//     console.log('9')
// }
// {
//     console.log('2')
//     console.log('4')
//     console.log('6')
//     console.log('8')
//     console.log('10')
// }

// DESAFIO 2
// const pi = 3.14; valor de pi
// let raio = 10;
// let area = Math.PI * raio * raio;
// console.log(`a area tem ${area.toFixed(2)} m2`)

// DESAFIO 3
// let a = 7;
// let b = 94;
// console.log(a,b)
// // depois da troca
// let temp = a ;
// a = b
// b = temp
// console.log(a,b) 

// DESAFIO 4
// let f = 32;
// let g = (f -32) * 5 / 9;

// console.log(`${g.toFixed(2)} °c`)

// DESAFIO 5
// let a = 10;
// let b = 11;
// encontre 5 expressões que seja falsa
// console.log(a > b);
// console.log(a == b);
// console.log(a === b);
// console.log(a >= b );
// console.log(a + a === b );

// encontre 5 expressões que seja verdadeiras
// console.log(a < b);
// console.log(a <= b);
// console.log(a != b);
// console.log(a !== b );
// console.log(a + a > b);

// DESAFIO 6
// let texto = 'Lista de aprovados';
// texto += '\n===================';
// texto += '\n 1. Ana Silva'
// texto += '\n 2. Pedro Albuquerque'
// texto += '\n 3. Guilerme Pereira'
// texto += '\n 4. Rebeca França'
// console.log(texto);

// DESAFIO 7
// let verdadeira1 = 2 + 5 >= 7 && 8 > 2; 
// let verdadeira2 = 3 + 7 <= 11 || 8 < 7;
// console.log(verdadeira1);
// console.log(verdadeira2);

// let falso1 = 1 - 1 == 2 || 10 > 11;
// let falso2 = 10 - 9 === 0 && 10 > 90;
// console.log(falso1)
// console.log(falso2)

// DESAFIO 8
// const a = 8;
// const b = 4;
// let ope = "+";  + - * / 
// const resultado = ope === "+" ? a + b : ope === "-" ? a - b : ope === "*" ? a * b : a / b;
// console.log(resultado) 

// DESAFIO 9
// const nota = 9
// if (nota >= 9){
//     console.log('quadro de honras')
//     console.log('parabens')
// }
// console.log('fim')

// DESAFIO 10
// const nota = 10
// if (nota >= 9 && nota <= 10){
//     console.log('A')
// };
// if(nota >= 7 && nota <= 8.9){
//     console.log('B')
// }
// if (nota >= 5 && nota <= 6.9){
//     console.log('C')
// }
// if (nota >= 4.5 && nota <= 4.9){
//     console.log('D')
// }
// if (nota >= 0 && nota < 4.5){
//     console.log('F')
// }

// DESAFIO 11
const a = 10;
const b = 28;
let operaçao = '%'; // + - / % 
let resultado;

if (operaçao == '*'){
    resultado = a * b

}else if (operaçao == '+'){
    resultado = a + b

}else if (operaçao == '-'){
    resultado = a - b

}else if (operaçao == '/'){
    resultado = a / b

}else if (operaçao == '%'){
    resultado = a % b

} else {
    console.log('operaçao errada [ERRO]')
}
console.log(resultado);
