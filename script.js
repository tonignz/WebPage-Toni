function showContent(contentId,clickedElement) {
    // Ocultar todos los elementos de contenido
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Mostrar el contenido relacionado con el elemento clicado
    var contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    // Seleccionar todos los enlaces del menú y poner el peso de la fuente a "normal"
    var links = document.querySelectorAll(".menu-link");
    links.forEach(function(link) {
        link.style.fontWeight = "normal";
        link.style.fontSize = "20px";
    });
    
    // Poner el peso de la fuente del enlace clicado a "bold"
    clickedElement.style.fontWeight = "bold";
    clickedElement.style.fontSize = "22px";

}

//Hacer aparecer el parrafo cuando se clicka encima
document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('click', function() {
        var par = this.nextElementSibling;
        if (par.style.maxHeight) {
            par.style.maxHeight = null;
        } else {
            par.style.maxHeight = par.scrollHeight + "px";
        }
    });
});

document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.dropdown-image').classList.toggle('rotated')
    });
});



//document.querySelector('.dropdown').addEventListener('click', function() {
//    document.querySelector('.dropdown-image').classList.toggle('rotated');
//});





// Ejecutar cuando la página se haya cargado completamente
window.onload = function() {
    // Seleccionar el primer enlace del menú por defecto
    var defaultClicked = document.querySelector('ul li a');
    // Mostrar el contenido por defecto y resaltar el primer enlace del menú
    showContent('AboutMe',defaultClicked);
};