function miFUncion(...args) {
    console.log(args)
    console.log(args.length)
}

miFUncion(1)
miFUncion(1,2,"hola")

const sumar = (...args) => {
    return args.reduce((acc, item) => acc + item, 0)
}

console.log(sumar(1,5,6))