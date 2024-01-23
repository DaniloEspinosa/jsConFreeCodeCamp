let contactos = [
  {
    nombre: "Nora",
    apellido: "Nav",
    numero: "0543236543",
    gustos: ["Pizza", "Programación"],
  },
  {
    nombre: "Harry",
    apellido: "Potter",
    numero: "0994372684",
    gustos: ["Hogwarts", "Magia"],
  },
  {
    nombre: "Sherlock",
    apellido: "Holmes",
    numero: "0487345643",
    gustos: ["Casos interesantes", "Violin"],
  },
];

function busquedaPerfil(nombre,  propiedad) {
    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre === nombre) {
            return contactos[i][propiedad] || "La propiedad no existe."
        }
    }
    return "El contacto no está en la lista de contactos"
}

console.log(busquedaPerfil("Nora", "gustos"))
console.log(busquedaPerfil("Harry", "apellido"))
console.log(busquedaPerfil("Sherlock", "altura"))
console.log(busquedaPerfil("Dany", "apellido"))


