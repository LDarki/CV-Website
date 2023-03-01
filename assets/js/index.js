// Smooth Anchor Animation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Carousel Slider

let slideIndex = 1;
showSlide(slideIndex);

setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);

function moveSlide(moveStep) {
    showSlide(slideIndex += moveStep);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName('dot');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('bg-indigo-500');
        dots[i].classList.add('bg-white');
    }

    slides[slideIndex - 1].classList.remove('hidden');

    // highlight the active dot
    dots[slideIndex - 1].classList.remove('bg-white');
    dots[slideIndex - 1].classList.add('bg-indigo-500');
}