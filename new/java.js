function showContent(contentId, clickedElement) {

    const lastposition = window.scrollY || document.documentElement.scrollTop;
    const footerHeight = 100;
    const desiredScrollPosition = 300; // Posición a la que quieres desplazar

    // Obtener el evento actual
    var event = event || window.event;

    
    
    // Prevenir el comportamiento predeterminado del navegador (evita el scroll y actualización)

    event.preventDefault();
    

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

    window.scrollTo({
        top: lastposition,
        behavior: 'auto',
    });

    // Comprobar la posición actual del scroll
    

    const containerwindow = window.innerHeight;
    const containermain = document.querySelector('main');
    const containerfooter = document.querySelector('footer');
    const paragraph = document.getElementsByClassName('.content');
    const paragraphHeight = paragraph.clientHeight;

    containermain.style.paddingBottom = `0px`;
    if ((containermain.clientHeight + containerfooter.clientHeight) <= containerwindow) {
        containermain.style.paddingBottom = `450px`;
    }
    else{
        containermain.style.paddingBottom = `0px`;
    }
    



    // Desplazar la página a 300px si está por debajo de 300px
    if (lastposition >= 300) {
        window.scrollTo({
            top: 300,
            behavior: 'auto' // Desplazamiento suave
        });
    }
    else if (lastposition > 0 & lastposition < 300) {
        window.scrollTo({
            top: 300,
            behavior: 'smooth' // Desplazamiento suave
        });
    }

    const lastposition2 = window.scrollY || document.documentElement.scrollTop;
    

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







window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
        footer.classList.add('no-transparency');
    } else {
        footer.classList.remove('no-transparency');
    }
});







window.onload = function() {
    // Seleccionar el primer enlace del menú por defecto
    var defaultClicked = document.querySelector('nav p');
    // Mostrar el contenido por defecto y resaltar el primer enlace del menú
    showContent('AboutMe',defaultClicked);

    window.scrollTo({
        top: 0, // Altura a la que quieres desplazarte
        behavior: 'auto'  // Desplazamiento suave
    });
};