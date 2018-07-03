module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-656524494"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-656524494" + " " + "infos"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-656524494" + " " + "avatar"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/avatar.png",
    width: "200",
    height: "200",
    className: "jsx-656524494"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-656524494" + " " + "links"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-656524494"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    className: "jsx-656524494"
  }, "Hi, I'm an Front End Developer.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-656524494"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
    className: "jsx-656524494"
  }, "Skill: "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-656524494" + " " + "skill-list"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    className: "jsx-656524494"
  }, "React"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    className: "jsx-656524494"
  }, "Redux"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    className: "jsx-656524494"
  }, "Webpack"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    className: "jsx-656524494"
  }, "Node.js"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    className: "jsx-656524494"
  }, "jQuery"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    className: "jsx-656524494"
  }, "Modular"), "etc.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-656524494"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
    className: "jsx-656524494"
  }, "Github: "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "https://github.com/FrendEr",
    target: "_blank",
    className: "jsx-656524494"
  }, "https://github.com/FrendEr")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-656524494"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
    className: "jsx-656524494"
  }, "Location: "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    className: "jsx-656524494"
  }, "Shenzhen"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "656524494",
    css: ["body.jsx-656524494{font-family:monospace;}", "a.jsx-656524494{color:#007bff;}", ".infos.jsx-656524494{padding:30px 50px;}", ".avatar.jsx-656524494 img.jsx-656524494{float:left;}", ".links.jsx-656524494{margin-left:250px;}", ".links.jsx-656524494>div.jsx-656524494{padding:5px 0;}", ".links.jsx-656524494 label.jsx-656524494{display:inline-block;font-weight:bold;width:80px;text-align:right;padding-right:10px;}", ".skill-list.jsx-656524494{display:inline-block;}", ".skill-list.jsx-656524494 span.jsx-656524494{padding:0 6px;margin-right:10px;background-color:#cce5ff;color:#004085;}"]
  }));
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);