let food=document.getElementById("food");
let bebida=document.getElementById("bebida");
let alcohol=document.getElementById("alcohol");
let happyHour=document.getElementById("happyHour");
let otros=document.getElementById("otros");

let borrarMesa=document.querySelector(".borrarMesa");
let efectivo=document.querySelector(".pagaEfectivo");
let mp=document.querySelector(".pagaMP");

let estadisticas=document.querySelector(".estadisticas");

food.addEventListener("click",()=>{
    let contenedor=document.querySelector(".productos");
    let elementos= contenedor.childNodes;
    for (var i=elementos.length -1;i>0;i--){
    contenedor.removeChild(elementos[i]);}

    var archivoTxt=abrirArchivo("comida.txt");
    comidas=armarArreglo(archivoTxt)
    graficar(comidas);

    food.style.color="rgb(173, 6, 6)";
    bebida.style.color="black";
    alcohol.style.color="black";
    happyHour.style.color="black";
    otros.style.color="black";

    clickBotones();

    contenedor.style.backgroundColor="white";
    let contenedorGrande=document.getElementById("listado");
    contenedorGrande.style.backgroundColor="white";

},false);

bebida.addEventListener("click",()=>{
    let contenedor=document.querySelector(".productos");
    let elementos= contenedor.childNodes;
    for (var i=elementos.length -1;i>0;i--){
    contenedor.removeChild(elementos[i]);}

    var archivoTxt=abrirArchivo("bebida.txt");
    comidas=armarArreglo(archivoTxt)
    graficar(comidas);

    food.style.color="black";
    bebida.style.color="rgb(173, 6, 6)";
    alcohol.style.color="black";
    happyHour.style.color="black";
    otros.style.color="black";
    clickBotones();
    contenedor.style.backgroundColor="white";
    let contenedorGrande=document.getElementById("listado");
    contenedorGrande.style.backgroundColor="white";
},false);

alcohol.addEventListener("click",()=>{
    let contenedor=document.querySelector(".productos");
    let elementos= contenedor.childNodes;
    for (var i=elementos.length -1;i>0;i--){
    contenedor.removeChild(elementos[i]);}

    var archivoTxt=abrirArchivo("alcohol.txt");
    comidas=armarArreglo(archivoTxt)
    graficar(comidas);

    food.style.color="black";
    bebida.style.color="black";
    alcohol.style.color="rgb(173, 6, 6)";
    happyHour.style.color="black";
    otros.style.color="black";

    clickBotones();
    contenedor.style.backgroundColor="white";
    let contenedorGrande=document.getElementById("listado");
    contenedorGrande.style.backgroundColor="white";
},false);

happyHour.addEventListener("click",()=>{
    let contenedor=document.querySelector(".productos");
    let elementos= contenedor.childNodes;
    for (var i=elementos.length -1;i>0;i--){
    contenedor.removeChild(elementos[i]);}

    var archivoTxt=abrirArchivo("happyHour.txt");
    comidas=armarArreglo(archivoTxt)
    graficar(comidas);

    food.style.color="black";
    bebida.style.color="black";
    alcohol.style.color="black";
    happyHour.style.color="rgb(173, 6, 6)";
    otros.style.color="black";
    clickBotones();
    contenedor.style.backgroundColor="white";
    let contenedorGrande=document.getElementById("listado");
    contenedorGrande.style.backgroundColor="white";

},false);

otros.addEventListener("click",()=>{
    let contenedor=document.querySelector(".productos");
    let elementos= contenedor.childNodes;
    for (var i=elementos.length -1;i>0;i--){
    contenedor.removeChild(elementos[i]);}

    var archivoTxt=abrirArchivo("otros.txt");
    comidas=armarArreglo(archivoTxt)
    graficar(comidas);

    food.style.color="black";
    bebida.style.color="black";
    alcohol.style.color="black";
    happyHour.style.color="black";
    otros.style.color="rgb(173, 6, 6)";
    clickBotones();
    contenedor.style.backgroundColor="white";
    let contenedorGrande=document.getElementById("listado");
    contenedorGrande.style.backgroundColor="white";

},false);

borrarMesa.addEventListener("click",()=>{
    total=0;

    let contenedor=document.getElementById("pedido");
    let elementos= contenedor.childNodes;
    for (var i=elementos.length -1;i>0;i--){
    contenedor.removeChild(elementos[i]);} 

    let textoTotal=document.querySelector(".montoTotal");
    textoTotal.innerHTML=`Total: $ ${total}`
}
,false);

efectivo.addEventListener("click",()=>{
    totalEfectivo+=parseInt(total);
    total=0;

    let contenedor=document.getElementById("pedido");
    let elementos= contenedor.childNodes;
    for (var i=elementos.length -1;i>0;i--){
    contenedor.removeChild(elementos[i]);} 

    let textoTotal=document.querySelector(".montoTotal");
    textoTotal.innerHTML=`Total: $ ${total}`
}
,false)

mp.addEventListener("click",()=>{
    totalMP+=parseInt(total);
    total=0;

    let contenedor=document.getElementById("pedido");
    let elementos= contenedor.childNodes;
    for (var i=elementos.length -1;i>0;i--){
    contenedor.removeChild(elementos[i]);} 

    let textoTotal=document.querySelector(".montoTotal");
    textoTotal.innerHTML=`Total: $ ${total}`
}
,false)




estadisticas.addEventListener("click",()=>{
    totalTurno= totalEfectivo + totalMP
    let contenedor=document.querySelector(".productos");
    let elementos= contenedor.childNodes;
    for (var i=elementos.length -1;i>0;i--){
    contenedor.removeChild(elementos[i]);}

    let textoEstadisticas= document.createElement("P");
    contenedor.appendChild(textoEstadisticas);
    textoEstadisticas.innerHTML=`Total: $${totalTurno} <br> Total Efectivo: $${totalEfectivo} <br> total MP: $${totalMP}`;
    textoEstadisticas.classList.add("textosDeEstadisticas")

    contenedor.style.backgroundColor="orange";
    textoEstadisticas.style.color="white";

    let contenedorGrande=document.getElementById("listado");
    contenedorGrande.style.backgroundColor="orange";




}
,false)


