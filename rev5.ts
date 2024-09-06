function plus(num1: number, num2: number): number {
    return num1 + num2;
}

function minus(num1: number, num2: number): number {
    return num1 - num2;
}

function times(num1: number, num2: number): number {
    return num1 * num2;
}

function by(num1: number, num2: number): number {
    return num1 / num2;
}

let resul:number
//escolha o primeiro número
let num1:number=1
//escolha o segundo número
let num2:number=2
//escolha a operação que você quer fazer
//1 - Adição
//2 - Subtração
//3 - Multiplicação
//4 - Divisão
let operacao:number=1

//Eu usei if else pq eu n consegui fazer o switch case funcionar. Fiquei com preguiça, admito
if(operacao=1){

    resul = plus(num1,num2)
    console.log(resul)
}
else if(operacao=2){
    resul = minus(num1,num2)
    console.log(resul)
}
else if(operacao=3){
    resul = times(num1,num2)
    console.log(resul)
}
else if(operacao=4){

    resul = by(num1,num2)
    console.log(resul)
}
else{
    console.log("Não existe outra operação neste programa. Get out.")
}