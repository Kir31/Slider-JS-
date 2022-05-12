const slides = document.querySelector('.slides');
const images = document.querySelectorAll('img');
const slidesWrapper = document.querySelector('.wrapper-slides');
const controls  = document.querySelector('.controls')

let slideWidth;
let slideIndex = 0;
let offset = 0;

// const textArr = ['Helsingborg, Sweden. July 2016', 'Copenhagen, Denmark. July 2016', 'Italy. August 2017', 'Provance, France. August 2017', 'Menton, France. August 2017']

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

const dots = []; 
for (let i = 0; i < images.length; i++) {
    const item = document.createElement('li');
    const dot = document.createElement('div');
    dot.classList.add('dot');
    item.setAttribute('data-slide', i);
    controls.append(item);
    item.append(dot);    
    dots.push(item);
}

dots.forEach(dot => dot.addEventListener('click', () => {
    const slide = dot.getAttribute('data-slide');
    slideIndex = slide;
    offset = +slideWidth.slice(0, slideWidth.length - 2) * slide;
    slides.style.transform = `translateX(-${offset}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');  
}))