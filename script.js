
alert("Bienvenidos a nuestra tienda online, los productos que tenemos disponibles son: Pan comun, Pebetes, Facturas, Bizcochos, Pan de miga")
let producto;
let cantidad;
let precio;
let compra ="no";

do{
    producto = prompt("¿Qué producto desea comprar?");
    cantidad = prompt("¿Qué cantidad?");
    precio = prompt("Precio");
    compra = prompt("¿Desea seguir agregando productos al carrito?");
} while (compra!="no");
