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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/blocks/section-column/style.sass":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/blocks/section-column/style.sass ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ized-section-type-container {\n  margin-bottom: 15px;\n  margin-top: 5px; }\n  .ized-section-type-container .ized-section-type {\n    text-transform: uppercase;\n    padding: 3px 15px;\n    padding-bottom: 5px;\n    position: relative;\n    cursor: pointer;\n    transition: all .5s;\n    font-weight: bold;\n    background-color: transparent;\n    display: inline-block;\n    border-radius: 3px; }\n    .ized-section-type-container .ized-section-type:before, .ized-section-type-container .ized-section-type:after {\n      content: '[';\n      position: absolute;\n      transition: all .3s;\n      top: 3px; }\n    .ized-section-type-container .ized-section-type:before {\n      content: '[';\n      left: 8px; }\n    .ized-section-type-container .ized-section-type:after {\n      content: ']';\n      right: 8px; }\n    .ized-section-type-container .ized-section-type:hover:before {\n      left: 5px; }\n    .ized-section-type-container .ized-section-type:hover:after {\n      right: 5px; }\n  .ized-section-type-container .ized-section-type.active {\n    background-color: #555d66;\n    color: #fff; }\n\n.ized-bootstrap-size {\n  display: flex; }\n  .ized-bootstrap-size .ized-bootstrap-size-label {\n    min-width: 45px;\n    text-align: center;\n    padding: 0 5px;\n    font-size: 16px;\n    text-transform: uppercase;\n    line-height: 30px;\n    margin-right: 5px;\n    margin-top: 1px;\n    margin-bottom: auto;\n    background-color: #555d66;\n    color: #fff;\n    border-radius: 3px; }\n  .ized-bootstrap-size .ized-bootstrap-size-select {\n    flex-basis: 100%;\n    margin-bottom: 0 !important; }\n\n.ized-section-layout-container {\n  display: flex;\n  flex-wrap: wrap; }\n  .ized-section-layout-container .ized-section-layout {\n    flex-basis: 25%;\n    padding: 5px; }\n    .ized-section-layout-container .ized-section-layout .ized-section-layout-row {\n      margin-right: -2px;\n      margin-left: -2px;\n      border: 1px solid #aaa;\n      border-radius: 3px;\n      padding: 2px;\n      height: 100%;\n      transition: all .3s;\n      cursor: pointer; }\n      .ized-section-layout-container .ized-section-layout .ized-section-layout-row .ized-section-layout-col {\n        padding: 1px; }\n        .ized-section-layout-container .ized-section-layout .ized-section-layout-row .ized-section-layout-col:before {\n          content: '';\n          background-color: #555d66;\n          min-height: 15px;\n          display: block;\n          transition: all .3s; }\n    .ized-section-layout-container .ized-section-layout .ized-section-layout-row:hover, .ized-section-layout-container .ized-section-layout .ized-section-layout-row.active {\n      background-color: #007cba;\n      border-color: #007cba; }\n      .ized-section-layout-container .ized-section-layout .ized-section-layout-row:hover .ized-section-layout-col:before, .ized-section-layout-container .ized-section-layout .ized-section-layout-row.active .ized-section-layout-col:before {\n        background-color: #fff; }\n\n.ized-section-row > .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: flex;\n  margin: 0 -15px;\n  flex-wrap: wrap; }\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n  @media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid, .container-sm, .container-md, .container-lg, .container-xl {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n@media (min-width: 576px) {\n  .container, .container-sm {\n    max-width: 540px; } }\n\n@media (min-width: 768px) {\n  .container, .container-sm, .container-md {\n    max-width: 720px; } }\n\n@media (min-width: 992px) {\n  .container, .container-sm, .container-md, .container-lg {\n    max-width: 960px; } }\n\n@media (min-width: 1200px) {\n  .container, .container-sm, .container-md, .container-lg, .container-xl {\n    max-width: 1140px; } }\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.row-cols-1 > * {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.row-cols-2 > * {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.row-cols-3 > * {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.row-cols-4 > * {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.row-cols-5 > * {\n  flex: 0 0 20%;\n  max-width: 20%; }\n\n.row-cols-6 > * {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%; }\n\n.col-1 {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-2 {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-5 {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-8 {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-11 {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first {\n  order: -1; }\n\n.order-last {\n  order: 13; }\n\n.order-0 {\n  order: 0; }\n\n.order-1 {\n  order: 1; }\n\n.order-2 {\n  order: 2; }\n\n.order-3 {\n  order: 3; }\n\n.order-4 {\n  order: 4; }\n\n.order-5 {\n  order: 5; }\n\n.order-6 {\n  order: 6; }\n\n.order-7 {\n  order: 7; }\n\n.order-8 {\n  order: 8; }\n\n.order-9 {\n  order: 9; }\n\n.order-10 {\n  order: 10; }\n\n.order-11 {\n  order: 11; }\n\n.order-12 {\n  order: 12; }\n\n.offset-1 {\n  margin-left: 8.33333%; }\n\n.offset-2 {\n  margin-left: 16.66667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333%; }\n\n.offset-5 {\n  margin-left: 41.66667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333%; }\n\n.offset-8 {\n  margin-left: 66.66667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333%; }\n\n.offset-11 {\n  margin-left: 91.66667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-sm-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-sm-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-sm-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-sm-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-sm-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-sm-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-sm-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    order: -1; }\n  .order-sm-last {\n    order: 13; }\n  .order-sm-0 {\n    order: 0; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333%; }\n  .offset-sm-2 {\n    margin-left: 16.66667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333%; }\n  .offset-sm-5 {\n    margin-left: 41.66667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333%; }\n  .offset-sm-8 {\n    margin-left: 66.66667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333%; }\n  .offset-sm-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-md-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-md-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-md-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-md-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-md-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-md-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-md-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    order: -1; }\n  .order-md-last {\n    order: 13; }\n  .order-md-0 {\n    order: 0; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333%; }\n  .offset-md-2 {\n    margin-left: 16.66667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333%; }\n  .offset-md-5 {\n    margin-left: 41.66667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333%; }\n  .offset-md-8 {\n    margin-left: 66.66667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333%; }\n  .offset-md-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-lg-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-lg-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-lg-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-lg-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-lg-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-lg-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    order: -1; }\n  .order-lg-last {\n    order: 13; }\n  .order-lg-0 {\n    order: 0; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333%; }\n  .offset-lg-2 {\n    margin-left: 16.66667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333%; }\n  .offset-lg-5 {\n    margin-left: 41.66667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333%; }\n  .offset-lg-8 {\n    margin-left: 66.66667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333%; }\n  .offset-lg-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-xl-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-xl-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-xl-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-xl-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-xl-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-xl-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-xl-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    order: -1; }\n  .order-xl-last {\n    order: 13; }\n  .order-xl-0 {\n    order: 0; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333%; }\n  .offset-xl-2 {\n    margin-left: 16.66667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333%; }\n  .offset-xl-5 {\n    margin-left: 41.66667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333%; }\n  .offset-xl-8 {\n    margin-left: 66.66667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333%; }\n  .offset-xl-11 {\n    margin-left: 91.66667%; } }\n", ""]);
// Exports
module.exports = exports;


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
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

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

  if (sourceMap && btoa) {
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

/***/ "./src/blocks/gutenberg-blocks.js":
/*!****************************************!*\
  !*** ./src/blocks/gutenberg-blocks.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _section_column___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section-column/ */ "./src/blocks/section-column/index.js");

