function generarFraccionAletatoria() {
    return Math.random() // Valor aleatorio entre cero y uno [0,1) el uno no esta incluido
}

console.log(generarFraccionAletatoria())
console.log(generarFraccionAletatoria())
console.log(generarFraccionAletatoria())
console.log(generarFraccionAletatoria())
console.log(generarFraccionAletatoria())
console.log(generarFraccionAletatoria())

function numeroAleatorioEntero(limiteSuperior) {
    return Math.floor(Math.random() * (limiteSuperior + 1))
}

for (let i = 0; i < 15; i++) {
    console.log(numeroAleatorioEntero(8))
}



function numeroAleatorioRango(min, max) {
    return Math.floor(Math.random()* (max -min +1)) + min
}

for (let i = 0; i < 15; i++) {
    console.log(numeroAleatorioRango(0,4))
}
