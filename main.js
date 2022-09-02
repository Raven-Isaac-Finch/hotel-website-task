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
