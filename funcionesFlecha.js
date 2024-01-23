const fecha = function() {
    return new Date()
}

const fechaFlecha = () => new Date()

console.log(fecha())
console.log(fechaFlecha())


// Ejemplos de funcion flecha con parametros
const sumarTres = (x) => x + 3
console.log(sumarTres(4))

const concatenar = (arr1, arr2) => arr1.concat(arr2)
console.log(concatenar([1,2], [3,4,5]))

const sumar = (a,b) => {
    let num = 6
    return a + b + num
}
console.log(sumar(2,4))

const incrementar = (num, valor = 1) => num + valor  // en este caso si se omite el segundo parametro tomara el valor 1
console.log(incrementar(5))
console.log(incrementar(5,3))