/**
 * Ajouter les différents IMPORT des dossiers contenant les BLOCKS
 *
 */

/***/ }),

/***/ "./src/blocks/section-column/col.js":
/*!******************************************!*\
  !*** ./src/blocks/section-column/col.js ***!
  \******************************************/
/*! exports provided: colAttributes, ColEdit, HOCbootstrap, saveColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colAttributes", function() { return colAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColEdit", function() { return ColEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOCbootstrap", function() { return HOCbootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveColumn", function() { return saveColumn; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__);














/******************************************
 * VARs
 ******************************************/

var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["select"])('core/block-editor'),
    getBlockCount = _select.getBlockCount; //--- mapping des Tailles Bootstrap


var sizeMap = {
  xs: 0,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4
};
var arrayMap = ['xs', 'sm', 'md', 'lg', 'xl']; //--- Taille par défaut d'une nouvelle colonne

var defaultSizes = [12, // XS
0, // SM
6, // MD
0, // LG
0 // XL
];
/******************************************
 * ATTRIBUTES
 * https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/
 ******************************************/

var colAttributes = {
  className: {
    type: 'string'
  },
  bootstrapSize: {
    type: 'array',
    default: defaultSizes
  },
  bootstrapOffset: {
    type: 'array',
    default: [0, 0, 0, 0, 0]
  }
};
/******************************************
 * COLUMN BLOCK EDIT
 * en utilisant une class REACT
 * Component est l'équivalent à la class React.Component
 * avec des "ajouts" propres à Gutenberg
 * (ex: attributes, setAttributes)
 ******************************************/

var ColEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ColEdit, _Component);

  function ColEdit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ColEdit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ColEdit).apply(this, arguments));
    _this.BootstrapSizeMenu = _this.BootstrapSizeMenu.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.setSize = _this.setSize.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.setEtat = _this.setEtat.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)); //--- VAR STATE

    _this.state = {
      allSize: false,
      allOrder: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ColEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {//do something
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {//do something
    }
  }, {
    key: "setEtat",
    value: function setEtat(obj) {
      this.setState(obj);
    }
  }, {
    key: "setSize",
    value: function setSize(_ref) {
      var size = _ref.size,
          col = _ref.col,
          type = _ref.type;
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var bootstrapSize = attributes.bootstrapSize,
          bootstrapOffset = attributes.bootstrapOffset;
      var numSize,
          replace,
          newSize = [];

      switch (type) {
        case 'col':
          replace = bootstrapSize;
          break;

        case 'order':
          replace = bootstrapOffset;
          break;
      } //--- retrouve le N° de mappage correspondant


      numSize = sizeMap[size];

      for (var i = 0; i < replace.length; i++) {
        if (i === numSize) newSize.push(col);else newSize.push(replace[i]);
      }

      if (type === 'col') setAttributes({
        bootstrapSize: newSize
      });
      if (type === 'order') setAttributes({
        bootstrapOffset: newSize
      });
    }
    /**
     * affiche le menu déroulant pour la taille voulue,
     * autant pour gérer les class col-XX que order-XX de Bootstrap
     *
     * @param size      la taille pour laquelle est retournée le <SelectControl>
     *                  ['xs', 'md', 'xl'] par défaut
     *
     * @param type      le type de class bootstrap: COL ou ORDER
     *
     * @returns {*}     le menu avec l'icone de la taille et le <SelectControl> approprié
     */

  }, {
    key: "BootstrapSizeMenu",
    value: function BootstrapSizeMenu(_ref2) {
      var _this2 = this;

      var size = _ref2.size,
          type = _ref2.type;
      var _this$props$attribute = this.props.attributes,
          bootstrapSize = _this$props$attribute.bootstrapSize,
          bootstrapOffset = _this$props$attribute.bootstrapOffset;
      var numSize;
      var options = [{
        label: 'auto',
        value: 0
      }]; //--- retrouve le N° de mappage correspondant

      numSize = sizeMap[size];
      var value = type === 'col' ? bootstrapSize[numSize] : bootstrapOffset[numSize]; //--- construction des options sur 12 col
      //--- idem pour SIZE que ORDER

      for (var i = 0; i < 12; i++) {
        options.push({
          label: i + 1,
          value: i + 1
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: 'ized-bootstrap-size'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: 'ized-bootstrap-size-label'
      }, size), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
        value: value,
        className: 'ized-bootstrap-size-select',
        options: options,
        onChange: function onChange(val) {
          return _this2.setSize({
            size: size,
            col: parseInt(val),
            type: type
          });
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          clientId = _this$props2.clientId,
          setAttributes = _this$props2.setAttributes,
          attributes = _this$props2.attributes;
      var _this$state = this.state,
          allSize = _this$state.allSize,
          allOrder = _this$state.allOrder;
      /**
       * Si ce bloc contient quelque chose (children)
       * recherche getBlockCount() en utilisant son propre cliendId
       */

      var hasChild = getBlockCount(clientId) > 0;
      /**
       * Les tailles XL - MD - XS sont affichées par défaut (allSize==false)
       * Sinon afficher toutes les tailles (allSize==true)
       */

      var sizeArray = allSize ? ['xs', 'sm', 'md', 'lg', 'xl'] : ['xs', 'md', 'xl'];
      var orderArray = allOrder ? ['xs', 'sm', 'md', 'lg', 'xl'] : ['xs', 'md', 'xl'];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Column Size')
      }, sizeArray.map(function (size) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_this3.BootstrapSizeMenu, {
          type: 'col',
          size: size
        });
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["CheckboxControl"], {
        label: "Toutes les tailles",
        checked: allSize,
        onChange: function onChange(val) {
          return _this3.setEtat({
            allSize: val
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Column Order')
      }, orderArray.map(function (size) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_this3.BootstrapSizeMenu, {
          type: 'order',
          size: size
        });
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["CheckboxControl"], {
        label: "Toutes les tailles",
        checked: allOrder,
        onChange: function onChange(val) {
          return _this3.setEtat({
            allOrder: val
          });
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["InnerBlocks"], {
        templateLock: false,
        renderAppender: hasChild ? undefined : function () {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["InnerBlocks"].ButtonBlockAppender, null);
        }
      })));
    }
  }]);

  return ColEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);
