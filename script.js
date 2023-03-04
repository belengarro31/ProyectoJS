const shopContent = document.getElementById("shopContent");

const productos = [
    {
        id: 1,
        nombre: "Pan",
        precio: 240,
        img:"./imagenes/Pan.jpg",
    },
    {
        id:2 ,
        nombre: "Facturas",
        precio: 80,
        img:"/imagenes/Facturas.jpg" ,
    },  
    {
        id: 3,
        nombre: "Pebetes",
        precio: 50,
        img: "/imagenes/Pebetes.jpg" ,
    },  
    {
        id: 4,
        nombre: "Bizcochos",
        precio: 200,
        img: ,
    },  
    {
        id: 5,
        nombre: "Hamburguesas",
        precio: 70,
        img: "/imagenes/Pan de hamburguesa.jfif",
    },  
    {
        id: 6,
        nombre: "Pan de miga",
        precio: 350,
        img: "/imagenes/Pandemiga.jpg",
    },  
    {
        id: 7,
        nombre: "Pre pizzas",
        precio: 150,
        img:"/imagenes/Prepizza.png" ,
    },  

    {
        id: 8,
        nombre: "Pan rallado",
        precio: 65,
        img:"/imagenes/Pan_Rallado.jpg" ,
    }, 
    {
        id: 9,
        nombre: "Grisines",
        precio: 120,
        img: "/imagenes/grisines.jpg",
    },
];

let carrito= []

//Recorro el array productos
productos.forEach ((product)=>{
    let content= document.createElement("div");
    content.innerHTML=
        <img>${product.img}</img>,
        <h3>${product.nombre}</h3>,
        <p>${product.precio}</p>
;

//Le paso a shopContent, todo el contenido de content.
shopContent.append(content);

let comprar = document.createElement("button");
comprar.innerText="Comprar";

content.append(comprar);
});