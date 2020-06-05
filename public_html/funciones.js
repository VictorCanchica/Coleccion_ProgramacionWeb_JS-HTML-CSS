/**
 * autor Vikthor
 */
window, onload=iniciaDatos;
/**
 * funcion que se manda a llamar al cargar la pagina html
 */
function iniciaDatos(){
    document.getElementById("link").onclick=validaSalir;
    document.getElementById("linkSearch").onclick=busqueda;
}
/**
 * funcion que valida salir del sitio
 */
function validaSalir(){
    if (confirm("Desea salir del sitio?")){
        alert ("Nos vamos a Google");
        return true;//regresamos verdadero para salir
    }
    else{
        alert("Nos quedamos en este sitio");
        return false;//regresamos falso para quedarnos
    }
}
function busqueda(){
    //por medio de la funcion prompt capturamos la informacion que introduzca el usuario
    var respuesta = prompt("Escribe la cadena a buscar:", "");
    //si hubo respuesta la concatenamos a la cadena a buscar al link de google
    if(respuesta){
        alert ("tu respuesta fue :"+ respuesta);
        //el operador this nos sirve para referenciar al elemento que provoco el evento
        //en este caso el elemento con el identificador linksearch
        //y concatenamos la respuesta como un parametro
    var nuevoLink=this + "search?q="+respuesta;
    alert("nuevo link:"+nuevoLink);
    window.location=nuevoLink;
    return false;
    }
    else{
        ("No proporcionaste ninguna cadena a buscar");
        return false;
    }
}
