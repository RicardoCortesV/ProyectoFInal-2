function Producto(nombre, stock, precio){ 
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
}

const alegria = new Producto('Alegria', 20, 10);
const churros = new Producto('Churros', 10, 15);
const galletas = new Producto('galletas', 9, 15);
const pan = new Producto('pan', 15, 30);
const cereal = new Producto('cereal', 2, 20);
const dulces = new Producto('dulces', 30, 8);

const carrito = [];

function validarStock(stockDelProducto) {
    if (stockDelProducto > 10) {
        return 'NO hay stock';
    } else {
        return 'SÌ hay stock';
    }
}

function agregarAlCarrito(producto, stockDelProducto) { 
    const tenemosStock = validarStock(stockDelProducto);    
    if (tenemosStock === 'SÌ hay stock') {
        console.log('Agregaste ' + ' unidades de ' + producto);
        carrito.push(producto);                      
    } else {
        alert('lo siento, no tenemos stock suficiente de ' + producto);
    }
}

//USO DE DOM


const lista = document.getElementById('lista')
console.log(lista)

const li = document.createElement('li')
li.textContent = 'Tus compras'

lista.appendChild(li)

let boton = document.getElementById("lista"); 
boton.addEventListener("click", respuestaClick);
function respuestaClick(){
    alert("Esto se ha agregado al carrito: " + carrito);
}