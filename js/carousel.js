document.addEventListener('DOMContentLoaded', function() {

    const images = document.querySelectorAll('.carousel-image');
    const buttons = document.querySelectorAll('.carousel-button');
    let currentIndex = 0;
    let interval;

    function updateCarousel(index) {
        // Ocultar la imagen actual y desactivar el botón correspondiente
        images[currentIndex].classList.remove('active');
        buttons[currentIndex].classList.remove('active');

        // Mostrar la imagen seleccionada y activar el botón correspondiente
        images[index].classList.add('active');
        buttons[index].classList.add('active');

        // Actualizar el índice actual
        currentIndex = index;
    }

    // Funcion que ayuda a reiniciar el conteo del carrusel
    function startCarousel() {
        // Limpiamos el intervalo anterior
        clearInterval(interval); 
        interval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % images.length;
            updateCarousel(nextIndex);
        }, 4500);
    }

    // Agregar event listeners a los botones para el control manual
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            updateCarousel(index);
            // Reinicio del conteo
            startCarousel();
        });
    });

    // Funcion para iniciar carrusel
    startCarousel();

});