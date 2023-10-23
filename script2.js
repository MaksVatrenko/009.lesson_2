const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const slider = document.querySelector('.slider__list');

for (let i = 0; i < items.length; i++) {
    const img = document.createElement('img');
    const li = document.createElement('li');
    li.classList.add('slider__item');
    img.classList.add('slider__img');
    img.src = `../images/${i + 1}.jfif`;
    slider.appendChild(li);
    li.appendChild(img);
}

const slides = document.querySelectorAll('.slider__item');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');
let currentSlide = 0;

slides[currentSlide].classList.add('slider__item--visible');
prevButton.classList.add('slider__button--disabled');

function nextSlide() {
    console.log('next')
    slides[currentSlide].classList.remove('slider__item--visible');
    currentSlide = (currentSlide + 1) % slides.length;
    if (currentSlide === 1) {
        prevButton.classList.remove('slider__button--disabled');
    }
    if (currentSlide === slides.length - 1) {
        nextButton.classList.add('slider__button--disabled');
    }
    slides[currentSlide].classList.add('slider__item--visible');
}

function prevSlide() {
    console.log('prev')
    slides[currentSlide].classList.remove('slider__item--visible');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    if (currentSlide === slides.length - 2) {
        nextButton.classList.remove('slider__button--disabled');
    }
    if (currentSlide === 0) {
        prevButton.classList.add('slider__button--disabled');
    }
    slides[currentSlide].classList.add('slider__item--visible');
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
