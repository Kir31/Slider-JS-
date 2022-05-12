const slides = document.querySelector('.slides');
const images = document.querySelectorAll('img');
const slidesWrapper = document.querySelector('.wrapper-slides');
let slideWidth;

let slideIndex = 0;

function loadSlider() {
    slideWidth = window.getComputedStyle(slidesWrapper).width;
    slides.style.width = 100 * images.length + '%';
    images.forEach(slide => {
        slide.style.width = slideWidth;
        slide.style.height = 'auto';
    })
}

window.addEventListener('resize', loadSlider);

loadSlider();