class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta
    }
}

let zeus = new TransbordadorEspacial("Júpiter")
console.log(zeus.planeta)
let apolo = new TransbordadorEspacial("Marte")
console.log(apolo.planeta)


class Mascota {
    constructor(nombre, edad) {
        this.nombre = nombre,
        this.edad = edad
    }
}

let miMascota = new Mascota("Firu", 12)
console.log(miMascota.edad)