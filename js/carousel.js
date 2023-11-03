document.addEventListener('DOMContentLoaded', function() {

    const images = document.querySelectorAll('.carousel-image');
    const buttons = document.querySelectorAll('.carousel-button');
    const textBoxes = document.querySelectorAll('.text-box');
    let currentIndex = 0;
    let textBoxOffset = 0;
    let interval;

    function updateCarousel(index) {
        // Ocultar la imagen actual y desactivar el botón correspondiente
        //images[currentIndex].classList.remove('active');
        images[currentIndex].style.opacity = 0;
        buttons[currentIndex].classList.remove('active');
        textBoxes[currentIndex].style.opacity = 0;
        //textBoxes[currentIndex].classList.remove('active');

        // Mostrar la imagen seleccionada y activar el botón correspondiente
        images[index].style.opacity = 1;
        images[index].classList.add('active');
        buttons[index].classList.add('active');
        textBoxes[index].style.opacity = 1;
        textBoxes[index].classList.add('active');

        // Deplazamiento del textBox
        textBoxOffset = index * 50;
        textBoxes[index].style.transform = `translateX(${textBoxOffset}%)`;

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

    // Funcionalidad para cambio de color del navbar
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo-cbre');
    const menuItems = document.querySelectorAll('.menu-item');
    const menuLinks = document.querySelectorAll('.menu-link');
    const icons = document.querySelectorAll('.svg-arrow');

    menuItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            navbar.style.background = 'var(--gray)';
            menuLinks.forEach((link) => {
                link.style.color = 'var(--primary)';
            });
            logo.style.fill = 'var(--primary)';
            icons.forEach((icon) => {
                const path = icon.querySelector('path');
                path.setAttribute('stroke', 'var(--primary)');
            });
        });

        item.addEventListener('mouseout', () => {
            navbar.style.background = '';
            menuLinks.forEach((link) => {
                link.style.color = '';
            });
            logo.style.fill = '';
            icons.forEach((icon) => {
                const path = icon.querySelector('path');
                path.setAttribute('stroke', 'var(--white)');
            });
        });
    })
});