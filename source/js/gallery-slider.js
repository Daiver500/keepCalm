const gallerySlider = () => {

  const breakpoint = window.matchMedia('(max-width: 1023px)');
  const breakpointDesktopLow = window.matchMedia('(min-width: 1024px)');
  const breakpointDesktopHigh = window.matchMedia('(min-width: 1440px)');
  const jewellerySection = document.querySelector('.jewellery');
  const tabSlider = document.querySelector('.tab--second');

  let swiper = new Swiper('.gallery-slider', {
    grabCursor: true,
    speed: 1000,
    slidesPerView: 5,
    spaceBetween: 40,
    direction: 'horizontal',
    slideToClickedSlide: true,
    loop: true,
    touchStartPreventDefault: false,
    centeredSlides: true,
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
  });

  const swiperSlides = document.querySelectorAll('.gallery-slider');

  const tabInner = document.querySelector('.tab__inner');
  const closeButtons = document.querySelectorAll('.tab__close-btn');

  const openFullscreenSwiper = (evt) => {
    const target = evt.target.closest('.gallery-slider');
    swiper.el.classList.add('fullscreen');
    tabInner.classList.add('is-open');
    jewellerySection.classList.add('is-open');
    tabSlider.classList.remove('gradient-on');
    swiper.params.slidesPerView = 1;
    //swiper.update();
    swiperSlides.forEach((item, index) => {
      if (item.id === target.id) {
        item.classList.add('show');
        //swiper.slideToLoop(index, 10);
      }
    });
    closeButtons.forEach((button) => {
      button.addEventListener('click', closeFullscreenSwiper);
    });
  };

  const closeFullscreenSwiper = () => {
    swiper.el.classList.remove('fullscreen');
    tabInner.classList.remove('is-open');
    jewellerySection.classList.remove('is-open');
    tabSlider.classList.add('gradient-on');
    if (breakpoint.matches) {
      swiper.params.slidesPerView = 1.4;
      //swiper.update();
    }
    if (breakpointDesktopLow.matches) {
      swiper.params.slidesPerView = 3;
      //swiper.update();
    }
    if (breakpointDesktopHigh.matches) {
      swiper.params.slidesPerView = 5;
      //swiper.update();
    }
    swiperSlides.forEach((item) => {
      item.classList.remove('show');
      //swiper.slideToLoop(index, 10);
    });
    closeButtons.forEach((button) => {
      button.removeEventListener('click', closeFullscreenSwiper);
    });
  };

  swiperSlides.forEach((slider) => {
    slider.addEventListener('click', openFullscreenSwiper);
  });

  const breakpointChecker = () => {

    if (breakpoint.matches && !tabInner.classList.contains('is-open')) {
      swiper.params.slidesPerView = 1.4;
      swiper.update();
    }
    if (breakpointDesktopLow.matches && !tabInner.classList.contains('is-open')) {
      swiper.params.slidesPerView = 3;
      swiper.update();
    }
    if (breakpointDesktopHigh.matches && !tabInner.classList.contains('is-open')) {
      swiper.params.slidesPerView = 5;
      swiper.update();
    }
  };
  breakpointChecker();
  breakpoint.addListener(breakpointChecker);
  breakpointDesktopLow.addListener(breakpointChecker);
  breakpointDesktopHigh.addListener(breakpointChecker);

};

export {gallerySlider};


