const swiper = new Swiper('.testimonials-slider', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

// Popup logic

// Get popup elements
const tutorPopup = document.getElementById('tutor-popup');
const anfitriaoPopup = document.getElementById('anfitriao-popup');

// Get open buttons
const openTutorPopupButton = document.getElementById('open-tutor-popup');
const openAnfitriaoPopupButton = document.getElementById('open-anfitriao-popup');

// Get close buttons
const closeTutorPopupButton = document.getElementById('close-tutor-popup');
const closeAnfitriaoPopupButton = document.getElementById('close-anfitriao-popup');

// Open tutor popup
openTutorPopupButton.addEventListener('click', (e) => {
    e.preventDefault();
    tutorPopup.style.display = 'block';
});

// Open anfitriao popup
openAnfitriaoPopupButton.addEventListener('click', (e) => {
    e.preventDefault();
    anfitriaoPopup.style.display = 'block';
});

// Close tutor popup
closeTutorPopupButton.addEventListener('click', () => {
    tutorPopup.style.display = 'none';
});

// Close anfitriao popup
closeAnfitriaoPopupButton.addEventListener('click', () => {
    anfitriaoPopup.style.display = 'none';
});

// Close popups when clicking outside of them
window.addEventListener('click', (e) => {
    if (e.target == tutorPopup) {
        tutorPopup.style.display = 'none';
    }
    if (e.target == anfitriaoPopup) {
        anfitriaoPopup.style.display = 'none';
    }
});