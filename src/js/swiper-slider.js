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