webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/next/node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Page */ "./src/components/Page.js");
/* harmony import */ var _src_components_PagePreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/PagePreview */ "./src/components/PagePreview.js");
/* harmony import */ var _src_utils_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/utils/date */ "./src/utils/date.js");
/* harmony import */ var _content_index_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/index.json */ "./content/index.json");
var _content_index_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/index.json */ "./content/index.json", 1);
/* harmony import */ var _content_summary_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content/summary.json */ "./content/summary.json");
var _content_summary_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/summary.json */ "./content/summary.json", 1);









function Index(props) {
  var pageJson = {};

  if (props.router.query) {
    if (props.router.query.fullUrl) {
      pageJson = __webpack_require__("./ sync recursive ^\\.\\/content.*\\.json$")("./content".concat(props.router.query.fullUrl, ".json"));
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1532778144"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1532778144",
    css: ".content a{color:#0365A5;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px solid #DFDFDF;-webkit-transition:all 300ms ease;transition:all 300ms ease;}a:hover,a:focus{border-bottom-color:currentColor;}code{background-color:#EEE;line-height:1;border-radius:2px;padding:1px;}code:not(.hljs){border:1px solid #DDD;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmVuZC9Eb2N1bWVudHMvZnJlbmQvZ2l0aHViL0ZyZW5kRXIvYmxvZy9wYWdlcy9wb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CeUIsQUFHeUIsQUFPbUIsQUFJWCxBQU1BLGNBaEJELFFBV1AsQUFNaEIsV0FWQSxHQUttQixrQkFDTCxVQVpvQixFQWFsQyw4QkFaNEIsNERBQzVCIiwiZmlsZSI6Ii9Vc2Vycy9mcmVuZC9Eb2N1bWVudHMvZnJlbmQvZ2l0aHViL0ZyZW5kRXIvYmxvZy9wYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUGFnZSdcbmltcG9ydCBQYWdlUHJldmlldyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9QYWdlUHJldmlldydcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcuLi9zcmMvdXRpbHMvZGF0ZSdcblxuaW1wb3J0IENPTkZJRyBmcm9tICcuLi9jb250ZW50L2luZGV4Lmpzb24nXG5pbXBvcnQgU1VNTUFSWV9KU09OIGZyb20gJy4uL2NvbnRlbnQvc3VtbWFyeS5qc29uJ1xuXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xuICBsZXQgcGFnZUpzb24gPSB7fVxuICBpZiAocHJvcHMucm91dGVyLnF1ZXJ5KSB7XG4gICAgaWYgKHByb3BzLnJvdXRlci5xdWVyeS5mdWxsVXJsKSB7XG4gICAgICBwYWdlSnNvbiA9IHJlcXVpcmUoYC4uL2NvbnRlbnQke3Byb3BzLnJvdXRlci5xdWVyeS5mdWxsVXJsfS5qc29uYClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuY29udGVudCBhIHtcbiAgICAgICAgICBjb2xvcjogIzAzNjVBNTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERkRGREY7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyLCBhOmZvY3VzIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6MnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgfVxuICAgICAgICBjb2RlOm5vdCguaGxqcykge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxQYWdlXG4gICAgICAgIHNpdGVUaXRsZT17YCR7Q09ORklHLnNpdGVUaXRsZX0gLSAke3BhZ2VKc29uLnRpdGxlfWB9XG4gICAgICAgIGhlcm9UaXRsZT17Q09ORklHLnNpdGVUaXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e0NPTkZJRy5kZXNjcmlwdGlvbn1cbiAgICAgICAgc3R5bGVzaGVldHM9e0NPTkZJRy5zdHlsZXNoZWV0c31cbiAgICAgICAgdG9wTGlua3M9e0NPTkZJRy50b3BMaW5rc31cbiAgICAgICAgYmFja2dyb3VuZENsYXNzPXtDT05GSUcuYmFja2dyb3VuZENsYXNzfVxuICAgICAgICBib2R5PXtCb2R5KHBhZ2VKc29uKX1cbiAgICAgICAgY29weXJpZ2h0PXtDT05GSUcuY29weXJpZ2h0fVxuICAgICAgICBzaXRlSWQ9e0NPTkZJRy5zaXRlSWR9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIEJvZHkocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgY2VudGVyIG13NiBwYTMgcGE0LW5zXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibXQwIGxoLXRpdGxlXCI+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMuYm9keUh0bWwgfX0+PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihJbmRleClcbiJdfQ== */\n/*@ sourceURL=/Users/frend/Documents/frend/github/FrendEr/blog/pages/post.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    siteTitle: "".concat(_content_index_json__WEBPACK_IMPORTED_MODULE_6__.siteTitle, " - ").concat(pageJson.title),
    heroTitle: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.siteTitle,
    description: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.description,
    stylesheets: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.stylesheets,
    topLinks: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.topLinks,
    backgroundClass: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.backgroundClass,
    body: Body(pageJson),
    copyright: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.copyright,
    siteId: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.siteId
  }));
}

function Body(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content center mw6 pa3 pa4-ns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "mt0 lh-title"
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: props.bodyHtml
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Index));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=post.js.0d5d6291d844d7204a3a.hot-update.js.map