/******************************************
 * HIGH ORDER COMPONENT
 * afin d'accéder au DOM racine du composant [BlockListBlock]
 * pour lui appliquer une class bootstrap.
 ******************************************/

var HOCbootstrap = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__["createHigherOrderComponent"])(function (BlockListBlock) {
  // console.log( BlockListBlock );
  return function (props) {
    if (props.name === 'ized-gutenberg/section-col') {
      var attributes = props.attributes;
      var bootstrapSize = attributes.bootstrapSize,
          bootstrapOffset = attributes.bootstrapOffset;
      var className = '';

      if (bootstrapSize) {
        className = 'col-md-' + bootstrapSize[2];
      }

      if (bootstrapOffset && bootstrapOffset[2] !== 0) {
        className += ' order-md-' + bootstrapOffset[2];
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BlockListBlock, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        className: className
      }));
    } else return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BlockListBlock, props);
  };
}, 'HOCbootstrap');
/******************************************
 * COLUMNS BLOCK SAVE
 ******************************************/

function saveColumn(props) {
  var _props$attributes = props.attributes,
      bootstrapSize = _props$attributes.bootstrapSize,
      bootstrapOffset = _props$attributes.bootstrapOffset;
  var classBlock = '';
  /**
   * Génère les class Bootstrap selon les attributs.
   *
   * @param bootstrapArray    bootstrapSize || bootstrapOffset
   * @param type              col- || order-
   */

  function setClass(bootstrapArray, type) {
    bootstrapArray.map(function (val, i) {
      var prepend;

      if (val > 0) {
        //--- génère col-XX || order-XX pour la taille XS
        //--- ou col-sm-XX || order-sm-XX en fonction des autres tailles
        if (i == 0) prepend = type;else prepend = type + arrayMap[i] + '-';
        classBlock += ' ' + prepend + val;
      }
    });
  } //--- construction de la class bootstrap


  setClass(bootstrapSize, 'col-');
  setClass(bootstrapOffset, 'order-');
  if (props.className) classBlock += ' ' + props.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
    className: classBlock
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["InnerBlocks"].Content, null));
}

/***/ }),

/***/ "./src/blocks/section-column/index.js":
/*!********************************************!*\
  !*** ./src/blocks/section-column/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registerSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerSection */ "./src/blocks/section-column/registerSection.js");
