// Animación movimiento fluido (al clickear enlaces)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Carousel

// Creamos la variable slideIndex que usaremos para saber que imagen tenemos presente,
// Además, inicializaremos el Carousel

let slideIndex = 1;
showSlide(slideIndex);

// Cambiar de imagen automáticamente

setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);

// Cambiamos de Imagen

function moveSlide(moveStep) {
    showSlide(slideIndex += moveStep);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

// Mostramos la imagen y cambiamos los puntos.

function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName('dot');
    
    if (n > slides.length) { slideIndex = 1 } // Si el índice es mayor a la  cantidad de imágenes reseteamos
    if (n < 1) { slideIndex = slides.length } // Si el índice es inválido reseteamos

    for (i = 0; i < slides.length; i++) { // Ocultamos todas las imagenes
        slides[i].classList.add('hidden');
    }

    for (i = 0; i < dots.length; i++) { // Le sacamos los colores a los puntos
        dots[i].classList.remove('bg-indigo-500');
        dots[i].classList.add('bg-white');
    }

    slides[slideIndex - 1].classList.remove('hidden'); // Dejamos de ocultar la imagen

    // Cambiamos el color de los puntos
    dots[slideIndex - 1].classList.remove('bg-white');
    dots[slideIndex - 1].classList.add('bg-indigo-500');
}