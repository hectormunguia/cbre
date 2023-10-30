document.addEventListener('DOMContentLoaded', function() {

    const images = document.querySelectorAll('.carousel-image');
    const buttons = document.querySelectorAll('.carousel-button');
    let currentIndex = 0;

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

    // Agregar event listeners a los botones para el control manual
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            updateCarousel(index);
        });
    });

    // Cambiar automáticamente la imagen del carrusel cada 4 segundos
    setInterval(() => {
        let nextIndex = (currentIndex + 1) % images.length;
        updateCarousel(nextIndex);
    }, 4500);

});