const clickboton = document.querySelectorAll('.boton')
const tbody = document.querySelector('.tbody')
let carrito = []


clickboton.forEach(btn => {
    btn.addEventListener('click', guardarItemCarrito)
});

function guardarItemCarrito(e){
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.img').src;

    const nuevoItem = {
        titulo: itemTitle,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 1
    }

    guardarEnCarrito(nuevoItem)
}
    

function guardarEnCarrito(nuevoItem) {


añadirAlCarrito ()


for (let i = 0; i < carrito.length; i++) {

const inputElemento = tbody.getElementsByClassName('input__elemento')


    if (carrito[i].titulo.trim() === nuevoItem.titulo.trim()) {
        carrito[i].cantidad ++;
        const inputValue = inputElemento[i]
        inputValue.value++
        CarritoTotal()
        return null;
    }
    
}


    carrito.push(nuevoItem)
    renderCarrito()

}

function renderCarrito() {
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito' )
        const contenido = `
        
        <th scope="row">1</th>
                    <td class="tabla__productos">
                        <img src= ${item.img} alt="">
                        <h6 class="title">${item.titulo}</h6>
                    </td>
                    <td class="tabla__precio">
                        <p>${item.precio}</p>
                    </td>
                    <td class="tabla__cantidad">
                        <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                        <button class="delete btn btn-danger">x</button>
                    </td>
        
        `
        tr.innerHTML = contenido;
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
        tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
    })
    CarritoTotal()
}


function CarritoTotal() {
    let total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", '' ))
        total = total + precio*item.cantidad
    })

    itemCartTotal.innerHTML = `Total: $${total}`
    guardarLocalStorage()
}


function removeItemCarrito(e){
    eliminarProducto ()

    const botonDelete = e.target
    const tr = botonDelete.closest(".itemCarrito")
    const title = tr.querySelector('.title').textContent;
    for (let i = 0; i < carrito.length; i++) {
        
        if(carrito[i].titulo.trim() === title.trim()){
            carrito.splice(i, 1)
        }
    }
    tr.remove()
    CarritoTotal()
}


function sumaCantidad(e){
    const sumaInput = e.target
    const tr = sumaInput.closest(".itemCarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item => {
        if (item.titulo.trim() === title) {
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            CarritoTotal()
        }
     })
}

function guardarLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}



window.onload = function (){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage) {
        carrito = storage;
        renderCarrito()
    }
}

const comprar = document.querySelector(".comprar")

comprar.addEventListener("click", ()=>{
    pedirEmail()
})



//Alerts
function añadirAlCarrito (){
    Swal.fire({
        icon: 'success',
        title: 'Producto añadido correctamente al carrito!',
        showConfirmButton: false,
        timer: 1500,
        customClass:{
            popup: 'colorAlert'
        }
      })
}

function eliminarProducto (){
    Swal.fire({
        icon: 'success',
        title: 'Producto eliminado correctamente al carrito!',
        showConfirmButton: false,
        timer: 1500,
      })
}

function pedirEmail(){
    
    (async() =>{ 
    const { value: email } = await Swal.fire({
        title: 'Ingrese Email para enviar codigo de retiro',
        input: 'email',
        inputPlaceholder: 'Ingrese su enmail'
      })
      if (email) {
        retiroProducto()
      }
    }) ()
   
}

function retiroProducto(){
    
    let numeroAlea = parseInt(Math.random()*1000);
      
    Swal.fire({
        icon: 'success',
        title: 'Su Pedido ya esta listo para retirar!!',
        text: `Su numero de pedido es ${numeroAlea}, estamos de lunes a lunes de 9:30hrs a 22:00hrs`,
        showConfirmButton: true,
        timer: 15000
      })
}

