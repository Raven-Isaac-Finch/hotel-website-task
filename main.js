// ----- POP-UP DETAIL PAGE -----
// ---------- OPEN
const detailsPopUp = document.querySelectorAll('.show-details');
const cloud = document.querySelector('.cloud');
const popUpPage = document.querySelector('.details-popup');

detailsPopUp[0].addEventListener('click', function() {
    popUpPage.classList.add('visible');
    cloud.classList.add('visible');
});

detailsPopUp[1].addEventListener('click', function() {
    popUpPage.classList.add('visible');
    cloud.classList.add('visible');
});

// ---------- CLOSE
const xmark = document.querySelector('.fa-circle-xmark');

xmark.addEventListener('click', function() {
    popUpPage.classList.remove('visible');
    cloud.classList.remove('visible');
});

// ----- SLIDES -----
const dotHolder = document.querySelector('.dot-holder');
const sliderItems = document.querySelector('.slider__items');
const slides = document.querySelector('.slider__items').children;

let images = [];

images[0] = './assests/slides/slide1.jpg';
images[1] = './assests/slides/slide2.png';
images[2] = './assests/slides/slide3.png';
images[3] = './assests/slides/slide4.jpg';
images[4] = './assests/slides/slide5.png';
images[5] = './assests/slides/slide6.png';

let index = 0;
let dotCount = images.length;

window.addEventListener('DOMContentLoaded', function() {
    handleSlider();
    handleDots(dotCount);
});

function handleSlider() {
    // ----- SLIDES
    let slider = images.map(function(image) {
        return `
            <div class="item">
                <img src="${image}">
            </div>
        `
    });
    slider = slider.join('');
    sliderItems.innerHTML = slider;

    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    };
    slides[index].classList.add('active');
};

function handleDots(dotCount) {
    for(let i = 0; i < dotCount; i++) {
        let dot = document.createElement('div');
        dot.className = 'slider__slide-dots';
        dot.setAttribute('index', i)
        dotHolder.appendChild(dot);

        dot.addEventListener('click', (e) => {
            
        })
    }
}
