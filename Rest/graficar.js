function abrirArchivo(directorio){
    var archivoTxt=new XMLHttpRequest();
    archivoTxt.open("GET",directorio,false);
    archivoTxt.send(null);

    return archivoTxt;
}

function armarArreglo(archivoTxt){
    var txt=archivoTxt.responseText;
    var info=txt.split("\n");
    let cantidadDeProductos=info.length;

    let listadoProductos =new Array;
    for(var i=0;i<cantidadDeProductos;i++){
        let arregloInfo=info[i].split(",");
        listadoProductos.push(arregloInfo);

    }

    return listadoProductos;
}

var archivoTxt=abrirArchivo("comida.txt");

var comidas=armarArreglo(archivoTxt)



function dibujar(comida,precio){
    let contenedor=document.querySelector(".productos");
    let productoNuevo=document.createElement("DIV");
    contenedor.appendChild(productoNuevo);
    productoNuevo.classList.add("marco");


    let textoProducto=document.createElement("H2");
    textoProducto.innerHTML=comida
    productoNuevo.appendChild(textoProducto);
    textoProducto.classList.add(`textoProductos`);
    let clase= comida.replace(" ","-");
    while (clase.includes(" ")){
        clase= clase.replace(" ","-");
    }

    console.log(precio)
    textoProducto.classList.add(`${clase}`);
    productoNuevo.classList.add(`${clase}`);

    


}

function dibujarPedido(id){
    let contenedor=document.getElementById("pedido");
    let productoNuevo=document.createElement("P");
    contenedor.appendChild(productoNuevo);
    productoNuevo.classList.add("articuloDelPedido");
    productoNuevo.innerHTML=id


    comidas.forEach(element => {
        if (element[0]==id){
            productoNuevo.innerHTML=`${id} $${element[1]}`
            total+=parseInt(element[1]);
        }

    });

    let textoTotal=document.querySelector(".montoTotal");
    textoTotal.innerHTML=`Total: $ ${total}`


}

function eliminarArticulo(id){
    let contenedor=document.getElementById("pedido");
    let productoNuevo=document.createElement("P");
    contenedor.appendChild(productoNuevo);
    productoNuevo.classList.add("articuloDelPedido");
    productoNuevo.innerHTML=id


    comidas.forEach(element => {
        if (element[0]==id){
            /*productoNuevo.innerHTML=`Eliminado: ${id} $${element[1]}`*/
            productoNuevo.outerHTML=`<p class="articuloDelPedido" style="color:red">Eliminado: ${id} $${element[1]}</p>`
            total-=parseInt(element[1]);
        }

    });

    let textoTotal=document.querySelector(".montoTotal");
    textoTotal.innerHTML=`Total: $ ${total}`

    
    


}





function graficar(comidas){

    for(var i=0;i<comidas.length;i++){
        dibujar(comidas[i][0],comidas[i][1]);

    }


    
}



graficar(comidas);














