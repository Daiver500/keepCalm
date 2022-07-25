

const gallerySlider = () => {
  let swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: 3,
    spaceBetween: 10,
  });

  let swiperSlides = Array.from(swiper.slides);

  swiperSlides.forEach(function (slide) {
    openFullscreenSliderHandler(slide);
    closeFullscreenSliderHandler(slide);
  });

  function openFullscreenSliderHandler(slide) {
    let slideImage = slide.querySelector('img');

    slideImage.addEventListener('click', function () {
      let slideNumber = slide.dataset.swiperSlideIndex;
      openFullscreenSwiper(slideNumber);
    });
  }

  function openFullscreenSwiper(slideNumber) {
    swiper.el.classList.add('fullscreen');
    swiper.params.slidesPerView = 1;
    swiper.update();
    swiper.slideToLoop(parseInt(slideNumber, 10), 0);
  }

  function closeFullscreenSliderHandler(slide) {
    let slideNumber = slide.dataset.swiperSlideIndex;
    let backdrop = document.createElement('div');
    let closeButton = document.createElement('div');

    slide.appendChild(backdrop);
    slide.appendChild(closeButton);
    backdrop.classList.add('backdrop');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = 'x';

    backdrop.addEventListener('click', function () {
      closeFullscreenSwiper(slideNumber);
    });

    closeButton.addEventListener('click', function () {
      closeFullscreenSwiper(slideNumber);
    });
  }

  function closeFullscreenSwiper(slideNumber) {
    swiper.el.classList.remove('fullscreen');
    swiper.params.slidesPerView = 3;
    swiper.update();
    swiper.slideToLoop(parseInt(slideNumber, 10), 0);
  }

};


export {gallerySlider};


