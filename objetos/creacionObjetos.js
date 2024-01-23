const miPerro = {
  nombre: "Gino",
  edad: 5,
  peso: 6,
  raza: "Beagle",
};

// Acceder con notación de punto
console.log(miPerro.nombre);
console.log(miPerro.edad);

const miCuaderno = {
  color: "verde",
  categoria: 3,
  "numero de paginas": 200,
  "numero de hojas": 100,
};

// Acceder con notación de corchetes
console.log(miCuaderno["numero de hojas"]);

let resultados = {
  1: "nora256",
  2: "gino577",
  3: "estef543",
  4: "kiara566",
};

// Acceder a traves de una variable
let posicion = 3;
console.log(resultados[posicion]);

let mochila = {
  color: "azul",
  tamaño: "mediano",
  contenido: ["botella de agua", "cuaderno"],
};
console.log(mochila.color)

mochila.color = "verde"
console.log(mochila.color)

// agregar elemento con metodo de array
mochila.contenido.push("lápiz")
console.log(mochila.contenido)

const curso = {
    titulo: "Aprende javascript desde cero",
    idioma: "Español",
    duracion: 30
}
console.log(curso.vistas)  // En este momento esta propiedad no existe "vistas"
// Agregar una nueva propiedad al objeto
curso.vistas = 37000
console.log(curso.vistas)

console.log(curso.duracion)
// Como borrar una propiedad
delete curso.duracion
console.log(curso.duracion)  //una vez borrada nos dara como resultado undefined