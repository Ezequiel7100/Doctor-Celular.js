

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

function mostrarOferta() {
    const ofertas = productos.filter((el) => el.precio < 50000);
    for(const oferta of ofertas){
    alert("La oferta de hoy es: " + oferta.nombre + " a un valor de $" + oferta.precio);
    }
} 

while (seleccion != "no") {
    producto = prompt(`Ingrese el nombre del celular que desea comprar para añadir al carrito:
     ${productos.map((productos, index) => {
        return `\nn° ${index + 1}: ${productos.nombre} con un precio de $${productos.precio}`
     })}
     \no ingrese of para ver la oferta de hoy`)
    
    if (producto == "A12" || producto == "A22" ||producto == "G60s"  ) {
        
        let precio = prompt("ingrese el precio")
        let unidades = parseInt(prompt("¿Cuantas unidades quiere comprar?"))

        carrito.push({producto, unidades , precio})
        console.log(carrito)

    }
    else if (producto === "of") {
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

let eventoBoton1 = document.getElementById("boton1");
let eventoBoton2 = document.getElementById("boton2");
let eventoBoton3 = document.getElementById("boton3");

eventoBoton1.addEventListener("click", evento )
eventoBoton2.addEventListener("click", evento )
eventoBoton3.addEventListener("click", evento )

function evento(){
alert("Producto Agregado correctamente al carrito")
}

function mensajeEnviar(){
alert("Email ingresado correctamente")
}

const formulario = document.getElementById("from")

const mail = document.getElementById("email")

formulario.addEventListener("submit", validarFomulario) 

function validarFomulario() {
    console.log(mail.value);
}

let btnEnviar = document.getElementById("enviar")
 
btnEnviar.addEventListener("click", mensajeEnviar )