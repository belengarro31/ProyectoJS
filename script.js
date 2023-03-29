const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async()=>{
    const response = await fetch("data.json");
    const data = await response.json();

    data.forEach ((product)=>{
        let content= document.createElement("div");
        content.className="card";
        content.innerHTML=
            `<img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p class="price">${product.precio}</p>`
    ;
    
    //Le paso a shopContent, todo el contenido de content.
    shopContent.append(content);
    
    let comprar = document.createElement("button");
    comprar.innerText="Comprar";
    comprar.className="comprar";
    
    content.append(comprar);
    
    comprar.addEventListener("click", () => {
    
        const repeat = carrito.some((repeatProduct)=>repeatProduct.id===product.id);
    
        if(repeat){
            carrito.map((prod)=>{
                if(prod.id===product.id){
                    prod.cantidad++;
                }
        });
    }else{
    
    carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
    
        });
    }
        console.log(carrito);
        saveLocal();
    });
    });
    
    
        const pintarCarrito=()=>{
    
        modalContainer.innerHTML="";
        modalContainer.style.display="flex";
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header";
        modalHeader.innerHTML=
            `<h1 class="modal-header-title">Carrito</h1>`
    
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
            carritoContent.className="modal-content"
            carritoContent.innerHTML=
                `<h3>${product.nombre}</h3>
                <p>${product.precio}</p>
                <p>Cantidad:${product.cantidad}</p>`
            
            modalContainer.append(carritoContent)
    
            //boton para poder eliminar productos del carrito.
            let eliminar = document.createElement("span");
            eliminar.innerText="❌";
            eliminar.className="delete-product";
            carritoContent.append(eliminar);
    
            eliminar.addEventListener("click", eliminarProducto);
           
        });
    
    
            const total = carrito.reduce((acc, el)=> acc + el.precio,0);
    
            const totalBuying = document.createElement("div")
            totalBuying.className= "total-content" 
            totalBuying.innerHTML=`Total a pagar: ${total}`
            modalContainer.append(totalBuying);
    
    }
  
    verCarrito.addEventListener("click", pintarCarrito);
    
    //funcion para eliminar productos del carrito.
    const eliminarProducto =()=> {
        const foundId= carrito.find((Element)=> Element.id);
        swal("E producto ha sido eliminado del carrito", "","error");
        carrito = carrito.filter((carritoId)=>{
            return carritoId !== foundId;
            
        });
    
        pintarCarrito();
    }

}

getProducts();

//set item
const saveLocal = ()=>{
    localStorage.setItem("carrito", JSON.stringify (carrito));
}

//get item
JSON.parse(localStorage.getItem("carrito"));



var contenido = document.querySelector('#contenido')
function traer (){
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data =>{
        console.log(data.results['0'])
        contenido.innerHTML=`
        <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
        <p>Nombre: ${data.results['0'].name.last}</p>`
    })
}


