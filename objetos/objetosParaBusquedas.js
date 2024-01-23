function buscarElementoQuimico(simbolo) {
    let elementoQuimico = ""

    switch (simbolo) {
        case "Al":
            elementoQuimico = "Aluminio"
            break
        case "S":
            elementoQuimico = "Azufre"
            break
        case "Cl":
            elementoQuimico = "Cloro"
            break
        case "He":
            elementoQuimico = "Helio"
            break
        case "B":
            elementoQuimico = "Boro"
            break
        case "Li":
            elementoQuimico = "Litio"
            break
    }

    return elementoQuimico
}


// Se puede realizar una funcion mas resumida utilizando un objeto
function buscarConObjeto(simbolo) {

    var simbolosQuimicos = {
        Al: "Aluminio",
        S: "Azufre",
        Cl: "Cloro",
        He: "Helio",
        B: "Boro",
        Li: "Litio"
    }
    return simbolosQuimicos[simbolo]
}

console.log(buscarElementoQuimico("Al"))
console.log(buscarConObjeto("Al"))