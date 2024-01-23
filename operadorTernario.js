function retornarMinimo(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

// La misma función resuelta con el operador ternario
function retornarMinimo2(x, y) {
  return x < y ? x : y;
}
console.log(retornarMinimo(8, 2));
console.log(retornarMinimo2(8, 2));
console.log(retornarMinimo(8, 42));
console.log(retornarMinimo2(8, 42));

// Otra manera que se puede utilizar el operador ternario
let a = 5;
let b = 9;
console.log(a > b ? a + 2 : b * 3);

// Múltiples operadores ternarios o condicionales
function compararNumeros(a, b) {
  if (a == b) {
    return "a y b son iguales";
  } else if (a > b) {
    return "a es mayor que b";
  } else {
    return "b es mayor que a";
  }
}

function compararNumerosTernario(a, b) {
  return a == b
    ? "a y b son iguales"
    : a > b
    ? "a es mayor que b"
    : "b es mayor que a";
}

console.log(compararNumeros(11, 27))
console.log(compararNumerosTernario(11,27))
console.log(compararNumeros(11, 11))
console.log(compararNumerosTernario(11,11))
console.log(compararNumeros(51, 27))
console.log(compararNumerosTernario(51,27))