/* harmony import */ var _registerCol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerCol */ "./src/blocks/section-column/registerCol.js");



/***/ }),

/***/ "./src/blocks/section-column/registerCol.js":
/*!**************************************************!*\
  !*** ./src/blocks/section-column/registerCol.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./col */ "./src/blocks/section-column/col.js");



/**
 * Enregistre le bloc pour son utilisation avec Gutenberg
 * Structure d'un bloc :
 * https://developer.wordpress.org/block-editor/developers/block-api/block-registration/
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('ized-gutenberg/section-col', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Colonne', 'ized-gutenberg'),

  /**
   * Spécifie un parent dans lequel le block pourra se glisser
   */
  parent: ['ized-gutenberg/section-row'],
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Une colonne avec pleins de propriétés', 'ized-gutenberg'),

  /**
   * OBJECT SVG ou tag Dashicons
   * https://developer.wordpress.org/resource/dashicons/
   */
  icon: 'archive',

  /**
   * Catégorie disponibles par défaut:
   *
   *   - common
   *   - formatting
   *   - layout
   *   - widgets
   *   - embed
   */
  category: 'layout',

  /**
   * https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#supports-optional
   * Différentes options spécifiques aux composants Gutenberg
   */
  supports: {
    inserter: false,
    reusable: false,
    html: false,
    className: false
  },

  /**
   * Les attributs (props) utilisés par Gutenberg pour générer les BLOCKS
   * https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/
   */
  attributes: _col__WEBPACK_IMPORTED_MODULE_2__["colAttributes"],

  /**
   * Example provides structured example data (Attributes) for the block.
   * This data is used to construct a preview for the block to be shown
   * in the Inspector Help Panel when the user mouses over the block.
   */
  example: {},

  /**
   * La fonction edit(), c'est la fonction render() de REACT qui sera utilisée
   * pour l'affichage du BLOCK dans l'édition.
   *
   * @returns JSX DOM content
   */
  edit: _col__WEBPACK_IMPORTED_MODULE_2__["ColEdit"],

  /**
   * La fonction save(), c'est la fonction render() de REACT qui sera parsée
   * en HTML pour générer le code du POST/PAGE.
   *
   * @returns JSX DOM content
   */
  save: _col__WEBPACK_IMPORTED_MODULE_2__["saveColumn"]
});
/**
 * Ajoute un FILTER [HOCbootstrap] avec HighOrderComponent afin
 * d'accéder au DOM parent de 'ized-gutenberg/section-col'
 */

wp.hooks.addFilter('editor.BlockListBlock', 'ized-gutenberg/section-col', _col__WEBPACK_IMPORTED_MODULE_2__["HOCbootstrap"]);

/***/ }),

/***/ "./src/blocks/section-column/registerSection.js":
/*!******************************************************!*\
  !*** ./src/blocks/section-column/registerSection.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./row */ "./src/blocks/section-column/row.js");



/**
 * Enregistre le bloc pour son utilisation avec Gutenberg
 * Structure d'un bloc :
 * https://developer.wordpress.org/block-editor/developers/block-api/block-registration/
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('ized-gutenberg/section-row', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Section', 'ized-gutenberg'),

  /**
   * OBJECT SVG ou tag Dashicons
   * https://developer.wordpress.org/resource/dashicons/
   */
  icon: 'layout',
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Une section pouvant recevoir divers colonnes pour agrémenter vos mise-en-page.', 'ized-gutenberg'),

  /**
   * Catégorie disponibles par défaut:
   *
   *   - common
   *   - formatting
   *   - layout
   *   - widgets
   *   - embed
   */
  category: 'layout',

  /**
   * https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#supports-optional
   * Différentes options spécifiques aux composants Gutenberg
   */
  supports: {
    html: false,
    className: false
  },

  /**
   * Les attributs (props) utilisés par Gutenberg pour générer les BLOCKS
   * https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/
   */
  attributes: _row__WEBPACK_IMPORTED_MODULE_2__["blockAttributes"],

  /**
   * Example provides structured example data (Attributes) for the block.
   * This data is used to construct a preview for the block to be shown
   * in the Inspector Help Panel when the user mouses over the block.
   */
  example: {},

  /**
   * La fonction edit(), c'est la fonction render() de REACT qui sera utilisée
   * pour l'affichage du BLOCK dans l'édition.
   *
   * @returns JSX DOM content
   */
  edit: _row__WEBPACK_IMPORTED_MODULE_2__["editColumns"],

  /**
   * La fonction save(), c'est la fonction render() de REACT qui sera parsée
   * en HTML pour générer le code du POST/PAGE.
   *
   * @returns JSX DOM content
   */
  save: _row__WEBPACK_IMPORTED_MODULE_2__["saveColumns"]
});

