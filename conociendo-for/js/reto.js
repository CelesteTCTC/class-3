document.getElementById("btn-nombre").addEventListener("click" , function(){
     //creamos el arreglo
    var nombre = ['Celeste', 'Alessandra','Alanis','Shirley'];
    //creamos las variables que serviran como contadores
    var i = 0;
    var t = 0;
    //creamos el bucle
    while(i < nombre.length & t<2){
        //imprimimos un item del arreglo
        alert(nombre[i]);
        i++;
        if(i==nombre.length){
            i=0;
            t++;
        }
    }
});