const slides = document.querySelector('.slides');
const images = document.querySelectorAll('img');
const slidesWrapper = document.querySelector('.wrapper-slides');
const controls  = document.querySelector('.controls');
const text = document.querySelector('.text');
const textItems = document.querySelectorAll('.text-item');
const textWrapper = document.querySelector('.wrapper-text');

let slideWidth;
let slideIndex = 0;
let offset = 0;

let textWidth;
let textIndex = 0;
let textOffset = 0;

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

function loadText() {
    textWidth = window.getComputedStyle(textWrapper).width;
    text.style.width = 100 * images.length + '%';
    textItems.forEach(item => {
        item.style.width = textWidth;
        item.style.height = 'auto';
    })
}

window.addEventListener('resize', loadText);

loadText()

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
dots[slideIndex].classList.add('active');

dots.forEach(dot => dot.addEventListener('click', () => {
    const slide = dot.getAttribute('data-slide');
    slideIndex = slide;
    textIndex = slide;
    offset = +slideWidth.slice(0, slideWidth.length - 2) * slide;
    textOffset = +textWidth.slice(0, textWidth.length - 2) * slide;
    slides.style.transform = `translateX(-${offset}px)`;
    text.style.transform = `translateX(-${textOffset}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');  
}))

// const el = document.createElement('div');
// controls.addEventListener('mousedown', (e) => {   
//    el.classList.add('mousedown');
//    el.style.left = e.pageX - el.offsetWidth / 2 + 'px';
//    el.style.top = e.pageY - el.offsetHeight / 2 + 'px';   
//    document.querySelector('body').append(el);
// })
// controls.addEventListener('mousemove', (e) => {
//     el.style.left = e.pageX - el.offsetWidth / 2 + 'px';
//     el.style.top = e.pageY - el.offsetHeight / 2 + 'px';
// })
// document.addEventListener('mouseup', () => {
//     el.remove();
// })