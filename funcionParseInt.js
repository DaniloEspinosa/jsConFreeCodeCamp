// "5" no es lo mismo que 5, ya que uno es un string y el otro es un número entero
// La funcion parseInt() convierte un valor en un número entero si es que puede hacerlo
// si no puede hacerlo devuelve NaN (not a number)
console.log(parseInt("45"))
console.log(parseInt("6.5"))

let a = "5"
let b = "8"

console.log(a+b)  // es este caso se concatenan los valores ya que son strings
console.log(parseInt(a) + parseInt(b))

// Tambien se puede convertir a parseInt con una base
console.log(parseInt("110111", 2))  //Sistema binario, el segundo argumento debe ser el 2
console.log(parseInt(110111, 2))
console.log(parseInt("3E0A", 16))  //Sistema hexadecimal, el segundo argumento debe ser el 16