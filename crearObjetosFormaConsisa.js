const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma
    }
}
console.log(crearPersona("Danilo", 37, "Italiano"))

const crearPersona2 = (nombre, edad, idioma) => ({nombre, edad, idioma})
console.log(crearPersona2("Leia", 32, "Tatoino"))

