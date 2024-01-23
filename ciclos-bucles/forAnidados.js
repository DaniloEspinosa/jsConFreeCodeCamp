let miArreglo = [[1,2,3],[4,5,6],[7,8,9]]

for (let i = 0; i < miArreglo.length; i++) {
    console.log("->Nueva iteración")
    let arregloAnidado = miArreglo[i]
    console.log("Arreglo: " + arregloAnidado)
    for (let j = 0; j < arregloAnidado.length; j++) {
        console.log(">>>Ciclo anidado")
        console.log("elemento: ")
        console.log(arregloAnidado[j])
    }
}