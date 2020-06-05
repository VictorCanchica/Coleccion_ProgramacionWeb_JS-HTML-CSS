/**
 * funcion para validar los elementos requeridos
 * @param {object} forma 
 */
function validarForma(forma){
    //validamos el usuario
    var usuario=forma.usuario;
    if (usuario.value===""||usuario.value==="Escribir Usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    //validamos campo de password
    var password=forma.password;
    if (usuario.value===""||password.value.lenght<5){
        alert("Debe proporcionar un password de minimo 5 caracteres");
        password.focus();
        password.select();
        return false;
    }
    //validamos tecnologias de interes
    var tecnologia=forma.tecnologia;
    var checkSeleccionado=false;
    //revisamos si se selecciono algun checkbox
    for (i=0; i<tecnologia.length;i++){
        if (tecnologia[i].checked){
            checkSeleccionado=true;
        }
    if (!checkSeleccionado){
        alert("Debe proporcionar una Tecnologia");
    }
    }
    //validamos genero
    var genero=forma.genero;
    var radioSeleccionado=false;
    //revisamos si se selecciono algun radiobutton
    for(i=0;i<genero.length;i++){
        if (genero[i].checked){
            radioSeleccionado=true;
        }
    }
    if (!radioSeleccionado){
        alert("Debe seleccionar el Genero");
        return false;
    }
    //validamos ocupacion
    var ocupacion=forma.ocupacion;
    if(ocupacion.value===""){
        alert("Seleccione una Ocupacion");
        return false;
    }
    //formulario validado
    alert("Formulario Valido, enviando datos...");
    return true;
}
