/* Funcion para mostrar el menu cuando hacen click en el icono. Asigna la clase responsive y desde css se configura para que la ocion se muestre en dispositivos pequeños */
function myFunction() {
    var x = document.getElementById("mynavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } 
}

/* Animacion para achicar el tamaño de la barra de menu al hacer scroll hacia abajo */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "21px 10px";
    document.getElementById("logo").style.fontSize = "30px";
    } else {
    document.getElementById("header").style.padding = "45px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    }
}

