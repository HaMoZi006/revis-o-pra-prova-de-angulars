let numeros:number[] = [3, 4, 1, 6, 5]

numeros.sort((a, b) => a - b)
let saigo = numeros.shift()

console.log(numeros)
console.log(saigo)