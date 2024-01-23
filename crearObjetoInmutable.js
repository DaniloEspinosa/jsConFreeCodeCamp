let colores = {
  verde: "#10e04b",
  azul: "#1b50e0",
  negro: "#000000",
  blanco: "#ffffff",
};

Object.freeze(colores);

// Luego de utilizar Object.freeze() no se podra modificar ningun valor del array
colores.amarillo = "#fff200";
colores.blanco = "#fff200";
delete colores.negro

console.log(colores);
