let miReceta = {
    descripcion: "postre favorito",
    costo: 15.6,
    ingredientes: {
        masa: {
            harina: "100 gramos",
            sal: "1 cucharadita",
            agua: "1 taza"
        },
        cobertura: {
            azucar: "120 gramos",
            chocolate: "4 cucharadas",
            mantequilla: "200 gramos"
        }
    }
}

let ingrediente = "chocolate"

console.log(miReceta.descripcion)
console.log(miReceta.costo)
console.log(miReceta.ingredientes.masa.sal)
console.log(miReceta.ingredientes.cobertura.chocolate)
console.log(miReceta.ingredientes["cobertura"].chocolate) // La ventaja de la notación de corchetes es que se puede utilizar variables y hacerlo mas dinámico
console.log(miReceta.ingredientes.cobertura[ingrediente]) // La ventaja de la notación de corchetes es que se puede utilizar variables y hacerlo mas dinámico




