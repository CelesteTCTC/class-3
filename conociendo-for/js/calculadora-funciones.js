//Crear un función para operar
function OperarNumeros(pSigno){
    //creacion de variables para mis numeros
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    //condiciones
    if(pSigno=="+"){
        return n1 + n2;
    }
    else if(pSigno=="-"){
        return n1 - n2;
    }
    else if(pSigno=="*"){
        return n1 * n2;
    }
    else if(pSigno=="/"){
        return n1 / n2;
    }
    else{
        return "Signo invalido";
    }
}

//Evento del boton sumar
document.getElementById("sumar").addEventListener("click",function(){
   let result = OperarNumeros("+");

   document.getElementById("result").innerHTML = result;
});
//Evento del boton restar
document.getElementById("restar").addEventListener("click",function(){
    let result = OperarNumeros("-");
    document.getElementById("result").innerHTML = result;
});
//Evento del boton multiplicar
document.getElementById("multiplicar").addEventListener("click",function(){
    let result = OperarNumeros("*");
    document.getElementById("result").innerHTML = result;
});
//Evento del boton dividir
document.getElementById("dividir").addEventListener("click",function(){
    let result = OperarNumeros("/");
    document.getElementById("result").innerHTML = result;
});
