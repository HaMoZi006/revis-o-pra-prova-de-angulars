function fatorial (numero: number): number{
    if(numero === 1 || numero === 0){
        return 1;
    }
    return numero * fatorial(numero - 1);
}
console.log(fatorial(7))
