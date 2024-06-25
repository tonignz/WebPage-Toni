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
    });
    
    // Poner el peso de la fuente del enlace clicado a "bold"
    clickedElement.style.fontWeight = "bold";

}

// Ejecutar cuando la página se haya cargado completamente
window.onload = function() {
    // Seleccionar el primer enlace del menú por defecto
    var defaultClicked = document.querySelector('ul li a');
    // Mostrar el contenido por defecto y resaltar el primer enlace del menú
    showContent('AboutMe',defaultClicked);
};