const gallerySlider = () => {

  const breakpoint = window.matchMedia('(max-width: 1023px)');
  const breakpointDesktop = window.matchMedia('(min-width: 1024px)');
  const jewellerySection = document.querySelector('.jewellery');
  const tabSlider = document.querySelector('.tab--second');

  let swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    speed: 1000,
    direction: 'horizontal',
    slideToClickedSlide: true,
    //loop: true,
    touchStartPreventDefault: false,
    centeredSlides: true,
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      0: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
    },
  });

  const swiperSlides = Array.from(swiper.slides);

  const test = document.querySelector('.test');
  const tabs = document.querySelector('.tabs');
  const tab = document.querySelector('.tab--second');
  const closeButtons = document.querySelectorAll('.tab__close-btn');
  const body = document.querySelectorAll('body');

  const openFullscreenSwiper = (evt) => {
    const target = evt.target.closest('.swiper-slide');
    swiper.el.classList.add('fullscreen');
    test.classList.add('is-open');
    jewellerySection.classList.add('is-open');
    tabSlider.classList.remove('gradient-on');
    body[0].classList.add('no-scroll');
    tabs.style.position = "unset";
    tab.style.position = "unset";
    swiper.params.slidesPerView = 1;
    swiper.update();
    swiperSlides.forEach((item, index) => {
      if (item.id === target.id) {
        item.classList.add('show');
        swiper.slideTo(index, 10);
      }
    });
    closeButtons.forEach((button) => {
      button.addEventListener('click', closeFullscreenSwiper);
    });
  };

  const closeFullscreenSwiper = (evt) => {
    const target = evt.target.closest('.swiper-slide');
    swiper.el.classList.remove('fullscreen');
    test.classList.remove('is-open');
    jewellerySection.classList.remove('is-open');
    tabSlider.classList.add('gradient-on');
    body[0].classList.remove('no-scroll');
    tabs.style.position = "relative";
    tab.style.position = "relative";
    if (breakpoint.matches) {
      swiper.params.slidesPerView = 1.4;
    } else {
      swiper.params.slidesPerView = 5;
    }
    swiper.update();
    swiperSlides.forEach((item, index) => {
      if (item.id === target.id) {
        item.classList.remove('show');
        swiper.slideTo(index, 10);
      }
    });
    closeButtons.forEach((button) => {
      button.removeEventListener('click', closeFullscreenSwiper);
    });
  };

  swiperSlides.forEach((slider) => {
    slider.addEventListener('click', openFullscreenSwiper);
  });

  const breakpointChecker = () => {
    if (breakpointDesktop.matches) {
      swiper.params.centeredSlides = false;
      swiper.update();
    } else {
      swiper.params.centeredSlides = true;
      swiper.update();
    }
  };
  breakpointChecker();
  breakpointDesktop.addListener(breakpointChecker);

};

export {gallerySlider};


