const images = document.querySelectorAll('.carousel-image');
const buttons = document.querySelectorAll('.carousel-button');
let currentIndex = 0;

function updateCarousel(index) {
    //Ocultar imagen actual y desactivar boton
    images[currentIndex].classList.remove('active');
}
