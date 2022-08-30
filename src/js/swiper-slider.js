const swiper = new Swiper('.swiper', {
    // Optional parameters
    container: '.reviews-slider',
    controls: false,
    items: 1,
    slideBy: 'page',
    autoplay: false,
    navPosition:'bottom',

    // Navigation arrows
    navigation: {
      nextEl: '.btn-right',
      prevEl: '.btn-left',
    }
});
  
// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });