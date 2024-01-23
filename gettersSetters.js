class Libro {
  constructor(autor) {
    this._autor = autor; //El guion bajo indica que no se deberia modificar este valor (propiedad privada).
  }

  get autor() {
    console.log("getter")
    return this._autor;
  }
  set autor(nuevoAutor) {
    console.log("setter")
    this._autor = nuevoAutor;
  }
}

const libro = new Libro("Anónimo");
console.log(libro.autor);

libro.autor = "El gran autor"
console.log(libro.autor)