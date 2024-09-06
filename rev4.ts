let num1: number = 0
let num2: number = 1
let result: number

console.log(num1)
console.log(num2)

for(let i=1;i<10;i++){
    result = num1 + num2
    console.log(result)

    num2 = num1
    num1 = result
}
//O enunciado tá errado, a sequência de fibonacci com 10 caracteres começa de 0 1 1 2 3 5 8 13 21 34, n de 1 1 2 3 5 8 13 21 34 55
//Tmj <3