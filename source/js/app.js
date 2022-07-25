import '../js/index';
import '../js/swiper';
import {introSlider} from './intro-slider';
import {createCards} from './create-cards';
import {initHeader} from './header';
import {filterSelect} from './filter-select';

window.addEventListener('DOMContentLoaded', () => {
  introSlider();
  createCards();
  initHeader();
  filterSelect();
});

