type driving = (componente: string) => void

let openit: driving = (componente: string) => {
    console.log(`${componente} Abrir o carro.`)
}
let turnon: driving = (componente: string) => {
    console.log(`${componente} Ligar o carro.`)
}
let ajust: driving = (componente: string) => {
    console.log(`${componente} Ajustar o retrovisor.`)
}
let goon: driving = (componente: string) => {
    console.log(`${componente} Meter o pé no acelerador e arrochar!`)
}
function placa(callback: driving): void {
    let placa: string = "Placa: F4ZU3L1 ->";
    callback(placa)
}
placa(openit)
placa(turnon)
placa(ajust)
placa(goon)
