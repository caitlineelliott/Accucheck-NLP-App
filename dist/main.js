/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: activeNav, restingNav, handleSubmit, checkURL, sendData, updateUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_mobileNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/mobileNav */ "./src/client/js/mobileNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activeNav", function() { return _js_mobileNav__WEBPACK_IMPORTED_MODULE_0__["activeNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restingNav", function() { return _js_mobileNav__WEBPACK_IMPORTED_MODULE_0__["restingNav"]; });

/* harmony import */ var _js_handleSubmit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/handleSubmit */ "./src/client/js/handleSubmit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return _js_handleSubmit__WEBPACK_IMPORTED_MODULE_1__["handleSubmit"]; });

/* harmony import */ var _js_checkURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/checkURL */ "./src/client/js/checkURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkURL", function() { return _js_checkURL__WEBPACK_IMPORTED_MODULE_2__["checkURL"]; });

/* harmony import */ var _js_sendData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/sendData */ "./src/client/js/sendData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendData", function() { return _js_sendData__WEBPACK_IMPORTED_MODULE_3__["sendData"]; });

/* harmony import */ var _js_updateUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/updateUI */ "./src/client/js/updateUI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUI", function() { return _js_updateUI__WEBPACK_IMPORTED_MODULE_4__["updateUI"]; });

/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/resets.scss */ "./src/client/styles/resets.scss");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/base.scss */ "./src/client/styles/base.scss");
/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/form.scss */ "./src/client/styles/form.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/header.scss */ "./src/client/styles/header.scss");














/***/ }),

/***/ "./src/client/js/checkURL.js":
/*!***********************************!*\
  !*** ./src/client/js/checkURL.js ***!
  \***********************************/
/*! exports provided: checkURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkURL", function() { return checkURL; });
function checkURL(userURL) {
    try {
        let url = new URL(userURL);
        let validURL = url.href;
        return validURL;
    }
    catch (e) {
        console.log('ERROR, INVALID URL:', e);
        return false;
    }
}



/***/ }),

/***/ "./src/client/js/handleSubmit.js":
/*!***************************************!*\
  !*** ./src/client/js/handleSubmit.js ***!
  \***************************************/
/*! exports provided: handleSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return handleSubmit; });
/* harmony import */ var _checkURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkURL.js */ "./src/client/js/checkURL.js");
/* harmony import */ var _sendData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendData.js */ "./src/client/js/sendData.js");



document.addEventListener('DOMContentLoaded', function () {
    const formBtn = document.querySelector('#submit-btn');
    formBtn.addEventListener('click', handleSubmit);
});

async function handleSubmit(event) {
    event.preventDefault();

    // hide description + display loading dial/back btn
    document.querySelector('.starter-form').classList.toggle('closed');
    document.querySelector('.form-loader').classList.toggle('display-on');
    document.querySelector('.back-btn').classList.toggle('display-on');

    // capture user URL input
    let userURL = document.getElementById('name').value;

    // validate URL
    const validURL = Object(_checkURL_js__WEBPACK_IMPORTED_MODULE_0__["checkURL"])(userURL);

    // abort catch
    if (!validURL) {
        alert('please enter a correct URL');
        location.reload();
    } else if (validURL) {
        Object(_sendData_js__WEBPACK_IMPORTED_MODULE_1__["sendData"])('/passURL', { url: validURL });
    }
}



/***/ }),

/***/ "./src/client/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/client/js/mobileNav.js ***!
  \************************************/
/*! exports provided: restingNav, activeNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restingNav", function() { return restingNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeNav", function() { return activeNav; });
document.addEventListener('DOMContentLoaded', function () {
    const hamIcon = document.querySelector('.hamburger-icon');
    const closeBtn = document.querySelector('.close-btn');

    // active nav bar
    hamIcon.addEventListener('click', activeNav);

    //inactive nav
    closeBtn.addEventListener('click', restingNav);
});

const restingNav = () => {
    document.querySelector('.close-btn').classList.add('hamburger-none');
    document.querySelector('nav').classList.add('nav');
    document.querySelector('nav').classList.remove('mobile-nav');
    document.querySelector('.close-btn').classList.remove('close-btn-active');
    document.querySelector('.nav-list').innerHTML = '';
    document.querySelector('.hamburger-icon').classList.remove('hamburger-none');
};

const activeNav = () => {
    document.querySelector('.hamburger-icon').classList.add('hamburger-none');
    const navItems = document.getElementsByClassName('nav-links');
    document.querySelector('.nav-list').innerHTML =
        `${navItems[0].outerHTML}<br>
        ${navItems[1].outerHTML}<br>
        ${navItems[2].outerHTML}<br>
        ${navItems[3].outerHTML}<br>`;

    document.querySelector('nav').classList.add('mobile-nav');
    document.querySelector('nav').classList.remove('nav');
    document.querySelector('.close-btn').classList.add('close-btn-active');
    document.querySelector('.nav-list').addEventListener('click', restingNav);
};




/***/ }),

/***/ "./src/client/js/sendData.js":
/*!***********************************!*\
  !*** ./src/client/js/sendData.js ***!
  \***********************************/
/*! exports provided: sendData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendData", function() { return sendData; });
/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateUI */ "./src/client/js/updateUI.js");


async function sendData(url = '', data = {}) {
    try {
        console.log(`DATA SENT TO SERVER`);
        fetch(url, {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ data })
        })
            .then((res) => res.json())
            .then((res) => {
                console.log('here is your data', res);
                Object(_updateUI__WEBPACK_IMPORTED_MODULE_0__["updateUI"])(res);
            })
    } catch (e) {
        console.log(e);
    }
}



/***/ }),

/***/ "./src/client/js/updateUI.js":
/*!***********************************!*\
  !*** ./src/client/js/updateUI.js ***!
  \***********************************/
/*! exports provided: updateUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUI", function() { return updateUI; });
function updateUI(data) {
    console.log(data.url);

    // show results
    document.querySelector('.form-results').classList.add('display-on');
    document.querySelector('.form-loader').classList.toggle('display-on');

    // add data to results table
    let authorTitle = data.title;
    let array = authorTitle.split(' - ', 2);
    let title = array[0];
    let outlet = array[1].italics();

    document.querySelector('#title').innerHTML = title;
    document.querySelector('#outlet').innerHTML = outlet;

    document.querySelector('#score-tag').innerHTML = data.scoreTag;
    document.querySelector('#agreement').innerHTML = data.agreement;
    document.querySelector('#subjectivity').innerHTML = data.subjectivity;
    document.querySelector('#irony').innerHTML = data.irony;
}



/***/ }),

/***/ "./src/client/styles/base.scss":
/*!*************************************!*\
  !*** ./src/client/styles/base.scss ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/form.scss":
/*!*************************************!*\
  !*** ./src/client/styles/form.scss ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/header.scss":
/*!***************************************!*\
  !*** ./src/client/styles/header.scss ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/resets.scss":
/*!***************************************!*\
  !*** ./src/client/styles/resets.scss ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=main.js.map