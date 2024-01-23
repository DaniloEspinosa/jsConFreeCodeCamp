var campista = "Elon"
var campista = "David"

let campista2 = "Juani"
// let campista2 = "Julio"  En este caso no se puede porque campista2 ya ha sido declarada, solo puede ser reasignada
campista2 = "Julio"  // Esto si se puede hacer

var miVariableGlobal = 4
console.log(miVariableGlobal)

function miFuncion() {
    console.log(miVariableGlobal)

    var miVariableLocal = 8
    console.log(miVariableLocal)
}

console.log(miFuncion())

console.log(miVariableGlobal)
// console.log(miVariableLocal) Esto da error porque miVariableLocal es undefined

for (var i = 0; i < 3; i++) {
    console.log(i)
}
console.log(i)

for (let j = 0; j < 3; j++) {
    console.log(j)
}
// console.log(j)  Esto da error, j no esta definida de manera global, solo existe en el bloque de código del bucle for

var mostrarColor = true
if(mostrarColor) {
    let color = "verde"
    console.log("Mi color favorito es: " + color)
}
// console.log(color) Esto da error, j no esta definida de manera global, solo existe en el bloque de código

if(mostrarColor) {
    var color = "verde"
    console.log("Mi color favorito es: " + color)
}
console.log(color)


// La palabra clave reservada cosnt
const miConstante = 35
console.log(miConstante)

// miConstante = 15   ->  Esto da un error ya que las variables const solo se pueden leer, no reasignar
// Tampoco se pueden crear y luego asignar su valor, se crean e inicializan en el mismo momento

function calcularArearCirculo(radio) {
    const PI = 3.14

    if (radio < 0) {
        return undefined
    }

    return PI * (radio ** 2)
}

console.log(calcularArearCirculo(10))

// Mutar arreglo declarado con const
const MI_ARREGLO = [1,2,3,4]
//  MI_ARREGLO = [4,5,6,7]  -> Esto da error, no se puede reasignar el valor
// Pero si se puede reasignar cada valor individual
console.log(MI_ARREGLO)


MI_ARREGLO[0] = 5
MI_ARREGLO[1] = 6
MI_ARREGLO[2] = 7
MI_ARREGLO[3] = 8

console.log(MI_ARREGLO)