module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/index.json":
/*!****************************!*\
  !*** ./content/index.json ***!
  \****************************/
/*! exports provided: siteTitle, description, stylesheets, topLinks, backgroundClass, copyright, siteId, bodyContent, bodyHtml, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"siteTitle":"Frend's Blog","description":"","stylesheets":["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css"],"topLinks":[{"text":"About","href":"/about"},{"text":"Github","href":"https://github.com/FrendEr"}],"backgroundClass":"bg-dark-gray","copyright":"Frend","siteId":"","bodyContent":"","bodyHtml":"","dir":"content","base":"index.json","ext":".json","sourceBase":"index.md","sourceExt":".md"};

/***/ }),

/***/ "./content/summary.json":
/*!******************************!*\
  !*** ./content/summary.json ***!
  \******************************/
/*! exports provided: fileMap, sourceFileArray, default */
/***/ (function(module) {

module.exports = {"fileMap":{"content/posts/2016/02-06-how-to-do-an-unit-test.json":{"layout":"post","title":"前端单元测试 - 工具使用与运行配置","description":"前端单元测试入门学习，工具的使用以及基础运行配置","keywords":"unit test, chai, mocha, sinon, react, es6","date":"2016-02-06T00:00:00.000Z","categories":"unit-test","preview":"用到的测试工具（框架）\n\n> 俗话说：工欲善其事必先利其器。要做好单元测试，必须有一套好的辅助工具。\n\nMocha\n\n> Mocha 是一个可以运行在 node 环境与 browser","dir":"content/posts/2016","base":"02-06-how-to-do-an-unit-test.json","ext":".json","sourceBase":"02-06-how-to-do-an-unit-test.md","sourceExt":".md"},"content/posts/2015/06-30-debug-gap.json":{"layout":"post","title":"移动调试方法总结","description":"Chrome的截屏、Weinre、路由代理、DebugGap","keywords":"debuggap, debug, 移动调试, node-webkit, Weinre, 移动调试方法总结","date":"2015-06-30T22:57:00.000Z","categories":"debug","preview":"最近在公司项目一直做着触屏的项目，这里不是要说项目开发的实际内容，而是调试。说到调试，目前有几种方案：\n\n1.","dir":"content/posts/2015","base":"06-30-debug-gap.json","ext":".json","sourceBase":"06-30-debug-gap.md","sourceExt":".md"},"content/index.json":{"siteTitle":"Frend's Blog","description":"","stylesheets":["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css"],"topLinks":[{"text":"About","href":"/about"},{"text":"Github","href":"https://github.com/FrendEr"}],"backgroundClass":"bg-dark-gray","copyright":"Frend","siteId":"","dir":"content","base":"index.json","ext":".json","sourceBase":"index.md","sourceExt":".md"},"content/posts/2015/02-01-fe-modules.json":{"layout":"post","title":"前端模块化 - CommonJS、AMD与CMD","description":"学习SeaJS，了解前端js模块化编程，CommonJS、AMD与CMD的比较","keywords":"SeaJS, CMD, AMD, CommonJS, RequireJS, Node.js","date":"2015-02-01T00:06:10.000Z","categories":"seajs","preview":"AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。\n\nCMD 是 SeaJS","dir":"content/posts/2015","base":"02-01-fe-modules.json","ext":".json","sourceBase":"02-01-fe-modules.md","sourceExt":".md"},"content/posts/2015/11-10-npm-package-version.json":{"layout":"post","title":"NPM 版本管理","description":"npm package version description","keywords":"npm, version","date":"2015-11-10T00:00:00.000Z","categories":"npm","preview":"在发布与使用npm package的时候，对于package version的定义与使用规则存在疑惑，所以整理了一份文档。这个repo仅作记录与探讨npm包的版本号使用。\n\n>","dir":"content/posts/2015","base":"11-10-npm-package-version.json","ext":".json","sourceBase":"11-10-npm-package-version.md","sourceExt":".md"},"content/posts/2015/07-02-cross-origin.json":{"layout":"post","title":"跨域解决方案(基于nodejs)","description":"跨域是web开发经常遇到的问题，也是前端开发需要具备的技能之一，目前主流处理跨域的方法有jsonp、cors、postMessage","keywords":"跨域, jsonp, cors, postMessage","date":"2015-07-02T01:20:00.000Z","categories":"javascript","preview":"","dir":"content/posts/2015","base":"07-02-cross-origin.json","ext":".json","sourceBase":"07-02-cross-origin.md","sourceExt":".md"}},"sourceFileArray":["content/index.md","content/posts/2015/02-01-fe-modules.md","content/posts/2015/06-30-debug-gap.md","content/posts/2015/07-02-cross-origin.md","content/posts/2015/11-10-npm-package-version.md","content/posts/2016/02-06-how-to-do-an-unit-test.md"]};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Page */ "./src/components/Page.js");
/* harmony import */ var _src_components_PagePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/PagePreview */ "./src/components/PagePreview.js");
/* harmony import */ var _src_utils_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/utils/date */ "./src/utils/date.js");
/* harmony import */ var _src_utils_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/utils/content */ "./src/utils/content.js");
/* harmony import */ var _content_index_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/index.json */ "./content/index.json");
var _content_index_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/index.json */ "./content/index.json", 1);
/* harmony import */ var _content_summary_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/summary.json */ "./content/summary.json");
var _content_summary_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/summary.json */ "./content/summary.json", 1);








