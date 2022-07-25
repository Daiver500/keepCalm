/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": function() { return /* binding */ modal; }
/* harmony export */ });
'"use strict';

var modal = function modal() {
  var openModalButton = document.querySelector('.navigation__btn');
  var modalWindow = document.querySelector('.modal');
  var body = document.getElementsByTagName('body');

  var escPressHandler = function escPressHandler(evt) {
    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  var windowClickHandler = function windowClickHandler(evt) {
    var target = evt.target;

    if (target === modalWindow) {
      closeModal();
    }
  };

  var openModal = function openModal() {
    modalWindow.classList.remove('hidden');
    document.addEventListener('keydown', escPressHandler);
    document.addEventListener('click', windowClickHandler);
    body[0].classList.add('no-scroll');
  };

  var closeModal = function closeModal() {
    modalWindow.classList.add('hidden');
    document.removeEventListener('keydown', escPressHandler);
    document.removeEventListener('click', windowClickHandler);
    body[0].classList.remove('no-scroll');
  };

  openModalButton.addEventListener('click', openModal);
};



/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainMenu": function() { return /* binding */ mainMenu; }
/* harmony export */ });


var mainMenu = function mainMenu() {
  var openMenuButton = document.querySelector('.navigation__toggle');
  var navigationToggleBtns = document.querySelectorAll('.navigation__toggle svg');
  var navigationMenu = document.querySelector('.navigation__list');
  var body = document.getElementsByTagName('body');

  var openMenu = function openMenu() {
    navigationToggleBtns.forEach(function (item) {
      item.classList.toggle('isHidden');
    });
    navigationMenu.classList.toggle('isActive');
    body[0].classList.toggle('no-scroll');
  };

  openMenuButton.addEventListener('click', openMenu);
};



/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabs": function() { return /* binding */ tabs; }
/* harmony export */ });


var tabs = function tabs() {
  var tabsButtons = document.querySelectorAll('.about-card');
  var tabsButtonsParent = document.querySelector('.about__list');
  var tabsCards = document.querySelectorAll('.about-info');

  var hideContent = function hideContent() {
    tabsButtons.forEach(function (button) {
      button.classList.remove('about-card--active');
    });
    tabsCards.forEach(function (card) {
      card.classList.remove('about-info--active');
      card.classList.add('isHidden');
    });
  };

  var showContent = function showContent(i) {
    tabsButtons[i].classList.add('about-card--active');
    tabsCards[i].classList.add('about-info--active');
    tabsCards[i].classList.remove('isHidden');
  };

  hideContent();
  showContent(1);
  tabsButtonsParent.addEventListener('click', function (evt) {
    var target = evt.target.closest('.about-card');

    if (target && target.classList.contains('about-card')) {
      tabsButtons.forEach(function (button, i) {
        if (target === button) {
          hideContent();
          showContent(i);
        }
      });
    }
  });
};



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);




window.addEventListener('DOMContentLoaded', function () {
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.modal)();
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.mainMenu)();
  (0,_tabs__WEBPACK_IMPORTED_MODULE_3__.tabs)();
});
}();
/******/ })()
;