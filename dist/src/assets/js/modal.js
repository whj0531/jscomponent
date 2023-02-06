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

/***/ "./src/assets/js/common.js":
/*!*********************************!*\
  !*** ./src/assets/js/common.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ includeHTML)\n/* harmony export */ });\n// import html\nfunction includeHTML(value) {\n  var z, i, elmnt, file, xhttp;\n  /* Loop through a collection of all HTML elements: */\n  z = document.getElementsByTagName(\"*\");\n  for (i = 0; i < z.length; i++) {\n    elmnt = z[i];\n    /*search for elements with a certain atrribute:*/\n    file = elmnt.getAttribute(\"include-html\");\n    if (file) {\n      /* Make an HTTP request using the attribute value as the file name: */\n      xhttp = new XMLHttpRequest();\n      xhttp.onreadystatechange = function () {\n        if (this.readyState == 4) {\n          if (this.status == 200) {\n            elmnt.innerHTML = this.responseText;\n          }\n          if (this.status == 404) {\n            elmnt.innerHTML = \"Page not found.\";\n          }\n          /* Remove the attribute, and call this function once more: */\n          elmnt.removeAttribute(\"include-html\");\n          includeHTML(value);\n          headerNav(value);\n        }\n      };\n      xhttp.open(\"GET\", file, true);\n      xhttp.send();\n      /* Exit the function: */\n      return;\n    }\n  }\n}\n\n// header\nfunction headerNav(value) {\n  var headerBtn = document.querySelectorAll('.btn-nav');\n  var _loop = function _loop() {\n    var nav = document.querySelector('nav');\n    var navScroll;\n    nav.addEventListener('scroll', function () {\n      navScroll = this.scrollLeft;\n    });\n    if (value !== '') {\n      headerBtn[i].ariaSelected = 'false';\n      if (headerBtn[i].id === value) {\n        var target = document.querySelector(\"#\".concat(value));\n        target.classList.add('is-active');\n        target.ariaSelected = 'true';\n        nav.scrollTo({\n          left: sessionStorage.getItem('scrollLeft')\n        });\n      }\n    }\n    headerBtn[i].addEventListener('click', function () {\n      navScroll = this.parentElement.scrollLeft;\n      sessionStorage.setItem('scrollLeft', navScroll);\n      location.href = this.getAttribute('data-url');\n    });\n  };\n  for (var i = 0; i < headerBtn.length; i++) {\n    _loop();\n  }\n}\n// function headerScroll(value){\n\n// }\nwindow.addEventListener('DOMContentLoaded', function () {\n  includeHTML(''); // header\n});\n\n//# sourceURL=webpack://ui/./src/assets/js/common.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/assets/scss/style.scss\");\n/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/common */ \"./src/assets/js/common.js\");\n\n\nfunction modalAction() {\n  var modalBtn = document.querySelectorAll('[data-toggle=\"modal\"]');\n  var _loop = function _loop() {\n    var modalActionBtn = modalBtn[i];\n    var modalTarget = document.getElementById(\"\".concat(modalBtn[i].getAttribute('data-target')));\n    modalActionBtn.addEventListener('click', function () {\n      showModal(this, modalTarget);\n    });\n  };\n  for (var i = 0; i < modalBtn.length; i++) {\n    _loop();\n  }\n}\nfunction dimModal(btn, content) {\n  var dimDiv = document.createElement('div');\n  dimDiv.id = \"\".concat(content.id, \"Dim\");\n  dimDiv.classList.add('modal-dim');\n  document.body.appendChild(dimDiv);\n  var divTarget = document.getElementById(\"\".concat(dimDiv.id));\n  divTarget.addEventListener('click', function (e) {\n    e.stopPropagation();\n    closeModal(btn, content);\n  });\n}\n// show\nfunction showModal(btn, content) {\n  var modalBtn = btn;\n  var modal = content;\n  document.body.style = 'overflow: hidden';\n  document.body.appendChild(modal);\n  if (!modal.classList.contains('is-show')) {\n    modal.classList.add('is-show');\n    dimModal(modalBtn, modal);\n    // 접근성 실행\n    modalA11y(modalBtn, modal);\n  }\n  // close\n  var btnClose = modal.querySelector('.btn-close');\n  btnClose.addEventListener('click', function () {\n    if (modal.classList.contains('is-show')) {\n      closeModal(modalBtn, modal);\n    }\n  });\n  // result button\n  var dataActionClose = modal.querySelector('[data-action=\"close\"]');\n  if (dataActionClose !== null) {\n    dataActionClose.addEventListener('click', function () {\n      if (modal.classList.contains('is-show')) {\n        closeModal(modalBtn, modal);\n      }\n    });\n  }\n}\n// close\nfunction closeModal(btn, content) {\n  var modalBtn = btn;\n  var modal = content;\n  var divTarget = document.getElementById(\"\".concat(content.id, \"Dim\"));\n  document.body.style = '';\n  document.body.removeChild(modal);\n  if (modal.classList.contains('is-show')) {\n    modal.classList.remove('is-show');\n    divTarget.remove();\n    // 접근성\n    modalBtn.focus();\n  }\n}\n// 접근성\nfunction modalA11y(btn, content) {\n  var modalBtn = btn;\n  var modal = content;\n  var modalContent = modal.querySelector('.modal-content');\n  var focusEl = modal.querySelectorAll('.btn');\n  var first = focusEl[0];\n  var last = focusEl[focusEl.length - 1];\n  modalContent.focus();\n  modalContent.setAttribute('tabindex', '-1');\n  last.addEventListener('keydown', function (e) {\n    if (e.key === 'Tab') {\n      modalContent.focus();\n    }\n    if (e.shiftKey && e.key === 'Tab') {\n      this.focus();\n    }\n  });\n  first.addEventListener('keydown', function (e) {\n    if (e.shiftKey && e.key === 'Tab') {\n      last.focus();\n      e.preventDefault();\n    }\n  });\n  modalContent.addEventListener('keydown', function (e) {\n    if (e.key === 'Escape') {\n      closeModal(modalBtn, modal);\n    }\n  });\n}\nwindow.addEventListener('DOMContentLoaded', function () {\n  (0,_js_common__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('navModal'); // header\n  modalAction();\n});\n\n//# sourceURL=webpack://ui/./src/assets/js/modal.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/modal.js");
/******/ 	
/******/ })()
;