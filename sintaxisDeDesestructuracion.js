const usuario = {
  nombre: "Gino Smith",
  edad: 34,
};

//const nombre = usuario.nombre
//const edad = usuario.edad

const { nombre, edad } = usuario;

let coordenadas = {
  x: 4,
  y: 6,
  z: 12,
};


//let x = coordenadas.x
//let y= coordenadas.y
//let z = coordenadas.z


const { x, y, z } = coordenadas;
console.log(x);
console.log(y);
console.log(z);

const usuario2 = {
  johnDoe: {
    edad: 27,
    correo: "john@email.com",
  },
};

const {
  johnDoe: { edad: edadUsuario2, correo },
} = usuario2;

console.log(edadUsuario2);
console.log(correo);

const PRONOSTICO_LOCAL = {
  ayer: {
    minima: 61,
    maxima: 75,
  },
  hoy: {
    minima: 64,
    maxima: 77,
  },
  mañana: {
    minima: 68,
    maxima: 80,
  },
};

const minimoHoy = PRONOSTICO_LOCAL.hoy.minima;
console.log(minimoHoy);

const {
  hoy: { minima: minimaHoy2, maxima: maximaHoy2 },
} = PRONOSTICO_LOCAL;
console.log(minimaHoy2);
console.log(maximaHoy2);

//Arreglos
let a
let b
let c
[a, b,,,c] = [1, 2, 3, 4, 5]
console.log(a)
console.log(b)
console.log(c)

let e = 8;
let f = 10;
[f, e] = [e, f];
console.log(e);
console.log(f);

//Operador rest
let h;
let j;

[h , j, ...arr] = [1,2,3,4,5,6,7]
console.log(h)
console.log(j)
console.log(arr)

const arregloInicial = [1,2,3,4,5,6,7,8]

function removerPrimerosTres(arreglo) {
    const [ , , , ...nuevoArreglo] = arreglo
    return nuevoArreglo
}

console.log(removerPrimerosTres(arregloInicial))

// Pasar un objeto como argumento
let nuevoPerfil = {
    nombre: "Jane Doe",
    edad: 24,
    nacionalidad: "Española",
    ubicacion: "España"
}

const mostrarPerfil = (informacionPerfil) => {
    const {nombre, edad, nacionalidad, ubicacion} = informacionPerfil
    console.log(nombre)
    console.log(edad)
    console.log(nacionalidad)
    console.log(ubicacion)
}
mostrarPerfil(nuevoPerfil)

const mostrarPerfil2 = ({nombre, edad, nacionalidad, ubicacion}) => {
    console.log(nombre)
    console.log(edad)
    console.log(nacionalidad)
    console.log(ubicacion)
}
mostrarPerfil2(nuevoPerfil)

const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
}

const puntoMedio = ({max, min}) => (max + min) / 2.0

console.log(puntoMedio(estadisticas))