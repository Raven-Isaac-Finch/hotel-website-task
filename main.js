// ------------------------------
// ----- POP-UP DETAIL PAGE -----
// ---------- OPEN
// ------------------------------
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

// ------------------------------
// ----- PAGE SLIDE -----
// ------------------------------
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
    let slider = images.map(function(image) {
        return `
            <div class="item">
                <img src="${image}"/>
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
        if(i === 0) {
            dot.className = 'slider__slide-dots active-dot';
        } else {
            dot.className = 'slider__slide-dots';
        }
        dot.setAttribute('index', i)
        dotHolder.appendChild(dot);

        dot.addEventListener('click', (e) => {
            console.log(e.target);
            Array.from(document.querySelectorAll('.active-dot')).forEach((el) => el.classList.remove('active-dot'));
            e.target.classList.add('active-dot');
            let activeElement = e.target.getAttribute("index")
            for(let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            };
            slides[activeElement].classList.add('active');
        })
    }
}

// ------------------------------
// ----- POP-UP SLIDE -----
// ------------------------------
const popupDotHolder = document.querySelector('.popup-dot-holder');
const popupSliderItems = document.querySelector('.slider-popup__items');
const popupSlides = document.querySelector('.slider-popup__items').children;

let popupImages = [];

popupImages[0] = './assests/slides-popup/slide4.png';
popupImages[1] = './assests/slides-popup/slide3.png';;
popupImages[2] = './assests/slides-popup/slide2.png';
popupImages[3] = './assests/slides-popup/slide1.png';

let popupIndex = 0;
let popupDotCount = popupImages.length;

window.addEventListener('DOMContentLoaded', function() {
    handlePopupSlider();
    handlePopopDots(popupDotCount);
});

function handlePopupSlider() {
    let slider = popupImages.map(function(popupImage) {
        return `
            <div class="item">
                <img src="${popupImage}"/>
            </div>
        `
    });
    slider = slider.join('');
    popupSliderItems.innerHTML = slider;

    for(let i = 0; i < popupSlides.length; i++) {
        popupSlides[i].classList.remove('active');
    };
    popupSlides[index].classList.add('active');
};

function handlePopopDots(popupDotCount) {
    for(let i = 0; i < popupDotCount; i++) {
        let dot = document.createElement('div');
        if(i === 0) {
            dot.className = 'slider-popup__slide-dot active-popup-dot';
        } else {
            dot.className = 'slider-popup__slide-dot';
        }
        dot.setAttribute('index', i)
        popupDotHolder.appendChild(dot);

        dot.addEventListener('click', (e) => {
            console.log(e.target);
            Array.from(document.querySelectorAll('.active-popup-dot')).forEach((el) => el.classList.remove('active-popup-dot'));
            e.target.classList.add('active-popup-dot');
            let activeElement = e.target.getAttribute("index")
            for(let i = 0; i < popupSlides.length; i++) {
                popupSlides[i].classList.remove('active');
            };
            popupSlides[activeElement].classList.add('active');
        })
    }
}