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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/base.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/base.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif; }\n\na {\n  color: #7d1538; }\n  a:hover {\n    color: #bc2c1a; }\n\n/* MOBILE */\n#container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh; }\n  #container #col1, #container #col2 {\n    width: 80vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n  #container #col2 #analysis-img {\n    width: 100%; }\n\n@media only screen and (min-width: 768px) {\n  #container #col1 {\n    width: 65vw;\n    height: 50vh; }\n  #container #col2 {\n    width: 65vw;\n    height: 20vh;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n    #container #col2 #analysis-img {\n      width: 60%; } }\n\n@media only screen and (min-width: 1025px) {\n  #container {\n    flex-direction: row; }\n    #container #col1 {\n      width: 50vw;\n      height: 100vh;\n      margin: 0 0 0 50px;\n      padding: 50px; }\n    #container #col2 {\n      width: 50vw;\n      height: 100vh;\n      margin: 0 50px 0 0;\n      justify-content: center; }\n      #container #col2 #analysis-img {\n        height: auto;\n        width: 100%; } }\n", "",{"version":3,"sources":["webpack://./src/client/styles/base.scss"],"names":[],"mappings":"AAWA;EACI,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,qCAhBkC,EAAA;;AAmBtC;EACI,cAfS,EAAA;EAcb;IAIQ,cAjBW,EAAA;;AAqBnB,WAAA;AACA;EACQ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa,EAAA;EANrB;IASY,WAAW;IAGX,aAAa;IACb,sBAAsB;IACtB,uBAAuB,EAAA;EAdnC;IAsBgB,WAAW,EAAA;;AAK3B;EACA;IAGY,WAAW;IACX,YAAY,EAAA;EAJxB;IAQY,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,2BAA2B,EAAA;IAZvC;MAegB,UAAU,EAAA,EACb;;AAKb;EACI;IACI,mBAAmB,EAAA;IADvB;MAIQ,WAAW;MACX,aAAa;MACb,kBAAkB;MAClB,aAAa,EAAA;IAPrB;MAYQ,WAAW;MACX,aAAa;MAEb,kBAAkB;MAClB,uBAAuB,EAAA;MAhB/B;QAmBY,YAAY;QACZ,WAAW,EAAA,EACd","sourcesContent":["$font-family: 'Montserrat', sans-serif;\n$font-size: 0.9em;\n\n$main-bg: transparent;\n\n$red: #7d1538;\n$red-hover: #bc2c1a;\n\n$blue: #d3f3ee;\n$blue-text: #7fb7be;\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    font-family: $font-family;\n}\n\na {\n    color: $red;\n\n    &:hover {\n        color: $red-hover;\n    }\n}\n\n/* MOBILE */\n#container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        width: 100vw;\n        height: 100vh;\n\n        #col1, #col2 {\n            width: 80vw;\n            // height: 40vh;\n            // background: green;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n        }\n\n        #col2 {\n            // height: 35vh;\n            // background: red;\n\n            #analysis-img {\n                width: 100%;\n            }\n        }\n    }\n\n@media only screen and (min-width: 768px) {\n#container {\n\n        #col1 {\n            width: 65vw;\n            height: 50vh;\n        }\n\n        #col2 {\n            width: 65vw;\n            height: 20vh;\n            display: flex;\n            align-items: center;\n            justify-content: flex-start;\n\n            #analysis-img {\n                width: 60%;\n            }\n        }\n    }\n}\n\n@media only screen and (min-width: 1025px) {\n    #container {\n        flex-direction: row;\n\n        #col1 {\n            width: 50vw;\n            height: 100vh;\n            margin: 0 0 0 50px;\n            padding: 50px;\n            // background: red;\n        }\n\n        #col2 {\n            width: 50vw;\n            height: 100vh;\n            // background: pink;\n            margin: 0 50px 0 0;\n            justify-content: center;\n\n            #analysis-img {\n                height: auto;\n                width: 100%;\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/form.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/form.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif; }\n\na {\n  color: #7d1538; }\n  a:hover {\n    color: #bc2c1a; }\n\n/* MOBILE */\n#container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh; }\n  #container #col1, #container #col2 {\n    width: 80vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n  #container #col2 #analysis-img {\n    width: 100%; }\n\n@media only screen and (min-width: 768px) {\n  #container #col1 {\n    width: 65vw;\n    height: 50vh; }\n  #container #col2 {\n    width: 65vw;\n    height: 20vh;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n    #container #col2 #analysis-img {\n      width: 60%; } }\n\n@media only screen and (min-width: 1025px) {\n  #container {\n    flex-direction: row; }\n    #container #col1 {\n      width: 50vw;\n      height: 100vh;\n      margin: 0 0 0 50px;\n      padding: 50px; }\n    #container #col2 {\n      width: 50vw;\n      height: 100vh;\n      margin: 0 50px 0 0;\n      justify-content: center; }\n      #container #col2 #analysis-img {\n        height: auto;\n        width: 100%; } }\n\nform {\n  background: transparent; }\n\n.title {\n  color: #7d1538;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  font-size: 5.5vw;\n  line-height: 3.5vh;\n  margin-bottom: 20px; }\n\n.heavy-font {\n  font-weight: 700; }\n\n.starter-form {\n  overflow-y: hidden;\n  transition-property: all;\n  transition-duration: 1.3s;\n  transition-timing-function: cubic-bezier(0, 1, 0.5, 1); }\n  .starter-form.closed {\n    max-height: 0; }\n  .starter-form .description {\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 3.5vw;\n    line-height: 4vw; }\n    .starter-form .description p {\n      margin-bottom: 20px; }\n\ninput, button {\n  padding: 2vw;\n  width: 100%;\n  margin: 0 0 20px 0;\n  background: #d3f3ee;\n  border: none;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 3.5vw;\n  color: #7d1538; }\n\nbutton {\n  margin: 0 0 40px 0;\n  color: #7d1538;\n  text-align: left;\n  font-size: 3.5vw; }\n  button:hover {\n    background: #7fb7be;\n    cursor: pointer;\n    transition: 500ms; }\n\ninput::placeholder {\n  color: #7d1538;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 0.9em; }\n\n#disclaimer {\n  color: #bc2c1a;\n  font-size: 0.7em;\n  text-align: center; }\n\n.form-loader {\n  display: none; }\n  .form-loader.display-on {\n    display: block;\n    height: 35vh;\n    margin: 10px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .form-loader.display-on .favicon {\n      width: 40px;\n      height: 40px;\n      margin: 100px auto;\n      border-radius: 100%;\n      -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n      animation: sk-scaleout 1.0s infinite ease-in-out; }\n      .form-loader.display-on .favicon i {\n        color: #7d1538;\n        font-size: 8vw; }\n\n@-webkit-keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n    opacity: 0; } }\n\n@keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.form-results {\n  display: none; }\n  .form-results.display-on {\n    display: block;\n    border-radius: 5px;\n    height: 35vh;\n    overflow-y: scroll;\n    border: 4px solid #e6e6e6;\n    border-radius: 5px;\n    padding: 10px; }\n  .form-results #results-intro {\n    padding-bottom: 20px; }\n    .form-results #results-intro #results-text {\n      font-size: 3.5vw; }\n    .form-results #results-intro #outlet {\n      font-style: italic; }\n  .form-results .results-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    font-size: 3.5vw; }\n    .form-results .results-container .results {\n      font-weight: 700;\n      width: 45%; }\n    .form-results .results-container .results-description {\n      width: 55%;\n      font-size: 3vw; }\n    .form-results .results-container .results-headers,\n    .form-results .results-container .results,\n    .form-results .results-container .results-description {\n      display: flex;\n      flex-direction: column; }\n      .form-results .results-container .results-headers div,\n      .form-results .results-container .results div,\n      .form-results .results-container .results-description div {\n        background: #d3f3ee;\n        color: #7d1538;\n        margin: 0 0 10px 0;\n        height: 25vw;\n        padding: 5px 10px;\n        display: flex;\n        align-items: center; }\n      .form-results .results-container .results-headers .meaning-cloud-data,\n      .form-results .results-container .results .meaning-cloud-data,\n      .form-results .results-container .results-description .meaning-cloud-data {\n        word-wrap: break-word; }\n\n.back-btn {\n  display: none; }\n  .back-btn.display-on {\n    display: block;\n    margin-top: 10px; }\n\n/* TABLET STYLES */\n@media only screen and (min-width: 768px) {\n  .title {\n    font-size: 3.5vw; }\n  .starter-form .description {\n    font-size: 2.5vw; }\n  input, button {\n    font-size: 2.5vw; }\n  .form-results #results-intro #results-text {\n    font-size: 2.5vw; }\n  .form-results .results-container {\n    font-size: 2.5vw; }\n    .form-results .results-container .results-description {\n      font-size: 2.5vw; } }\n\n@media only screen and (min-width: 1024px) {\n  .title {\n    font-size: 4vh;\n    line-height: 5vh; }\n  .starter-form .description {\n    font-size: 0.9em;\n    line-height: 3vh; }\n  input, button {\n    padding: 1vw;\n    font-size: 0.9em;\n    margin: 10px 0; }\n  .form-loader.display-on .favicon i {\n    font-size: 3vw; }\n  .form-results #results-intro #results-text {\n    font-size: 0.9em; }\n  .form-results .results-container {\n    font-size: 0.9em; }\n    .form-results .results-container .results-description {\n      font-size: 0.9em; }\n    .form-results .results-container .results-headers div,\n    .form-results .results-container .results div,\n    .form-results .results-container .results-description div {\n      height: 6vw; } }\n", "",{"version":3,"sources":["webpack://./src/client/styles/base.scss","webpack://./src/client/styles/form.scss"],"names":[],"mappings":"AAWA;EACI,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,qCAhBkC,EAAA;;AAmBtC;EACI,cAfS,EAAA;EAcb;IAIQ,cAjBW,EAAA;;AAqBnB,WAAA;AACA;EACQ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa,EAAA;EANrB;IASY,WAAW;IAGX,aAAa;IACb,sBAAsB;IACtB,uBAAuB,EAAA;EAdnC;IAsBgB,WAAW,EAAA;;AAK3B;EACA;IAGY,WAAW;IACX,YAAY,EAAA;EAJxB;IAQY,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,2BAA2B,EAAA;IAZvC;MAegB,UAAU,EAAA,EACb;;AAKb;EACI;IACI,mBAAmB,EAAA;IADvB;MAIQ,WAAW;MACX,aAAa;MACb,kBAAkB;MAClB,aAAa,EAAA;IAPrB;MAYQ,WAAW;MACX,aAAa;MAEb,kBAAkB;MAClB,uBAAuB,EAAA;MAhB/B;QAmBY,YAAY;QACZ,WAAW,EAAA,EACd;;ACjGb;EACI,uBDAiB,EAAA;;ACGrB;EACI,cDFS;ECGT,qCDRkC;ECSlC,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB,EAAA;;AAGvB;EACI,gBAAgB,EAAA;;AAGpB;EACI,kBAAkB;EACrB,wBAAwB;EACxB,yBAAyB;EACzB,sDAAsD,EAAA;EAJvD;IAOQ,aAAa,EAAA;EAPrB;IAWQ,qCD9B8B;IC+B9B,gBAAgB;IAChB,gBAAgB,EAAA;IAbxB;MAgBY,mBAAmB,EAAA;;AAK/B;EACI,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,mBDpCU;ECqCV,YAAY;EACZ,qCD9CkC;EC+ClC,gBAAgB;EAChB,cD3CS,EAAA;;AC8Cb;EACI,kBAAkB;EAClB,cDhDS;ECiDT,gBAAgB;EAChB,gBAAgB,EAAA;EAJpB;IAOQ,mBDjDW;ICkDX,eAAe;IACf,iBAAiB,EAAA;;AAIzB;EACI,cD5DS;EC6DT,qCDlEkC;ECmElC,gBDlEa,EAAA;;ACsEjB;EACI,cDlEe;ECmEf,gBAAgB;EAChB,kBAAkB,EAAA;;AAGtB;EACI,aAAa,EAAA;EADjB;IAIQ,cAAc;IACd,YAAY;IACZ,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,mBAAmB,EAAA;IAT3B;MAYY,WAAW;MACX,YAAY;MACZ,kBAAkB;MAElB,mBAAmB;MACnB,wDAAwD;MACxD,gDAAgD,EAAA;MAlB5D;QAoBgB,cD5FH;QC6FG,cAAc,EAAA;;AAIpB;EACE;IAAK,2BAA2B,EAAA;EAChC;IACE,2BAA6B;IAC7B,UAAU,EAAA,EAAA;;AAId;EACE;IACE,2BAA2B;IAC3B,mBAAmB,EAAA;EACnB;IACA,2BAA6B;IAC7B,mBAAqB,EAAA,EAAA;;AAQnC;EACI,aAAa,EAAA;EADjB;IAIQ,cAAc;IACd,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa,EAAA;EAVrB;IAcQ,oBAAoB,EAAA;IAd5B;MAiBQ,gBAAgB,EAAA;IAjBxB;MAqBQ,kBAAkB,EAAA;EArB1B;IA0BQ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,gBAAgB,EAAA;IA7BxB;MAgCY,gBAAgB;MAChB,UAAU,EAAA;IAjCtB;MAqCc,UAAU;MACV,cAAc,EAAA;IAtC5B;;;MA4CY,aAAa;MACb,sBAAsB,EAAA;MA7ClC;;;QA+CgB,mBDnKF;QCoKE,cDvKH;QCwKG,kBAAkB;QAClB,YAAY;QACZ,iBAAiB;QACjB,aAAa;QACb,mBAAmB,EAAA;MArDnC;;;QAyDgB,qBAAqB,EAAA;;AAMrC;EACI,aAAa,EAAA;EADjB;IAIQ,cAAc;IACd,gBAAgB,EAAA;;AAIxB,kBAAA;AACA;EACI;IACI,gBAAgB,EAAA;EAGpB;IAEQ,gBAAgB,EAAA;EAIxB;IACI,gBAAgB,EAAA;EAGpB;IAGY,gBAAgB,EAAA;EAH5B;IAQQ,gBAAgB,EAAA;IARxB;MAUY,gBAAgB,EAAA,EACnB;;AAKb;EACI;IACI,cAAc;IACd,gBAAgB,EAAA;EAGpB;IAEQ,gBD3OK;IC4OL,gBAAgB,EAAA;EAIxB;IACI,YAAY;IACZ,gBDlPS;ICmPT,cAAc,EAAA;EAGlB;IAIgB,cAAc,EAAA;EAM9B;IAGY,gBDnQC,EAAA;ECgQb;IAQQ,gBDxQK,EAAA;ICgQb;MAUY,gBD1QC,EAAA;ICgQb;;;MAgBY,WAAW,EAAA,EACd","sourcesContent":["$font-family: 'Montserrat', sans-serif;\n$font-size: 0.9em;\n\n$main-bg: transparent;\n\n$red: #7d1538;\n$red-hover: #bc2c1a;\n\n$blue: #d3f3ee;\n$blue-text: #7fb7be;\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    font-family: $font-family;\n}\n\na {\n    color: $red;\n\n    &:hover {\n        color: $red-hover;\n    }\n}\n\n/* MOBILE */\n#container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        width: 100vw;\n        height: 100vh;\n\n        #col1, #col2 {\n            width: 80vw;\n            // height: 40vh;\n            // background: green;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n        }\n\n        #col2 {\n            // height: 35vh;\n            // background: red;\n\n            #analysis-img {\n                width: 100%;\n            }\n        }\n    }\n\n@media only screen and (min-width: 768px) {\n#container {\n\n        #col1 {\n            width: 65vw;\n            height: 50vh;\n        }\n\n        #col2 {\n            width: 65vw;\n            height: 20vh;\n            display: flex;\n            align-items: center;\n            justify-content: flex-start;\n\n            #analysis-img {\n                width: 60%;\n            }\n        }\n    }\n}\n\n@media only screen and (min-width: 1025px) {\n    #container {\n        flex-direction: row;\n\n        #col1 {\n            width: 50vw;\n            height: 100vh;\n            margin: 0 0 0 50px;\n            padding: 50px;\n            // background: red;\n        }\n\n        #col2 {\n            width: 50vw;\n            height: 100vh;\n            // background: pink;\n            margin: 0 50px 0 0;\n            justify-content: center;\n\n            #analysis-img {\n                height: auto;\n                width: 100%;\n            }\n        }\n    }\n}\n","@import 'base.scss';\n\nform {\n    background: $main-bg;\n}\n\n.title {\n    color: $red;\n    font-family: $font-family;\n    font-weight: 400;\n    font-size: 5.5vw;\n    line-height: 3.5vh;\n    margin-bottom: 20px;\n}\n\n.heavy-font {\n    font-weight: 700;\n}\n\n.starter-form {\n    overflow-y: hidden;\n\ttransition-property: all;\n\ttransition-duration: 1.3s;\n\ttransition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n\n    &.closed {\n        max-height: 0;\n    }\n\n    .description {\n        font-family: $font-family;\n        font-size: 3.5vw;\n        line-height: 4vw;\n\n        p {\n            margin-bottom: 20px;\n        }\n    }\n}\n\ninput, button {\n    padding: 2vw;\n    width: 100%;\n    margin: 0 0 20px 0;\n    background: $blue;\n    border: none;\n    font-family: $font-family;\n    font-size: 3.5vw;\n    color: $red;\n}\n\nbutton {\n    margin: 0 0 40px 0;\n    color: $red;\n    text-align: left;\n    font-size: 3.5vw;\n\n    &:hover {\n        background: $blue-text;\n        cursor: pointer;\n        transition: 500ms;\n    }\n}\n\ninput::placeholder {\n    color: $red;\n    font-family: $font-family;\n    font-size: $font-size;\n\n}\n\n#disclaimer {\n    color: $red-hover;\n    font-size: 0.7em;\n    text-align: center;\n}\n\n.form-loader {\n    display: none;\n\n    &.display-on {\n        display: block;\n        height: 35vh;\n        margin: 10px 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        .favicon {\n            width: 40px;\n            height: 40px;\n            margin: 100px auto;\n\n            border-radius: 100%;\n            -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n            animation: sk-scaleout 1.0s infinite ease-in-out;\n            i {\n                color: $red;\n                font-size: 8vw;\n            }\n        //   }\n\n          @-webkit-keyframes sk-scaleout {\n            0% { -webkit-transform: scale(0) }\n            100% {\n              -webkit-transform: scale(1.0);\n              opacity: 0;\n            }\n          }\n\n          @keyframes sk-scaleout {\n            0% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n            } 100% {\n              -webkit-transform: scale(1.0);\n              transform: scale(1.0);\n            }\n          }\n    }\n\n    }\n}\n\n.form-results {\n    display: none;\n\n    &.display-on {\n        display: block;\n        border-radius: 5px;\n        height: 35vh;\n        overflow-y: scroll;\n        border: 4px solid #e6e6e6;\n        border-radius: 5px;\n        padding: 10px;\n    }\n\n    #results-intro {\n        padding-bottom: 20px;\n\n        #results-text {\n        font-size: 3.5vw;\n        }\n\n        #outlet {\n        font-style: italic;\n        }\n    }\n\n    .results-container {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        font-size: 3.5vw;\n\n          .results {\n            font-weight: 700;\n            width: 45%;\n          }\n\n          .results-description {\n              width: 55%;\n              font-size: 3vw;\n          }\n\n          .results-headers,\n          .results,\n          .results-description {\n            display: flex;\n            flex-direction: column;\n            div {\n                background: $blue;\n                color: $red;\n                margin: 0 0 10px 0;\n                height: 25vw;\n                padding: 5px 10px;\n                display: flex;\n                align-items: center;\n            }\n\n            .meaning-cloud-data {\n                word-wrap: break-word;\n            }\n        }\n    }\n}\n\n.back-btn {\n    display: none;\n\n    &.display-on {\n        display: block;\n        margin-top: 10px;\n    }\n}\n\n/* TABLET STYLES */\n@media only screen and (min-width: 768px) {\n    .title {\n        font-size: 3.5vw;\n    }\n\n    .starter-form {\n        .description {\n            font-size: 2.5vw;\n        }\n    }\n\n    input, button {\n        font-size: 2.5vw;\n    }\n\n    .form-results {\n        #results-intro {\n            #results-text {\n                font-size: 2.5vw;\n            }\n        }\n\n        .results-container {\n            font-size: 2.5vw;\n            .results-description {\n                font-size: 2.5vw;\n            }\n        }\n    }\n}\n\n@media only screen and (min-width: 1024px) {\n    .title {\n        font-size: 4vh;\n        line-height: 5vh;\n    }\n\n    .starter-form {\n        .description {\n            font-size: $font-size;\n            line-height: 3vh;\n        }\n    }\n\n    input, button {\n        padding: 1vw;\n        font-size: $font-size;\n        margin: 10px 0;\n    }\n\n    .form-loader {\n        &.display-on {\n            .favicon {\n                i {\n                    font-size: 3vw;\n                }\n        }\n        }\n    }\n\n    .form-results {\n        #results-intro {\n            #results-text {\n                font-size: $font-size;\n            }\n        }\n\n        .results-container {\n            font-size: $font-size;\n            .results-description {\n                font-size: $font-size;\n            }\n            .results-headers,\n            .results,\n            .results-description {\n            div {\n                height: 6vw;\n            }\n        }\n    }\n}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif; }\n\na {\n  color: #7d1538; }\n  a:hover {\n    color: #bc2c1a; }\n\n/* MOBILE */\n#container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh; }\n  #container #col1, #container #col2 {\n    width: 80vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n  #container #col2 #analysis-img {\n    width: 100%; }\n\n@media only screen and (min-width: 768px) {\n  #container #col1 {\n    width: 65vw;\n    height: 50vh; }\n  #container #col2 {\n    width: 65vw;\n    height: 20vh;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n    #container #col2 #analysis-img {\n      width: 60%; } }\n\n@media only screen and (min-width: 1025px) {\n  #container {\n    flex-direction: row; }\n    #container #col1 {\n      width: 50vw;\n      height: 100vh;\n      margin: 0 0 0 50px;\n      padding: 50px; }\n    #container #col2 {\n      width: 50vw;\n      height: 100vh;\n      margin: 0 50px 0 0;\n      justify-content: center; }\n      #container #col2 #analysis-img {\n        height: auto;\n        width: 100%; } }\n\nheader {\n  font-size: 4.5vw;\n  /* MOBILE NAV */ }\n  header i {\n    padding-right: 2px; }\n  header #head-left {\n    font-family: \"Montserrat\", sans-serif;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    color: #7d1538; }\n  header #head-right {\n    display: none; }\n  header .hamburger-icon {\n    display: block;\n    color: #7d1538;\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    font-size: 1.2em; }\n  header .hamburger-icon:hover {\n    cursor: pointer; }\n  header .hamburger-none {\n    display: none; }\n  header .mobile-nav {\n    display: block;\n    height: 100vh;\n    width: 100vw;\n    background: #d3f3ee;\n    z-index: 100;\n    position: fixed;\n    top: 0; }\n    header .mobile-nav .nav-list {\n      position: absolute;\n      top: 60px;\n      right: 60px;\n      text-align: right;\n      font-weight: 300; }\n      header .mobile-nav .nav-list .nav-links {\n        font-size: 8vw;\n        line-height: 9vw; }\n  header .close-btn {\n    display: none; }\n  header .close-btn-active {\n    display: block;\n    color: #7d1538;\n    font-size: 1.2em;\n    position: absolute;\n    top: 20px;\n    right: 20px; }\n  header .close-btn-active:hover {\n    cursor: pointer; }\n\n@media only screen and (min-width: 768px) {\n  header {\n    font-size: 2.5vw; }\n    header #head-left {\n      width: 50%;\n      text-align: left; }\n    header #head-right {\n      font-family: \"Montserrat\", sans-serif;\n      position: absolute;\n      top: 0;\n      right: 0;\n      padding: 20px;\n      width: 50%;\n      text-align: right;\n      display: flex;\n      flex-direction: column;\n      line-height: 4vw; }\n    header .nav, header .hamburger-icon {\n      display: none; } }\n\n@media only screen and (min-width: 1024px) {\n  header {\n    font-size: 2vh; }\n    header #head-right {\n      line-height: 2.5vh;\n      right: 10px; } }\n", "",{"version":3,"sources":["webpack://./src/client/styles/base.scss","webpack://./src/client/styles/header.scss"],"names":[],"mappings":"AAWA;EACI,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,qCAhBkC,EAAA;;AAmBtC;EACI,cAfS,EAAA;EAcb;IAIQ,cAjBW,EAAA;;AAqBnB,WAAA;AACA;EACQ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa,EAAA;EANrB;IASY,WAAW;IAGX,aAAa;IACb,sBAAsB;IACtB,uBAAuB,EAAA;EAdnC;IAsBgB,WAAW,EAAA;;AAK3B;EACA;IAGY,WAAW;IACX,YAAY,EAAA;EAJxB;IAQY,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,2BAA2B,EAAA;IAZvC;MAegB,UAAU,EAAA,EACb;;AAKb;EACI;IACI,mBAAmB,EAAA;IADvB;MAIQ,WAAW;MACX,aAAa;MACb,kBAAkB;MAClB,aAAa,EAAA;IAPrB;MAYQ,WAAW;MACX,aAAa;MAEb,kBAAkB;MAClB,uBAAuB,EAAA;MAhB/B;QAmBY,YAAY;QACZ,WAAW,EAAA,EACd;;ACjGb;EACI,gBAAgB;EAqBhB,eAAA,EAAgB;EAtBpB;IAIQ,kBAAkB,EAAA;EAJ1B;IAQQ,qCDV8B;ICW9B,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,cDZK,EAAA;ECHb;IAmBQ,aAAa,EAAA;EAnBrB;IAwBI,cAAc;IACd,cDtBS;ICuBT,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,gBAAgB,EAAA;EA7BpB;IAiCI,eAAe,EAAA;EAjCnB;IAqCI,aAAa,EAAA;EArCjB;IAyCI,cAAc;IACd,aAAa;IACb,YAAY;IACZ,mBDtCU;ICuCV,YAAY;IACZ,eAAe;IACf,MAAM,EAAA;IA/CV;MAkDY,kBAAkB;MAClB,SAAS;MACT,WAAW;MACX,iBAAiB;MACjB,gBAAgB,EAAA;MAtD5B;QAyDgB,cAAc;QACd,gBAAgB,EAAA;EA1DhC;IAgEI,aAAa,EAAA;EAhEjB;IAoEI,cAAc;IACd,cDlES;ICmET,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;IACT,WAAW,EAAA;EAzEf;IA6EI,eAAe,EAAA;;AAInB;EACI;IACI,gBAAgB,EAAA;IADpB;MAIQ,UAAU;MACV,gBAAgB,EAAA;IALxB;MASQ,qCD7F0B;MC8F1B,kBAAkB;MAClB,MAAM;MACN,QAAQ;MACR,aAAa;MACb,UAAU;MACV,iBAAiB;MACjB,aAAa;MACb,sBAAsB;MACtB,gBAAgB,EAAA;IAlBxB;MAsBQ,aAAa,EAAA,EAChB;;AAIT;EACI;IACI,cAAc,EAAA;IADlB;MAGQ,kBAAkB;MAClB,WAAW,EAAA,EACd","sourcesContent":["$font-family: 'Montserrat', sans-serif;\n$font-size: 0.9em;\n\n$main-bg: transparent;\n\n$red: #7d1538;\n$red-hover: #bc2c1a;\n\n$blue: #d3f3ee;\n$blue-text: #7fb7be;\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    font-family: $font-family;\n}\n\na {\n    color: $red;\n\n    &:hover {\n        color: $red-hover;\n    }\n}\n\n/* MOBILE */\n#container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        width: 100vw;\n        height: 100vh;\n\n        #col1, #col2 {\n            width: 80vw;\n            // height: 40vh;\n            // background: green;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n        }\n\n        #col2 {\n            // height: 35vh;\n            // background: red;\n\n            #analysis-img {\n                width: 100%;\n            }\n        }\n    }\n\n@media only screen and (min-width: 768px) {\n#container {\n\n        #col1 {\n            width: 65vw;\n            height: 50vh;\n        }\n\n        #col2 {\n            width: 65vw;\n            height: 20vh;\n            display: flex;\n            align-items: center;\n            justify-content: flex-start;\n\n            #analysis-img {\n                width: 60%;\n            }\n        }\n    }\n}\n\n@media only screen and (min-width: 1025px) {\n    #container {\n        flex-direction: row;\n\n        #col1 {\n            width: 50vw;\n            height: 100vh;\n            margin: 0 0 0 50px;\n            padding: 50px;\n            // background: red;\n        }\n\n        #col2 {\n            width: 50vw;\n            height: 100vh;\n            // background: pink;\n            margin: 0 50px 0 0;\n            justify-content: center;\n\n            #analysis-img {\n                height: auto;\n                width: 100%;\n            }\n        }\n    }\n}\n","@import 'base.scss';\n\nheader {\n    font-size: 4.5vw;\n\n    i {\n        padding-right: 2px;\n    }\n\n    #head-left {\n        font-family: $font-family;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        text-align: center;\n        padding: 20px;\n        color: $red;\n    }\n\n    #head-right {\n        display: none;\n    }\n\n    /* MOBILE NAV */\n.hamburger-icon {\n    display: block;\n    color: $red;\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    font-size: 1.2em;\n}\n\n.hamburger-icon:hover {\n    cursor: pointer;\n}\n\n.hamburger-none {\n    display: none;\n}\n\n.mobile-nav {\n    display: block;\n    height: 100vh;\n    width: 100vw;\n    background: $blue;\n    z-index: 100;\n    position: fixed;\n    top: 0;\n\n    .nav-list {\n            position: absolute;\n            top: 60px;\n            right: 60px;\n            text-align: right;\n            font-weight: 300;\n\n            .nav-links {\n                font-size: 8vw;\n                line-height: 9vw;\n            }\n    }\n}\n\n.close-btn {\n    display: none;\n}\n\n.close-btn-active {\n    display: block;\n    color: $red;;\n    font-size: 1.2em;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n}\n\n.close-btn-active:hover {\n    cursor: pointer;\n}\n}\n\n@media only screen and (min-width: 768px) {\n    header {\n        font-size: 2.5vw;\n\n        #head-left {\n            width: 50%;\n            text-align: left;\n        }\n\n        #head-right {\n            font-family: $font-family;\n            position: absolute;\n            top: 0;\n            right: 0;\n            padding: 20px;\n            width: 50%;\n            text-align: right;\n            display: flex;\n            flex-direction: column;\n            line-height: 4vw;\n        }\n\n        .nav, .hamburger-icon {\n            display: none;\n        }\n    }\n}\n\n@media only screen and (min-width: 1024px) {\n    header {\n        font-size: 2vh;\n        #head-right {\n            line-height: 2.5vh;\n            right: 10px;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/resets.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/resets.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n* {\n  box-sizing: border-box; }\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-decoration: none; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nul {\n  list-style-type: none; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/resets.scss"],"names":[],"mappings":"AAAA;;;CAGC;AAED;EACI,sBAAsB,EAAA;;AAG1B;;;;;;;;;;;;;EAaC,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;EACxB,qBAAqB,EAAA;;AAEtB,gDAAA;AACA;;EAEC,cAAc,EAAA;;AAEf;EACC,cAAc,EAAA;;AAEf;EACC,gBAAgB,EAAA;;AAEjB;EACC,YAAY,EAAA;;AAEb;;EAEC,WAAW;EACX,aAAa,EAAA;;AAEd;EACC,yBAAyB;EACzB,iBAAiB,EAAA;;AAElB;EACI,qBAAqB,EAAA","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n* {\n    box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n\ttext-decoration: none;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\nul {\n    list-style-type: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

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
        alert('Invalid URL!');
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


// import Favicon from '../imgs/favicon.png'
// import AnalysisImg from '../imgs/analysis.svg'

// // load in images
// const faviconImg = document.querySelector('#favicon-img');
// const analysisImg = document.querySelector('#analysis-img');
// faviconImg.href = Favicon;
// analysisImg.src = AnalysisImg;

document.addEventListener('DOMContentLoaded', function () {
    let formBtn = document.querySelector('#submit-btn');
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

    // send valid URL to server + analyze with MeaningCloud
    await Object(_sendData_js__WEBPACK_IMPORTED_MODULE_1__["sendData"])('/passURL', { url: validURL });
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
    hamIcon.addEventListener('click', activeNav);
});

const restingNav = () => {
    hamIcon.classList.remove('hamburger-none');
    document.querySelector('nav').classList.add('nav');
    document.querySelector('nav').classList.remove('mobile-nav');
    closeBtn.classList.remove('close-btn-active');
    document.querySelector('.nav-list').innerHTML = '';
};

const activeNav = () => {
    hamIcon.classList.add('hamburger-none');

    const navItems = document.getElementsByClassName('nav-links');
    document.querySelector('.nav-list').innerHTML =
        `${navItems[0].outerHTML}<br>
        ${navItems[1].outerHTML}<br>
        ${navItems[2].outerHTML}<br>
        ${navItems[3].outerHTML}<br>`;

    document.querySelector('nav').classList.add('mobile-nav');
    document.querySelector('nav').classList.remove('nav');
    closeBtn.classList.add('close-btn-active');
    closeBtn.addEventListener('click', restingNav);
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/client/styles/form.scss":
/*!*************************************!*\
  !*** ./src/client/styles/form.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./form.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/form.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/client/styles/header.scss":
/*!***************************************!*\
  !*** ./src/client/styles/header.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/client/styles/resets.scss":
/*!***************************************!*\
  !*** ./src/client/styles/resets.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_resets_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./resets.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/resets.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_resets_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_resets_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map