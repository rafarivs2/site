function toggleMenu() {
    const menu = document.getElementById("sidebar");
    menu.classList.toggle("active");
}   

// Variables para manejar el carrusel
let index = 0;

function moveCarousel(step) {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const itemsPerView = window.innerWidth > 768 ? 2 : 1; // 2 tarjetas por vista en pantallas grandes
    const totalItems = items.length;

    index += step;

    // Controlar los límites del carrusel
    if (index > totalItems - itemsPerView) {
        index = 0;
    } else if (index < 0) {
        index = totalItems - itemsPerView;
    }

    // Mover el carrusel
    const offset = -index * (100 / itemsPerView);
    track.style.transform = `translateX(${offset}%)`;
}
