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
