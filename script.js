const productos=[
    {nombre:"Pan", precio: 240},
    {nombre:"Facturas", precio: 80},
    {nombre:"Pebetes", precio: 50},
    {nombre:"Bizcochos", precio: 200},
    {nombre:"Hamburguesas", precio: 70},
    {nombre:"Pan de miga", precio: 350},
    {nombre:"Prepizzas", precio: 150},
    {nombre:"Pan rallado", precio: 65},
    {nombre:"Grisines", precio: 120},
];

let carrito = []

let seleccion = prompt("Bienvenidos a nuestra tienda online, desea comprar algun producto si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("Desea comprar algun producto, ingrese si o no")
    seleccion=prompt("Ingrese si o no")
}

if (seleccion =="si"){
    alert("A continuación nuestra lista de productos");
    let todoslosProductos = productos.map((producto)=>producto.nombre + " " + "$" + producto.precio);
    alert(todoslosProductos.join(" - "));
}   else if (seleccion =="no"){
    alert("Gracias por su visita");
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito");
    let precio = 0

    if(producto == "Pan" || producto == "Facturas" || producto == "Pebetes" || producto == "Bizcochos" || producto == "Hamburguesas" ||
    producto == "Pan de miga" || producto == "Prepizzas" || producto == "Pan rallado" || producto == "Grisines"){
        switch (producto) {
        case "Pan":
            precio = 240;
            break;
        case "Facturas":
            precio = 80;
            break;
        case "Pebetes":
            precio = 240;
            break;
        case "Bizcochos":
            precio = 200;
            break;
        case "Hamburguesas":
            precio = 70;
            break;
        case "Pan de miga":
            precio = 350;
            break;
        case "Prepizzas":
            precio = 150;
            break;
        case "Pan rallado":
            precio =  65;
            break;
        case "Grisines":
            precio = 120;
            break;
        default:
            seleccion="no";
            break;

            }

                let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"));
                carrito.push({producto, unidades, precio});                       
                console.log(carrito);
        } else {alert("No tenemos ese producto");

    }

    seleccion = prompt("¿Desea seguir agregando productos al carrito?");

    while (seleccion == "no"){
        alert("Gracias por su compra");
        carrito.forEach((carritoFinal)=>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por porducto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }

}