function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    siteTitle: "".concat(_content_index_json__WEBPACK_IMPORTED_MODULE_5__.siteTitle, " - Index"),
    heroTitle: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.siteTitle,
    description: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.description,
    stylesheets: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.stylesheets,
    topLinks: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.topLinks,
    backgroundClass: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.backgroundClass,
    body: Body({
      summaryJson: _content_summary_json__WEBPACK_IMPORTED_MODULE_6__
    }),
    copyright: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.copyright,
    siteId: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.siteId
  }));
}

function Body(props) {
  var postList = Object(_src_utils_content__WEBPACK_IMPORTED_MODULE_4__["filterPosts"])(props.summaryJson);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center mw6 pa3 pa4-ns"
  }, postList.map(function (article, i) {
    var href = Object(_src_utils_content__WEBPACK_IMPORTED_MODULE_4__["makeUrl"])(article);
    var date = Object(_src_utils_date__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(article.date);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_PagePreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: article.title,
      preview: article.preview,
      date: date,
      href: href,
      key: i
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function Footer(props) {
  var now = new Date();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "center w5 f6 tc mt4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xA9 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "2015 - ", now.getFullYear(), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.copyright)));
}

Footer.propTypes = {
  copyright: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);




function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, props.siteTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: props.description
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), props.stylesheets && props.stylesheets.length > 0 && props.stylesheets.map(function (stylesheet, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      key: i,
      rel: "stylesheet",
      href: stylesheet
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n          body {\n            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\n          }\n      "));
}

Header.propTypes = {
  siteTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  stylesheets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




function Hero(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative tc ".concat(props.backgroundClass)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mw7 center white pv4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pv4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "f1 normal lh-title ma0 pa0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "white no-underline",
    href: "/"
  }, props.heroTitle))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "normal o-70 ma0 pt2 pb3 ph1"
  }, props.subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.topLinks && props.topLinks.length > 0 && props.topLinks.map(function (link, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: link.href,
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "dib f6 white no-underline pa1 ma1",
      key: i
    }, link.text));
  })))));
}

Hero.propTypes = {
  backgroundClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  topLinks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  heroTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Hero.defaultProps = {
  backgroundClass: 'bg-mid-gray',
  topLinks: [],
  heroTitle: '',
  subtitle: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Page.js":
/*!********************************!*\
  !*** ./src/components/Page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hero */ "./src/components/Hero.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var _Tracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tracking */ "./src/components/Tracking.js");







function Page(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    siteTitle: props.siteTitle,
    description: props.description,
    stylesheets: props.stylesheets
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "lh-copy"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    heroTitle: props.heroTitle,
    subtitle: props.description,
    topLinks: props.topLinks,
    backgroundClass: props.backgroundClass
  }), props.body, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    copyright: props.copyright
  }), props.siteId && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tracking__WEBPACK_IMPORTED_MODULE_5__["default"], {
    siteId: props.siteId
  })));
}

Page.propTypes = {
  heroTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  stylesheets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  topLinks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  siteId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
Page.defaultProps = {
  heroTitle: '',
  description: '',
  stylesheets: ['https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css'],
  backgroundClass: 'bg-dark-gray'
};
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/PagePreview.js":
/*!***************************************!*\
  !*** ./src/components/PagePreview.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




function PageLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "post?fullUrl=".concat(props.href),
    as: props.href
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "b black o-80 glow no-underline lh-solid ".concat(props.className)
  }, props.children));
}

function PagePreview(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb4 pb2 bb b--light-gray"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageLink, {
    href: props.href,
    className: "f3"
  }, props.title), props.preview && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mv1 o-60"
  }, props.preview, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageLink, {
    href: props.href
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " \xBB"))), props.date && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "db ttu o-40"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("time", {
    key: new Date(props.date).toISOString()
  }, props.date)));
}

PagePreview.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  preview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PagePreview);

/***/ }),

/***/ "./src/components/Tracking.js":
/*!************************************!*\
  !*** ./src/components/Tracking.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function getGaScript(siteId) {
  return "\n  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n  e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n  e.src='https://www.google-analytics.com/analytics.js';\n  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));\n  ga('create','".concat(siteId, "','auto');ga('send','pageview');\n");
}

function Tracking(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: getGaScript(props.siteId)
    }
  }));
}

Tracking.propTypes = {
  siteId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Tracking);

/***/ }),

/***/ "./src/utils/content.js":
/*!******************************!*\
  !*** ./src/utils/content.js ***!
  \******************************/
/*! exports provided: makeUrl, filterPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeUrl", function() { return makeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterPosts", function() { return filterPosts; });
function makeUrl(article) {
  return "".concat(article.dir.split('content').join(''), "/").concat(article.base.split('.json').join(''));
}
function filterPosts(summaryJson) {
  return summaryJson && summaryJson.fileMap && Object.keys(summaryJson.fileMap).filter(function (file) {
    if (file.indexOf('content/posts') === 0) {
      return true;
    }
  }).map(function (file) {
    return summaryJson.fileMap[file];
  }).sort(function (a, b) {
    var aDate = Date.parse(a.date);
    var bDate = Date.parse(b.date);
    return bDate > aDate ? 1 : bDate < aDate ? -1 : 0;
  });
}

/***/ }),

/***/ "./src/utils/date.js":
/*!***************************!*\
  !*** ./src/utils/date.js ***!
  \***************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
function formatDate(dateString) {
  var utcString = new Date(dateString).toUTCString();
  var splitDate = utcString.split(' ');
  var dateArr = splitDate.slice(1, 4); // Swap day and month.
  // dateArr.splice(1, 1, dateArr.splice(0, 1, dateArr[1])[0])

  return dateArr.join(' ');
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map