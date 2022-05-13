const slides = document.querySelector('.slides');
const images = document.querySelectorAll('img');
const slidesWrapper = document.querySelector('.wrapper-slides');
const controls  = document.querySelector('.controls');
const text = document.querySelector('.text');
const textItems = document.querySelectorAll('.text-item');
const textWrapper = document.querySelector('.wrapper-text');

let slideWidth;
let textWidth;
let slideIndex = 0;

function loadSlider() {
    slideWidth = slidesWrapper.offsetWidth;
    slides.style.width = slideWidth * images.length + 'px';
    images.forEach(slide => {
        slide.style.width = slideWidth + 'px';
        slide.style.height = 'auto';
    })
    slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;    
}

function loadText() {
    textWidth = textWrapper.offsetWidth;
    text.style.width = textWidth * images.length + 'px';
    textItems.forEach(item => {
        item.style.width = textWidth + 'px';
        item.style.height = 'auto';
    })
    text.style.transform = `translateX(-${textWidth * slideIndex}px)`;
}

window.addEventListener('resize', loadSlider);
window.addEventListener('resize', loadText);
loadSlider();
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
    slides.style.transform = `translateX(-${slideWidth * slide}px)`;
    text.style.transform = `translateX(-${textWidth * slide}px)`;
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