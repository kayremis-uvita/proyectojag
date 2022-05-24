function ver(n)
{
 document.getElementById("subseccion"+n).style.display="block"
}

function ocultar(n)
{
    document.getElementById("subseccion"+n).style.display="none"
}
function vermenu(){
    document.getElementById("menulateral").style.display="inline-block"
}
function ocultarmenu(){
    document.getElementById("menulateral").style.display="none"
}
function funcion360480()
{
    if(x.matches)
    {
        console.log("360-480");
        //alert("tamaño entre 360 y 480");
        document.body.style.backgroundColor="black"
        document.getElementById("titulo").style.fontSize="60%";
        document.getElementById("titulo1").style.fontSize="57%";
        document.getElementById("titulo2").style.fontSize="57%";

        document.getElementById("seccion6").style.marginRight="12%";
        document.getElementById("seccion5").style.marginRight="12%";
    }
    
}
   
    function funcion481900()
    {
        if (y.matches)
    {
        console.log("481-900");
        //alert("tamaño entre 360 y 480");
        document.body.style.backgroundColor="black"
        document.getElementById("titulo").style.fontSize="100%";
        document.getElementById("titulo1").style.fontSize="100%";
        document.getElementById("titulo2").style.fontSize="100%";

        document.getElementById("seccion6").style.marginRight="5%";
        document.getElementById("seccion5").style.marginRight="5%";
    }
    }
var x = window.matchMedia("(min-width: 360px) and (max-width: 480px)");
var y = window.matchMedia("(min-width: 481px) and (max-width: 900px)");
funcion360480(x);
funcion481900(y);
x.addListener(funcion360480);
y.addListener(funcion481900);