/***/ }),

/***/ "./src/blocks/section-column/row.js":
/*!******************************************!*\
  !*** ./src/blocks/section-column/row.js ***!
  \******************************************/
/*! exports provided: blockAttributes, editColumns, saveColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockAttributes", function() { return blockAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editColumns", function() { return editColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveColumns", function() { return saveColumns; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _section_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./section-layout */ "./src/blocks/section-column/section-layout.js");
/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./style.sass */ "./src/blocks/section-column/style.sass");
/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_sass__WEBPACK_IMPORTED_MODULE_14__);













 //--- Internals



/******************************************
 * VARs
 ******************************************/

var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/block-editor'),
    getBlocks = _select.getBlocks;

var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["dispatch"])('core/block-editor'),
    replaceInnerBlocks = _dispatch.replaceInnerBlocks;
/******************************************
 * ATTRIBUTES
 * https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/
 ******************************************/


var layoutDefault = [[12, 0, 4, 0, 0], [12, 0, 8, 0, 0]];
var blockAttributes = {
  className: {
    type: 'string'
  },
  type: {
    type: 'string',
    default: 'div'
  },
  fullWidth: {
    type: 'boolean',
    default: false
  },
  columns: {
    type: 'number',
    default: 2
  } // layout:     { type:'array',
  //               default: layoutDefault },
  // settingLayout: {type: 'boolean', default: false}

};
/******************************************
 * COLUMNS BLOCK EDIT
 ******************************************/

