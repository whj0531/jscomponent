/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/accordion.js":
/*!************************************!*\
  !*** ./src/assets/js/accordion.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/assets/scss/style.scss\");\n/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/common */ \"./src/assets/js/common.js\");\n\n\nfunction accordion() {\n  var accEl = document.getElementsByClassName('accordion');\n  // accordions\n  var _loop = function _loop() {\n    var acc = accEl[i];\n    var accItem = acc.getElementsByClassName('accordion-item');\n    var accBtns = acc.querySelectorAll('.accordion-btn');\n\n    // items\n    var _loop2 = function _loop2() {\n      var accBtn = accItem[j].querySelector('.accordion-btn');\n      // 초기 active\n      for (var l = 0; l < accBtns.length; l++) {\n        if (accBtns[l].classList.contains('is-active')) {\n          accOpen(accBtns[l]);\n        }\n      }\n      accBtn.addEventListener('click', function () {\n        if (acc.classList.contains('onlyone')) {\n          // onlyone\n          if (this.ariaExpanded === 'false') {\n            for (var k = 0; k < accBtns.length; k++) {\n              accClose(accBtns[k]);\n            }\n            accOpen(this);\n          } else {\n            accClose(this);\n          }\n        } else {\n          this.ariaExpanded === 'false' ? accOpen(this) : accClose(this);\n        }\n      });\n      function accOpen(target) {\n        var accBody = target.parentElement.nextElementSibling;\n        var arrow = target.querySelector('.icon span');\n        target.ariaExpanded = 'true';\n        accBody.style.height = \"\".concat(accBody.scrollHeight, \"px\");\n        arrow.innerText = '열림';\n      }\n      function accClose(target) {\n        var accBody = target.parentElement.nextElementSibling;\n        var arrow = target.querySelector('.icon span');\n        target.ariaExpanded = 'false';\n        accBody.style.height = \"0\";\n        arrow.innerText = '닫힘';\n      }\n    };\n    for (var j = 0; j < accItem.length; j++) {\n      _loop2();\n    }\n  };\n  for (var i = 0; i < accEl.length; i++) {\n    _loop();\n  }\n}\nwindow.addEventListener('DOMContentLoaded', function () {\n  (0,_js_common__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('navAccordion'); // header\n  accordion();\n});\n\n//# sourceURL=webpack://ui/./src/assets/js/accordion.js?");

/***/ }),

/***/ "./src/assets/js/common.js":
/*!*********************************!*\
  !*** ./src/assets/js/common.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ includeHTML)\n/* harmony export */ });\n// import html\nfunction includeHTML(value) {\n  var z, i, elmnt, file, xhttp;\n  /* Loop through a collection of all HTML elements: */\n  z = document.getElementsByTagName(\"*\");\n  for (i = 0; i < z.length; i++) {\n    elmnt = z[i];\n    /*search for elements with a certain atrribute:*/\n    file = elmnt.getAttribute(\"include-html\");\n    if (file) {\n      /* Make an HTTP request using the attribute value as the file name: */\n      xhttp = new XMLHttpRequest();\n      xhttp.onreadystatechange = function () {\n        if (this.readyState == 4) {\n          if (this.status == 200) {\n            elmnt.innerHTML = this.responseText;\n          }\n          if (this.status == 404) {\n            elmnt.innerHTML = \"Page not found.\";\n          }\n          /* Remove the attribute, and call this function once more: */\n          elmnt.removeAttribute(\"include-html\");\n          includeHTML(value);\n          headerNav(value);\n        }\n      };\n      xhttp.open(\"GET\", file, true);\n      xhttp.send();\n      /* Exit the function: */\n      return;\n    }\n  }\n}\n\n// header\nfunction headerNav(value) {\n  var headerBtn = document.querySelectorAll('.btn-nav');\n  var _loop = function _loop() {\n    var nav = document.querySelector('nav');\n    var navScroll;\n    nav.addEventListener('scroll', function () {\n      navScroll = this.scrollLeft;\n    });\n    if (value !== '') {\n      headerBtn[i].ariaSelected = 'false';\n      if (headerBtn[i].id === value) {\n        var target = document.querySelector(\"#\".concat(value));\n        target.classList.add('is-active');\n        target.ariaSelected = 'true';\n        nav.scrollTo({\n          left: sessionStorage.getItem('scrollLeft')\n        });\n      }\n    }\n    headerBtn[i].addEventListener('click', function () {\n      navScroll = this.parentElement.scrollLeft;\n      sessionStorage.setItem('scrollLeft', navScroll);\n      location.href = this.getAttribute('data-url');\n    });\n  };\n  for (var i = 0; i < headerBtn.length; i++) {\n    _loop();\n  }\n}\n// function headerScroll(value){\n\n// }\nwindow.addEventListener('DOMContentLoaded', function () {\n  includeHTML(''); // header\n});\n\n//# sourceURL=webpack://ui/./src/assets/js/common.js?");

/***/ }),

/***/ "./src/assets/scss/style.scss":
/*!************************************!*\
  !*** ./src/assets/scss/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ui/./src/assets/scss/style.scss?");

/***/ })

/******/ 	});
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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/accordion.js");
/******/ 	
/******/ })()
;