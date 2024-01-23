let miArray = [];

for (let i = 1; i <= 10; i++) {
  miArray.push(i);
}
console.log(miArray);

// Agregar los numeros impares en un arreglo
let miArreglo = [];
for (let i = 1; i < 20; i += 2) {
  miArreglo.push(i);
}
console.log(miArreglo);

// Ciclo for hacia atras
for (let i = 15; i >= 10; i--) {
  console.log(i);
}

let miArreglo1 = [];
for (let i = 10; i > 0; i -= 2) {
  miArreglo1.push(i);
}
console.log(miArreglo1);

// Iterar sobre un arreglo con un ciclo for
let arreglo = [4,6,8,2]
let total = 0

for (let i = 0; i < arreglo.length; i++) {
    total += arreglo[i]
}
console.log(total)

let lenguajes = ["Javascript", "Phyton", "Java", "C++"]

for (let i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toLocaleUpperCase())
}

function contarNumerosPares(arreglo) {
    let total = 0

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            total++
        }
    }

    return total
}

console.log(contarNumerosPares(miArray))