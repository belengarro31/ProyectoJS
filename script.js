const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");

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
    content.className="card";
    content.innerHTML=
        '<img>${product.img}</img>',
        '<h3>${product.nombre}</h3>',
        '<p class="price">${product.precio}</p>'
;

//Le paso a shopContent, todo el contenido de content.
shopContent.append(content);

let comprar = document.createElement("button");
comprar.innerText="Comprar";
comprar.className="comprar";

content.append(comprar);

comprar.addEventListener("click", () =>{
    carrito.push({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio,
    });
});
});

verCarrito.addEventListener("click", ()=>{
    modalContainer.innerHTML="";
    modalContainer.style.display="flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML=
        '<h1 class="modal-header-title">Carrito</h1>';

    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText="x";
    modalButton.className="modal-header-button";

    modalHeader.addEventListener("click", () =>{
        modalContainer.style.display="none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((product)=>{
        let carritoContent = document.createElement("div");
        carrito.className="modal-content"
        carrito.innerHTML=
            '<h3>${product.nombre}</h3>'
            '<p>${product.precio}</p>';
        
        modalContainer.append(carritoContent)
    });

        const total = carrito.reduce((acc, el)=> acc + el.precio,0);

        const totalBuying = document.createElement("div")
        totalBuying.className= "total-content" 
        totalBuying.innerHTML='Total a pagar: ${total}';
        modalContainer.append(totalBuying);

    
});