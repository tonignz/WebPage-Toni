function showContent(contentId, clickedElement) {
    // Ocultar todos los elementos de contenido
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Mostrar el contenido relacionado con el elemento clicado
    var contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    // Seleccionar todos los elementos <p> y eliminar la clase activa
    var paragraphs = document.querySelectorAll("nav p");
    paragraphs.forEach(function(paragraph) {
        paragraph.classList.remove('active');
    });
    
    // Poner la clase activa en el <p> del enlace clicado
    var clickedParagraph = clickedElement.closest('p'); // Encuentra el <p> padre del enlace clicado
    clickedParagraph.classList.add('active');
}







window.onload = function() {
    // Seleccionar el primer enlace del menú por defecto
    var defaultClicked = document.querySelector('nav p');
    // Mostrar el contenido por defecto y resaltar el primer enlace del menú
    showContent('AboutMe',defaultClicked);
};