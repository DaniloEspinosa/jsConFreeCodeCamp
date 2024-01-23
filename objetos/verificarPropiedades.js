let miCuaderno = {
    color: "verde",
    categoria: 3,
    precio: 4.56
}

console.log(miCuaderno.hasOwnProperty("color"))
console.log(miCuaderno.hasOwnProperty("origen"))

function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "Propiedad: " + obj[propiedad]
    } else {
        return "El objeto no tiene esta propiedad"
    }
}

console.log(verificarPropiedad(miCuaderno, "color"))
console.log(verificarPropiedad(miCuaderno, "origen"))