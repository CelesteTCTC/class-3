document.getElementById("btn-paises").addEventListener("click" , function(){
    var paises = ['Peru', 'Argentina','Chile','Colombiaa', 'Uruguay'];
    var i = 0;
    while(i<paises.length){
        alert(paises[i]);
        i++;
    }
});