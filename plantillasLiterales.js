/* Plantillas literales o plantillas de cadenas

Caracteristicas:
- Se usa el acento invertido (backtick) ` en lugar de comillas.
- Pueden contener comillas simples y dobles.
- Las líneas se preservan como se escriben en el código.
- Para reemplazar una variable se escribe $´{variable}
- Dentro de ${} tambien puedes escribir expresiones.
*/

let a = 6;
console.log(`El valor de a es ${a}`)

let nombre = "Magui"
let edad = 4
console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`)

let miArreglo = [1,2,3,4]
console.log(`El arreglo es ${miArreglo}`)
console.log(`El arreglo es ${JSON.stringify(miArreglo)}`)

let persona = {
    nombre: "Gino",
    edad: 10
}

const SALUDO = `Hola, mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`
console.log(SALUDO)