var editColumns =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(editColumns, _Component);

  function editColumns() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, editColumns);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(editColumns).apply(this, arguments));
    _this.ButtonType = _this.ButtonType.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.layoutBlocks = _this.layoutBlocks.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.setEtat = _this.setEtat.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)); //--- VAR STATE

    _this.state = {
      layout: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(editColumns, [{
    key: "componentDidMount",
    value: function componentDidMount() {//do something
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {} //do something
    //--- Controls du type d'élément de la section
    //--- <DIV> ou <SECTION>

  }, {
    key: "ButtonType",
    value: function ButtonType(_ref) {
      var typeB = _ref.typeB;
      var _this$props = this.props,
          setAttributes = _this$props.setAttributes,
          attributes = _this$props.attributes;
      var type = attributes.type;
      var typeC = 'ized-section-type';
      if (type === typeB) typeC = 'ized-section-type active';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
        className: typeC,
        onClick: function onClick() {
          return setAttributes({
            type: typeB
          });
        }
      }, typeB);
    }
  }, {
    key: "layoutBlocks",
    value: function layoutBlocks(clientId) {
      var layout = this.state.layout; //--- Organise innerBlocks for column layout

      var innerBlocks = getBlocks(clientId); //--- TODO: supprimer les innerBlocks vides si le layout est plus "petit"

      for (var i = 0; i < layout.length; i++) {
        if (innerBlocks[i] !== undefined) {
          innerBlocks[i].attributes.bootstrapSize = layout[i];
        } else {
          innerBlocks.push(Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_10__["createBlock"])('ized-gutenberg/section-col', {
            bootstrapSize: layout[i]
          }));
        }
      } //--- mets à jour les innerBlocks selon le layout voulu


      replaceInnerBlocks(clientId, innerBlocks, false);
      this.setEtat({
        layout: false
      });
    }
  }, {
    key: "setEtat",
    value: function setEtat(obj) {
      this.setState(obj);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          className = _this$props2.className,
          clientId = _this$props2.clientId,
          setAttributes = _this$props2.setAttributes;
      var layout = this.state.layout;
      var columns = attributes.columns,
          fullWidth = attributes.fullWidth;
      var classes = className + ' ized-section-row';
      if (layout) this.layoutBlocks(clientId);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, "Type d'\xE9l\xE9ment :"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "ized-section-type-container"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(this.ButtonType, {
        typeB: "div"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(this.ButtonType, {
        typeB: "section"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
        label: "Full Width",
        checked: fullWidth,
        onChange: function onChange(state) {
          return setAttributes({
            fullWidth: state
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Layout', 'ized-gutenberg')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_section_layout__WEBPACK_IMPORTED_MODULE_13__["Layouts"], {
        setLayout: this.setEtat
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classes
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InnerBlocks"], {
        template: Object(lodash__WEBPACK_IMPORTED_MODULE_11__["times"])(columns, function () {
          return ['ized-gutenberg/section-col'];
        }),
        templateLock: "all",
        allowedBlocks: ['ized-gutenberg/section-col']
      })));
    }
  }]);

  return editColumns;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/******************************************
 * SECTION BLOCK SAVE
 ******************************************/

function saveColumns(props) {
  var _props$attributes = props.attributes,
      columns = _props$attributes.columns,
      fullWidth = _props$attributes.fullWidth,
      type = _props$attributes.type;
  var classes = 'row';
  var TagName = 'div';
  if (fullWidth) classes = 'row full-width';
  if (type === 'section') TagName = 'section';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(TagName, {
    className: classes
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InnerBlocks"].Content, null));
}

/***/ }),

/***/ "./src/blocks/section-column/section-layout.js":
/*!*****************************************************!*\
  !*** ./src/blocks/section-column/section-layout.js ***!
  \*****************************************************/
/*! exports provided: LayoutBlock, Layouts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutBlock", function() { return LayoutBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layouts", function() { return Layouts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/******************************************
 * VARs LAYOUT
 * nb de col Bootstrap selon le schéma [ 'xs', 'sm', 'md', 'lg', 'xl' ]
 ******************************************/
var layoutsArray = [//--- 4 + 8
[[12, 0, 4, 0, 0], [12, 0, 8, 0, 0]], //--- 8 + 4
[[12, 0, 8, 0, 0], [12, 0, 4, 0, 0]], //--- 6 + 6
[[12, 0, 6, 0, 0], [12, 0, 6, 0, 0]], //--- [4 + 4 + 4]
[[12, 0, 4, 0, 0], [12, 0, 4, 0, 0], [12, 0, 4, 0, 0]], //--- [8 + 4] + [4 + 8]
[[12, 0, 8, 0, 0], [12, 0, 4, 0, 0], [12, 0, 4, 0, 0], [12, 0, 8, 0, 0]]];
function LayoutBlock(_ref) {
  var layout = _ref.layout,
      _onClick = _ref.onClick;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'row ized-section-layout-row',
    onClick: function onClick() {
      return _onClick(layout);
    }
  }, layout.map(function (val) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'col-' + val[2] + ' ized-section-layout-col'
    });
  }));
}
function Layouts(_ref2) {
  var setLayout = _ref2.setLayout;

  function layoutClick(layout) {
    setLayout({
      layout: layout,
      settingLayout: true
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'ized-section-layout-container'
  }, layoutsArray.map(function (val) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'ized-section-layout'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(LayoutBlock, {
      layout: val,
      onClick: layoutClick
    }));
  }));
}

/***/ }),

/***/ "./src/blocks/section-column/style.sass":
/*!**********************************************!*\
  !*** ./src/blocks/section-column/style.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/blocks/section-column/style.sass");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_gutenberg_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/gutenberg-blocks */ "./src/blocks/gutenberg-blocks.js");


/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=gutenberg.js.map