function sumar(){
    //envolvemos todo el codigo en un try and catch
    try {
        //pedimos un valor a
        var a=prompt("valor a","");
       
        //validamos parametro a
        if (!a ||isNaN(a)){
            throw new Error("valor invalido de a:" +a);
        }
        //pedimos el valor del operando b
         var b=prompt("valor b","");
         if (!a ||isNaN(b)){
            throw new Error("valor invalido de b:" +b);
    }
    //si no hay problema hacemos la suma
    //parseint convierte a entero
    var c=parseInt (a)+parseInt (b);
    alert ("la suma es:"+c);
    }catch (e){
        alert ("el error es:"+e.message);
    }
    
    
    
    
}
