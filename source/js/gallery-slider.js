const gallerySlider = () => {

  let swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 40,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const swiperSlides = Array.from(swiper.slides);
  const test = document.querySelector('.test');
  const tabs = document.querySelector('.tabs');
  const tab = document.querySelector('.tab--second');
  const closeButtons = document.querySelectorAll('.tab__close-btn');

  const openFullscreenSwiper = (evt) => {
    const target = evt.target.closest('.swiper-slide');
    swiper.el.classList.add('fullscreen');
    test.classList.add('is-open');
    tabs.style.position = "unset";
    tab.style.position = "unset";
    swiper.params.slidesPerView = 1;
    swiper.update();
    swiperSlides.forEach((item, index) => {
      if (item.id === target.id) {
        item.classList.add('show')
        swiper.slideTo(index, 10);
      }
    });
    closeButtons.forEach((button) => {
      button.addEventListener('click', closeFullscreenSwiper);
    });
  };

  const closeFullscreenSwiper = (evt) => {
    swiper.el.classList.remove('fullscreen');
    test.classList.remove('is-open');
    tabs.style.position = "relative";
    tab.style.position = "relative";
    swiper.params.slidesPerView = 5;
    swiper.update();
    swiperSlides.forEach((item, index) => {
      item.classList.remove('show')
      swiper.slideTo(index, 10);
    });
    closeButtons.forEach((button) => {
      button.removeEventListener('click', closeFullscreenSwiper);
    });
  };

  swiperSlides.forEach((slider) => {
    slider.addEventListener('click', openFullscreenSwiper);
  });
};

export {gallerySlider};


