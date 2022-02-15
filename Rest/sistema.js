let pedidos=new Array;
let total=0;
let totalTurno=0;
let totalEfectivo=0;
let totalMP=0;


let arregloProductos= new Array;


function clickBotones(){
    let claseMarco= document.querySelectorAll(".marco")
// Recorremos cada uno de nuestros elementos
    claseMarco.forEach(function(elemento) { 
        var id = elemento.firstChild.textContent; // Obtenemos el texto dentro del div para identificarlo
          elemento.addEventListener('click', function() {   // Agregamos un listener a cada elemento
                  console.log('Elemento ' + id + ' clickeado');
                  pedidos.push(id)
                  dibujarPedido(id)});
          /*BORRAR*/
        elemento.addEventListener('contextmenu', function(ev) {
          ev.preventDefault();
          console.log('Elemento ' + id + ' eliminado');
          var index = pedidos.indexOf(id);
          if (index > -1) {
            pedidos.splice(index, 1);
         }

          eliminarArticulo(id);});
}
        
);
}




clickBotones();

