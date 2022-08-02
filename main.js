

function Producto(nombre, stock, precio){  //USO CONSTRUCTOR DE OBJETOS. 
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
}

const item1 = new Producto('Alegria', 20, 10); //Asignado de simulado de parámetros
const item2 = new Producto('Churros', 10, 15);
const item3 = new Producto('galletas', 9, 15);
const item4 = new Producto('pan', 15, 30);
const item5 = new Producto('cereal', 2, 20);
const item6 = new Producto('dulces', 30, 8);



const carrito = [];

function validarStock(stockDelProducto) {//Indica la cantidad màxima de unidades a pedir
    if (stockDelProducto > 10) {
        return 'NO hay stock';
    } else {
        return 'SÌ hay stock';
    }
}

function agregarAlCarrito(producto, stockDelProducto) { //USO DE PUSH PARA AGREGAR AL ARRAY 
    const tenemosStock = validarStock(stockDelProducto);    
    if (tenemosStock === 'SÌ hay stock') {
        console.log('Agregaste ' + ' unidades de ' + producto);     //Si el pedido es -10 unidades imprime el mensaje
        carrito.push(producto);                      //Si el pedido es -10 unidades se agrega al array carrito  
    } else {
        alert('lo siento, no tenemos stock suficiente de ' + producto);
    }

}


//USO DE DOM
const lista = document.getElementById('lista')//Accede al elemento
console.log(lista)

const li = document.createElement('li')//Mètodo p/crear el texto
li.textContent = 'Tus compras'//Crea un texto, esq sup der de la página

lista.appendChild(li)

let boton = document.getElementById("lista"); //USO DE EVENTO
boton.addEventListener("click", respuestaClick);//Muestra lo que se ha pedido por medio de una alerta
function respuestaClick(){
    alert("Esto se ha agregado al carrito: " + carrito);
}







