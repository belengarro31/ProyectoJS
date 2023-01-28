
alert("Bienvenidos a nuestra tienda online, los productos que tenemos disponibles son: Pan comun, Pebetes, Facturas, Bizcochos, Pan de miga")
let producto;
let cantidad;
let precio;
let compra ="no";

do{
    producto = prompt("¿Qué producto desea comprar?");
    console.log(producto);
    cantidad = prompt("¿Qué cantidad?");
    console.log(cantidad);
    precio = prompt("Precio");
    console.log(precio);
    compra = prompt("¿Desea seguir agregando productos al carrito?");
} while (compra!="no");

function totalaPagar(cantidadFinal, precioP){
    let precioFinal = (cantidad * precio);
    console.log(precioFinal);
}  

totalaPagar();
