let usuario = prompt("ingrese su usuario");

alert("Hola!! " + usuario + " Bienvenido/a a Doctor Celular")


const productos = [
    {nombre: "G60s" , precio: 60000 },
    {nombre: "A12" , precio: 45000 },
    {nombre: "A22" , precio: 68000 },
]
let carrito = []

let seleccion = prompt(`Desea comprar algun producto?
si (Para comprar)
no (Para salir)
coloque si o no para continuar`)

compararSiNo()

function compararSiNo() {
    
    while (seleccion != "si" && seleccion != "no") {
        alert("Por favor ingrese si o no")
        seleccion = prompt(`Desea comprar algun producto?
    si (Para comprar)
    no (Para salir)
    coloque si o no para continuar`)
    }
}  

siNoUsuario()

function siNoUsuario() {
    if (seleccion == "si") {
        alert("Perfecto, abajo puede ver nuestros productos")
    } else if (seleccion == "no"){
        alert("Gracias por ingresar a nuestra pagina")
        
    }
}
let producto;

function compararProdIngresado() {
    switch (producto) {
        case "A12":
            precio = 45000
        break;
        case "A22":
            precio = 68000
        break;
        case "G60s":
            precio = 60000
        break;
        default:
            break;
    }
}
function mostrarOferta() {
    const ofertas = productos.filter((el) => el.precio < 50000);
    for(const oferta of ofertas){
    alert("La oferta de hoy es: " + oferta.nombre + " a un valor de $" + oferta.precio);
    }
} 

while (seleccion != "no") {
    producto = prompt("Ingrese el nombre del celular que desea comprar para añadir al carrito, A12 , A22, G60s o ingrese 1 para ver la oferta de hoy")
    precio = 0
    if (producto == "A12" || producto == "A22" || producto == "G60s" ) {
        compararProdIngresado(producto)

        let unidades = parseInt(prompt("¿Cuantas unidades quiere comprar?"))

        carrito.push({producto, unidades , precio})
        console.log(carrito)

    }
    else if (producto === "1") {
        mostrarOferta(producto)
    }
    else{
        alert("No ingreso un producto valido")
    }

    seleccion = prompt(`Desea seguir comprando?
    si (Para seguir comprando)
    no (Para salir y finalizar compra)
    coloque si o no para continuar`)


    while(seleccion == "no"){
        alert("Gracias por su compra! Hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por producto: $${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break;
    }

}
const total = carrito.reduce((acc , el) => acc + el.precio * el.unidades, 0)

    alert(`El total a pagar por su compra: ${total}`)
    
    alert("Muchas Gracias por visitarnos!")