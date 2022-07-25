const sliderBlock = document.querySelector('.intro-slider');

const gallerySlider = () => {
  let swiper;
  if (!sliderBlock) {
    return;
  } else {

    swiper = new Swiper('.intro-slider', {
      grabCursor: true,
      spaceBetween: 0,
      // centeredSlides: true,
      pagination: {
        el: ('.swiper-pagination'),
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        1440: {
          slidesPerView: 1,
        },
      },
    });
  }
};

export {gallerySlider};
