webpackHotUpdate("static/development/pages/post.js",{

/***/ "./ sync recursive ^\\.\\/content.*\\.json$":
/*!************************************!*\
  !*** . sync ^\.\/content.*\.json$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./content/index.json": "./content/index.json",
	"./content/posts/2017/first-post.json": "./content/posts/2017/first-post.json",
	"./content/posts/2017/post-two.json": "./content/posts/2017/post-two.json",
	"./content/summary.json": "./content/summary.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive ^\\.\\/content.*\\.json$";

/***/ }),

/***/ "./content/custom-post.json":
false

})
//# sourceMappingURL=post.js.ae934ec00787a864ff3f.hot-update.js.map