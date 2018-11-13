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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ sync recursive ^\\.\\/content.*\\.json$":
/*!************************************!*\
  !*** . sync ^\.\/content.*\.json$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./content/index.json": "./content/index.json",
	"./content/posts/2015/02-01-fe-modules.json": "./content/posts/2015/02-01-fe-modules.json",
	"./content/posts/2015/06-30-debug-gap.json": "./content/posts/2015/06-30-debug-gap.json",
	"./content/posts/2015/07-02-cross-origin.json": "./content/posts/2015/07-02-cross-origin.json",
	"./content/posts/2015/11-10-npm-package-version.json": "./content/posts/2015/11-10-npm-package-version.json",
	"./content/posts/2016/02-06-how-to-do-an-unit-test.json": "./content/posts/2016/02-06-how-to-do-an-unit-test.json",
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

/***/ "./content/index.json":
/*!****************************!*\
  !*** ./content/index.json ***!
  \****************************/
/*! exports provided: siteTitle, description, stylesheets, topLinks, backgroundClass, copyright, siteId, bodyContent, bodyHtml, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"siteTitle":"Frend's Blog","description":"","stylesheets":["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css"],"topLinks":[{"text":"About","href":"/about"},{"text":"Github","href":"https://github.com/FrendEr"}],"backgroundClass":"bg-dark-gray","copyright":"Frend","siteId":"","bodyContent":"","bodyHtml":"","dir":"content","base":"index.json","ext":".json","sourceBase":"index.md","sourceExt":".md"};

/***/ }),

/***/ "./content/posts/2015/02-01-fe-modules.json":
/*!**************************************************!*\
  !*** ./content/posts/2015/02-01-fe-modules.json ***!
  \**************************************************/
/*! exports provided: layout, title, description, keywords, date, categories, bodyContent, bodyHtml, preview, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"layout":"post","title":"前端模块化 - CommonJS、AMD与CMD","description":"学习SeaJS，了解前端js模块化编程，CommonJS、AMD与CMD的比较","keywords":"SeaJS, CMD, AMD, CommonJS, RequireJS, Node.js","date":"2015-02-01T00:06:10.000Z","categories":"seajs","bodyContent":"AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。\n<br/>\nCMD 是 SeaJS 在推广过程中对模块定义的规范化产出。\n<br/>\n--玉伯\n<br/>\n\n第一次听说SeaJS，已经是两年前的事了，但一直没有机会让我意识到模块化对于前端开发的好处，所以也没有深入去了解使用SeaJS或者RequireJS这类的模块加载器进行模块化编程。\n\n随着公司项目越来越大，不管是代码维护还是新功能模块的添加，都越显困难与无力。模块化编程现在已经非常成熟，很多大的公司项目已经在使用，例如QQ空间、淘宝等。模块化编程在发展过程中，已经形成了多套规范以及基于不同规范的框架。本博文是我在探讨这些规范以及模块化框架过程中的一些总结与记录，已作分享以及备忘使用。\n\n<br/>\n\n### 1. CommonJS规范\n\nCommonJS是服务器端模块化的规范，Node.js就是基于CommonJS Modules/1.0。\n\n根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，在改模块内定义的变量无法被其他模块所读取，除非定义为global对象的属性。\n\n``` javascript\n\n//main.js\n\nglobal.name = 'Frend';\n\n```\n\n以上定义的name变量可以被所有的模块所读取，但是并不推荐这种方式。输出模块的变量，最好的方式是使用exports(module.exports)对象。关于`exports与module.exports的区别`推荐看[一位全栈码农对exports与module.exports的分析](http://zihua.li/2012/03/use-module-exports-or-exports-in-node/)。如果这篇博文让你还是理解不了，那给出一个更加浅显的说明：exports一般是一个对象，用于挂一堆的方法或者属性，例如一个slider滑动模块，有一堆的控制方法和属性，这种情况下就可以用exports来挂载，而另外一种情况，例如这个模块是叫$G.dom.get，实现和jquery的$()一样的功能，这时候不需要额外的一些乱七八糟的东西，只需要它是个方法，能直接调用，这时就可以使用module.exports了，调用的时候就可以直接通过$get = require( './dom/get' ); $get方法来使用了。\n\n``` javascript\n\n//module_a.js\n\nexports.name = 'Frend';\n\nexports.say = function() {\n    console.log(name);\n}\n\n```\n\n使用require方法，加载module_a.js\n\n``` javascript\n\n//main.js\n\nvar module_a = require('./module_a.js');    //同步加载模块，加载完再执行后面的代码\n\nmodule_a.say(); //Frend\n\n```\n\n<br/>\n\n### 2. AMD规范\n\n从[#CommonJS规范#](#commonjs)已经初步了解了CommonJS，它加载模块时是同步的，也就是说，只有加载完成才会开始执行后面的操作。由于Node.js主要是用于服务器编程，模块文件一般是存放在服务器硬盘，所以加载会非常的快，不用考虑像浏览器请求脚本时造成阻塞等的情况，所以CommonJS规范比较适用。但是，如果是在浏览器，要从服务器加载模块，带宽是主要的瓶颈，所以AMD规范提倡的异步加载模块的方式比较适用。\n\nAMD（Asynchronous Module Definition）规范则是异步加载模块，即模块的加载不会影响后面语句的运行。所有依赖于某些模块的语句均放在回调函数中执行。\n[AMD规范](https://github.com/amdjs/amdjs-api/wiki/AMD)\n\n<br/>\n\n>### 2.1 AMD的全局变量 —— define函数\n\n#### define(id?, dependencies?, factory)\n\n`id` 为可选参数，字符串类型，表示当前模块的标识。\n\n`dependencies` 可选参数，当前模块所依赖并已经被定义的模块标志的数组字面量。\n\n`factory` 一个模块需要执行一次的函数或者是分配了模块属性的的对象。\n\n* 创建模块标识为alpha的模块，依赖于require，export，和标识为beta的模块\n\n``` javascript\n\ndefine('alpha', ['require', 'exports', 'beta'], function(require, exports, beta) {\n    export.verb = function() {\n        return beta.verb();\n    }\n});\n\n```\n\n* 一个返回对象字面量的异步模块\n\n``` javascript\n\ndefine(['alpha'], function(alpha) {\n    return {\n        verb : function() {\n            return alpha.verb() + 1 ;\n        }\n    }\n});\n\n```\n\n* 无依赖模块可以直接使用对象字面量来定义\n\n``` javascript\n\ndefine({\n    add : function(x, y) {\n        return x + y;\n    }\n});\n\n```\n\n* 兼容CommonJS的写法\n\n``` javascript\n\ndefine(function(require, exports, module) {\n    var a = require('a'),\n        b = require('b');\n\n    exports.action = function(){};\n});\n\n```\n\n<br/>\n\n>### 2.2 AMD的factory中的require参数\n\n* require(String)\n\n``` javascript\n\ndefine(function(require) {\n    var a = require('a');   //加载模块a\n});\n\n```\n\n* require(Array, Function)\n\n``` javascript\n\ndefine(function(require) {\n    require(['a', 'b'], function(a, b) {    //加载模块a b 使用\n        //依赖 a b 模块的运行代码\n    });\n});\n\n```\n\n* require.toUrl(Url)\n\n``` javascript\n\ndefine(function(require){\n    var temp = require.toUrl('./temp/a.html');  //加载页面\n});\n\n```\n\n<br/>\n\n### 3. CMD规范\nCMD（Common Module Definition）规范是SeaJS遵循的规范，明确了模块的基本书写格式和基本交互规则。\n\n在该规范中，一个模块就是一个文件。\n\n<br/>\n\n>###3.1 CMD的全局变量 —— define函数\n\n#### define(id?, dependencies?, factory)\n\n`id`为可选参数，字符串类型，表示当前模块的标识。\n\n`dependencies`为可选参数，数组类型，表示当前模块的依赖。\n\n`factory`可以是对象、字符串或者函数\n\n* 定义JSON数据模块\n\n``` javascript\n\ndefine({'foo': 'bar'});\n\n```\n\n* 通过字符串定义模板模块\n\n``` javascript\n\ndefine('this is {{data}}.');\n\n```\n\n* factory为函数的时候，表示模块的构造方法，执行构造方法便可以得到模块向外提供的接口\n\n``` javascript\n\ndefine(function(require, exports, module) {\n    //模块代码\n});\n\n```\n\n* 当拥有两个以上参数时\n\n``` javascript\n\ndefine('module', ['module1', 'module2'], function(require, exports, module) {\n    //模块代码\n});\n\n```\n\n从上面代码对比来看，CMD与AMD规范在define函数上用法不相同。\n\n<br/>\n\n>### 3.2 CMD的factory中的require参数\n\n* `require(id);`接受模块标识作为唯一的参数，用来获取其他模块提供的接口\n\n``` javascript\n\ndefine(function(require, exports) {\n    var a = require('./a');\n\n    a.doSomething();\n});\n\n```\n\n* `require.async(id, callback?);` require是同步往下执行的，需要的异步加载模块可以使用 require.async 来进行加载\n\n``` javascript\n\ndefine(function(require, exports, module) {\n    require.async('.a', function(a) {\n        a.doSomething();\n    });\n});\n\n```\n\n<br/>\n\n>### 3.3 CMD的factory中的exports参数\n\n* exports用来向外提供模块接口\n\n``` javascript\n\ndefine(function(require, exports) {\n    exports.foo = 'bar';    //向外提供的属性\n    exports.do = function(){};  //向外提供的方法\n});\n\n```\n\n* 使用return直接向外提供接口\n\n``` javascript\n\ndefine(function(require, exports) {\n    return{\n        foo: 'bar',    //向外提供的属性\n        do: function(){}   //向外提供的方法\n    }\n});\n\n```\n\n* 简化为直接对象字面量的形式\n\n``` javascript\n\ndefine({\n    foo: 'bar',     //向外提供的属性\n    do: function(){}    //向外提供的方法\n});\n\n```\n\n* 与nodeJS中一样需要注意的情况\n\n``` javascript\n\n//以下方式是错误的\ndefine(function(require, exports) {\n    exports = {\n        foo: 'bar',     //向外提供的属性\n        do: function(){}    //向外提供的方法\n    }\n});\n\n//正确写法\ndefine(function(require, exports, module) {\n    module.exports = {\n        foo: 'bar',     //向外提供的属性\n        do: function(){}   //向外提供的方法\n    }\n});\n\n```\n\n<br/>\n\n>### 3.4 CMD的factory中的module参数\n\n* module 是factory的第三个参数，为一个对象，上面存储了一些与当前模块相关联的属性与方法\n\n``` javascript\n\nmodule.id           // 为模块的唯一标识。\nmodule.uri          // 根据模块系统的路径解析规则得到模块的绝对路径。\nmodule.dependencies // 表示模块的依赖。\nmodule.exports      // 当前模块对外提供的接口。\n\n```\n\n<br/>\n\n### 4. AMD与CMD的区别\n\n下面是玉伯对于 AMD 与 CMD 区别的解释：\n\nAMD 是 RequireJS 在推广过程中对模块定义的规范化产出。\n\nCMD 是 SeaJS 在推广过程中对模块定义的规范化产出。\n\nAMD与CMD都是为了实现javascript的模块化开发，特别是在浏览器端。下面介绍两者的区别：\n\n1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.\n\n2. CMD推崇依赖就近，AMD推崇依赖前置。\n\n* CMD推崇依赖就近，可以把依赖写进你的代码中的任意一行\n\n``` javascript\n\n// CMD\ndefine(function(require, exports, module) {\n    var a = require('./a');\n    a.doSomething()\n    // ...\n    var b = require('./b') // 依赖可以就近书写\n    b.doSomething()\n    // ...\n});\n\n```\n\n代码在运行时，首先是不知道依赖的，需要遍历所有的require关键字，找出后面的依赖。具体做法是将function toString后，用正则匹配出require关键字后面的依赖。显然，这是一种牺牲性能来换取更多开发便利的方法。\n\n* AMD推崇依赖前置，在解析和执行当前模块之前，模块作者必须指明当前模块所依赖的模块\n\n``` javascript\n\n// AMD\ndefine(['./a', './b'], function(a, b) { // 依赖必须一开始就写好\n    a.doSomething()\n    // ...\n    b.doSomething()\n    // ...\n});\n\n```\n\n代码在一旦运行到此处，能立即知晓依赖。而无需遍历整个函数体找到它的依赖，因此性能有所提升，缺点就是开发者必须显式得指明依赖——这会使得开发工作量变大，比如：当你写到函数体内部几百上千行的时候，忽然发现需要增加一个依赖，你不得不回到函数顶端来将这个依赖添加进数组。\n\n对比\n\n|-----------------+------------+-----------------+----------------|\n| 方案 | 优势 | 劣势 | 特点  |\n|-----------------|:-----------|:---------------:|---------------:|\n| AMD | 速度快 | 会浪费资源  | 预先加载所有的依赖，直到使用的时候才执行    |\n|-----------------+------------+-----------------+----------------|\n| CMD     |   只有真正需要才加载依赖  |     性能较差 |    直到使用的时候才定义依赖  |\n|-----------------+------------+-----------------+----------------|","bodyHtml":"<p>AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。\n&lt;br/&gt;\nCMD 是 SeaJS 在推广过程中对模块定义的规范化产出。\n&lt;br/&gt;\n--玉伯\n&lt;br/&gt;</p>\n<p>第一次听说SeaJS，已经是两年前的事了，但一直没有机会让我意识到模块化对于前端开发的好处，所以也没有深入去了解使用SeaJS或者RequireJS这类的模块加载器进行模块化编程。</p>\n<p>随着公司项目越来越大，不管是代码维护还是新功能模块的添加，都越显困难与无力。模块化编程现在已经非常成熟，很多大的公司项目已经在使用，例如QQ空间、淘宝等。模块化编程在发展过程中，已经形成了多套规范以及基于不同规范的框架。本博文是我在探讨这些规范以及模块化框架过程中的一些总结与记录，已作分享以及备忘使用。</p>\n<p>&lt;br/&gt;</p>\n<h3>1. CommonJS规范</h3>\n<p>CommonJS是服务器端模块化的规范，Node.js就是基于CommonJS Modules/1.0。</p>\n<p>根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，在改模块内定义的变量无法被其他模块所读取，除非定义为global对象的属性。</p>\n<pre><code class=\"hljs\">//main.js\n\nglobal.name = 'Frend';</code></pre><p>以上定义的name变量可以被所有的模块所读取，但是并不推荐这种方式。输出模块的变量，最好的方式是使用exports(module.exports)对象。关于<code>exports与module.exports的区别</code>推荐看<a href=\"http://zihua.li/2012/03/use-module-exports-or-exports-in-node/\">一位全栈码农对exports与module.exports的分析</a>。如果这篇博文让你还是理解不了，那给出一个更加浅显的说明：exports一般是一个对象，用于挂一堆的方法或者属性，例如一个slider滑动模块，有一堆的控制方法和属性，这种情况下就可以用exports来挂载，而另外一种情况，例如这个模块是叫$G.dom.get，实现和jquery的$()一样的功能，这时候不需要额外的一些乱七八糟的东西，只需要它是个方法，能直接调用，这时就可以使用module.exports了，调用的时候就可以直接通过$get = require( './dom/get' ); $get方法来使用了。</p>\n<pre><code class=\"hljs\">//module_a.js\n\nexports.name = 'Frend';\n\nexports.say = function() {\n    console.log(name);\n}</code></pre><p>使用require方法，加载module_a.js</p>\n<pre><code class=\"hljs\">//main.js\n\nvar module_a = require('./module_a.js');    //同步加载模块，加载完再执行后面的代码\n\nmodule_a.say(); //Frend</code></pre><p>&lt;br/&gt;</p>\n<h3>2. AMD规范</h3>\n<p>从<a href=\"#commonjs\">#CommonJS规范#</a>已经初步了解了CommonJS，它加载模块时是同步的，也就是说，只有加载完成才会开始执行后面的操作。由于Node.js主要是用于服务器编程，模块文件一般是存放在服务器硬盘，所以加载会非常的快，不用考虑像浏览器请求脚本时造成阻塞等的情况，所以CommonJS规范比较适用。但是，如果是在浏览器，要从服务器加载模块，带宽是主要的瓶颈，所以AMD规范提倡的异步加载模块的方式比较适用。</p>\n<p>AMD（Asynchronous Module Definition）规范则是异步加载模块，即模块的加载不会影响后面语句的运行。所有依赖于某些模块的语句均放在回调函数中执行。\n<a href=\"https://github.com/amdjs/amdjs-api/wiki/AMD\">AMD规范</a></p>\n<p>&lt;br/&gt;</p>\n<blockquote>\n<h3>2.1 AMD的全局变量 —— define函数</h3>\n</blockquote>\n<h4>define(id?, dependencies?, factory)</h4>\n<p><code>id</code> 为可选参数，字符串类型，表示当前模块的标识。</p>\n<p><code>dependencies</code> 可选参数，当前模块所依赖并已经被定义的模块标志的数组字面量。</p>\n<p><code>factory</code> 一个模块需要执行一次的函数或者是分配了模块属性的的对象。</p>\n<ul>\n<li>创建模块标识为alpha的模块，依赖于require，export，和标识为beta的模块</li>\n</ul>\n<pre><code class=\"hljs\">define('alpha', ['require', 'exports', 'beta'], function(require, exports, beta) {\n    export.verb = function() {\n        return beta.verb();\n    }\n});</code></pre><ul>\n<li>一个返回对象字面量的异步模块</li>\n</ul>\n<pre><code class=\"hljs\">define(['alpha'], function(alpha) {\n    return {\n        verb : function() {\n            return alpha.verb() + 1 ;\n        }\n    }\n});</code></pre><ul>\n<li>无依赖模块可以直接使用对象字面量来定义</li>\n</ul>\n<pre><code class=\"hljs\">define({\n    add : function(x, y) {\n        return x + y;\n    }\n});</code></pre><ul>\n<li>兼容CommonJS的写法</li>\n</ul>\n<pre><code class=\"hljs\">define(function(require, exports, module) {\n    var a = require('a'),\n        b = require('b');\n\n    exports.action = function(){};\n});</code></pre><p>&lt;br/&gt;</p>\n<blockquote>\n<h3>2.2 AMD的factory中的require参数</h3>\n</blockquote>\n<ul>\n<li>require(String)</li>\n</ul>\n<pre><code class=\"hljs\">define(function(require) {\n    var a = require('a');   //加载模块a\n});</code></pre><ul>\n<li>require(Array, Function)</li>\n</ul>\n<pre><code class=\"hljs\">define(function(require) {\n    require(['a', 'b'], function(a, b) {    //加载模块a b 使用\n        //依赖 a b 模块的运行代码\n    });\n});</code></pre><ul>\n<li>require.toUrl(Url)</li>\n</ul>\n<pre><code class=\"hljs\">define(function(require){\n    var temp = require.toUrl('./temp/a.html');  //加载页面\n});</code></pre><p>&lt;br/&gt;</p>\n<h3>3. CMD规范</h3>\n<p>CMD（Common Module Definition）规范是SeaJS遵循的规范，明确了模块的基本书写格式和基本交互规则。</p>\n<p>在该规范中，一个模块就是一个文件。</p>\n<p>&lt;br/&gt;</p>\n<blockquote>\n<p>###3.1 CMD的全局变量 —— define函数</p>\n</blockquote>\n<h4>define(id?, dependencies?, factory)</h4>\n<p><code>id</code>为可选参数，字符串类型，表示当前模块的标识。</p>\n<p><code>dependencies</code>为可选参数，数组类型，表示当前模块的依赖。</p>\n<p><code>factory</code>可以是对象、字符串或者函数</p>\n<ul>\n<li>定义JSON数据模块</li>\n</ul>\n<pre><code class=\"hljs\">define({'foo': 'bar'});</code></pre><ul>\n<li>通过字符串定义模板模块</li>\n</ul>\n<pre><code class=\"hljs\">define('this is {{data}}.');</code></pre><ul>\n<li>factory为函数的时候，表示模块的构造方法，执行构造方法便可以得到模块向外提供的接口</li>\n</ul>\n<pre><code class=\"hljs\">define(function(require, exports, module) {\n    //模块代码\n});</code></pre><ul>\n<li>当拥有两个以上参数时</li>\n</ul>\n<pre><code class=\"hljs\">define('module', ['module1', 'module2'], function(require, exports, module) {\n    //模块代码\n});</code></pre><p>从上面代码对比来看，CMD与AMD规范在define函数上用法不相同。</p>\n<p>&lt;br/&gt;</p>\n<blockquote>\n<h3>3.2 CMD的factory中的require参数</h3>\n</blockquote>\n<ul>\n<li><code>require(id);</code>接受模块标识作为唯一的参数，用来获取其他模块提供的接口</li>\n</ul>\n<pre><code class=\"hljs\">define(function(require, exports) {\n    var a = require('./a');\n\n    a.doSomething();\n});</code></pre><ul>\n<li><code>require.async(id, callback?);</code> require是同步往下执行的，需要的异步加载模块可以使用 require.async 来进行加载</li>\n</ul>\n<pre><code class=\"hljs\">define(function(require, exports, module) {\n    require.async('.a', function(a) {\n        a.doSomething();\n    });\n});</code></pre><p>&lt;br/&gt;</p>\n<blockquote>\n<h3>3.3 CMD的factory中的exports参数</h3>\n</blockquote>\n<ul>\n<li>exports用来向外提供模块接口</li>\n</ul>\n<pre><code class=\"hljs\">define(function(require, exports) {\n    exports.foo = 'bar';    //向外提供的属性\n    exports.do = function(){};  //向外提供的方法\n});</code></pre><ul>\n<li>使用return直接向外提供接口</li>\n</ul>\n<pre><code class=\"hljs\">define(function(require, exports) {\n    return{\n        foo: 'bar',    //向外提供的属性\n        do: function(){}   //向外提供的方法\n    }\n});</code></pre><ul>\n<li>简化为直接对象字面量的形式</li>\n</ul>\n<pre><code class=\"hljs\">define({\n    foo: 'bar',     //向外提供的属性\n    do: function(){}    //向外提供的方法\n});</code></pre><ul>\n<li>与nodeJS中一样需要注意的情况</li>\n</ul>\n<pre><code class=\"hljs\">//以下方式是错误的\ndefine(function(require, exports) {\n    exports = {\n        foo: 'bar',     //向外提供的属性\n        do: function(){}    //向外提供的方法\n    }\n});\n\n//正确写法\ndefine(function(require, exports, module) {\n    module.exports = {\n        foo: 'bar',     //向外提供的属性\n        do: function(){}   //向外提供的方法\n    }\n});</code></pre><p>&lt;br/&gt;</p>\n<blockquote>\n<h3>3.4 CMD的factory中的module参数</h3>\n</blockquote>\n<ul>\n<li>module 是factory的第三个参数，为一个对象，上面存储了一些与当前模块相关联的属性与方法</li>\n</ul>\n<pre><code class=\"hljs\">module.id           // 为模块的唯一标识。\nmodule.uri          // 根据模块系统的路径解析规则得到模块的绝对路径。\nmodule.dependencies // 表示模块的依赖。\nmodule.exports      // 当前模块对外提供的接口。</code></pre><p>&lt;br/&gt;</p>\n<h3>4. AMD与CMD的区别</h3>\n<p>下面是玉伯对于 AMD 与 CMD 区别的解释：</p>\n<p>AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。</p>\n<p>CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。</p>\n<p>AMD与CMD都是为了实现javascript的模块化开发，特别是在浏览器端。下面介绍两者的区别：</p>\n<ol>\n<li>\n<p>对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.</p>\n</li>\n<li>\n<p>CMD推崇依赖就近，AMD推崇依赖前置。</p>\n</li>\n</ol>\n<ul>\n<li>CMD推崇依赖就近，可以把依赖写进你的代码中的任意一行</li>\n</ul>\n<pre><code class=\"hljs\">// CMD\ndefine(function(require, exports, module) {\n    var a = require('./a');\n    a.doSomething()\n    // ...\n    var b = require('./b') // 依赖可以就近书写\n    b.doSomething()\n    // ...\n});</code></pre><p>代码在运行时，首先是不知道依赖的，需要遍历所有的require关键字，找出后面的依赖。具体做法是将function toString后，用正则匹配出require关键字后面的依赖。显然，这是一种牺牲性能来换取更多开发便利的方法。</p>\n<ul>\n<li>AMD推崇依赖前置，在解析和执行当前模块之前，模块作者必须指明当前模块所依赖的模块</li>\n</ul>\n<pre><code class=\"hljs\">// AMD\ndefine(['./a', './b'], function(a, b) { // 依赖必须一开始就写好\n    a.doSomething()\n    // ...\n    b.doSomething()\n    // ...\n});</code></pre><p>代码在一旦运行到此处，能立即知晓依赖。而无需遍历整个函数体找到它的依赖，因此性能有所提升，缺点就是开发者必须显式得指明依赖——这会使得开发工作量变大，比如：当你写到函数体内部几百上千行的时候，忽然发现需要增加一个依赖，你不得不回到函数顶端来将这个依赖添加进数组。</p>\n<p>对比</p>\n<p>|-----------------+------------+-----------------+----------------|</p>\n<table>\n<thead>\n<tr>\n<th>方案</th>\n<th style=\"text-align:left\">优势</th>\n<th style=\"text-align:center\">劣势</th>\n<th style=\"text-align:right\">特点</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>AMD</td>\n<td style=\"text-align:left\">速度快</td>\n<td style=\"text-align:center\">会浪费资源</td>\n<td style=\"text-align:right\">预先加载所有的依赖，直到使用的时候才执行</td>\n</tr>\n<tr>\n<td>-----------------+------------+-----------------+----------------</td>\n<td style=\"text-align:left\"></td>\n<td style=\"text-align:center\"></td>\n<td style=\"text-align:right\"></td>\n</tr>\n<tr>\n<td>CMD</td>\n<td style=\"text-align:left\">只有真正需要才加载依赖</td>\n<td style=\"text-align:center\">性能较差</td>\n<td style=\"text-align:right\">直到使用的时候才定义依赖</td>\n</tr>\n<tr>\n<td>-----------------+------------+-----------------+----------------</td>\n<td style=\"text-align:left\"></td>\n<td style=\"text-align:center\"></td>\n<td style=\"text-align:right\"></td>\n</tr>\n</tbody>\n</table>\n","preview":"AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。\n\nCMD 是 SeaJS","dir":"content/posts/2015","base":"02-01-fe-modules.json","ext":".json","sourceBase":"02-01-fe-modules.md","sourceExt":".md"};

/***/ }),

/***/ "./content/posts/2015/06-30-debug-gap.json":
/*!*************************************************!*\
  !*** ./content/posts/2015/06-30-debug-gap.json ***!
  \*************************************************/
/*! exports provided: layout, title, description, keywords, date, categories, bodyContent, bodyHtml, preview, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"layout":"post","title":"移动调试方法总结","description":"Chrome的截屏、Weinre、路由代理、DebugGap","keywords":"debuggap, debug, 移动调试, node-webkit, Weinre, 移动调试方法总结","date":"2015-06-30T22:57:00.000Z","categories":"debug","bodyContent":"最近在公司项目一直做着触屏的项目，这里不是要说项目开发的实际内容，而是调试。说到调试，目前有几种方案：\n\n## 1. Chrome的截屏\n\n在PC上开发触屏项目，目前用得最多而且最方便的调试方式应该是chrome的截屏，支持20+种设备模拟，然并卵，chrome的截屏与实际的移动设备使用情况还是存在许多不一致的地方，导致很多问题在开发时没发现，一到了线上用手机测试就冒了出来😢。所以，chrome截屏并不能用来测试解决多数的兼容性问题。\n\n## 2. Weinre\n\n其实说起weinre，还真不想去提他。吐槽下他的文档，内容说得虽然是够清晰，但是整体样式排版看着真心别扭。[weinre官方文档](http://people.apache.org/~pmuellr/weinre/docs/latest/)。\n\n## 3. 路由代理\n\n这个可以算是用得最舒服的一种方式了，但是前提是有属于你自己或者小组一个路由器随你们玩弄。这种方法就是拥有一个路由器，然后使用一个路由代理将其ip进行映射到你的机器上，例如你PC当前的ip是192.168.190.199，希望映射的域名是hahaha.com，那在路由代理那里进行映射（公司用的是极路由），然后手机连接与PC同一个路由器，再访问hahaha.com就可以访问到本地机器的页面了。当然，这种方式更多是看页面样式、交互一些表面的问题，但例如脚本错误、异常情况等是没办法用这种方法进行测试的。\n\n## 4. DebugGap\n\n[DebugGap](http://www.debuggap.com/)被誉为最强大的webview与浏览器调试工具，建立在[node-webkit](https://github.com/nwjs/nw.js)上。在DebugGap官网下载符合你当前电脑的版本，运行一个app并填入监听的ip以及端口，给需要测试的界面引入一个debuggap.js脚本，便可以开始你的调试。\n\n#### DebugGap使用总结，按照步骤列举如下：\n\n- (1) 到[DebugGap官网](http://www.debuggap.com/)下载应用程序，不需安装，解压即可以用；\n\n- (2) 在需要调试的页面引用debuggap.js，\n\n- (3) 本地需要配置：\n\na) nginx配置\n\nb) host配置\n\nc) 浏览器访问http://frend.cc\n<br/>\n\n##### 访问页面，注意右上角出现的蓝色按钮\n![image](https://frender.github.io/blog/images/post/debuggap/browser-step1.png)\n\n##### 点击蓝色按钮，出现四叶草，选择config连接到debuggap app\n![image](https://frender.github.io/blog/images/post/debuggap/browser-step2.png)\n\n##### 输入ip、ports\n![image](https://frender.github.io/blog/images/post/debuggap/browser-step3.png)\n\nd) debuggap app连接，并调试\n<br/>\n\n##### 连接debuggap，给各个端提供监听对象\n![image](https://frender.github.io/blog/images/post/debuggap/debuggap-step1.png)\n\n##### 获取当前在监听的设备\n![image](https://frender.github.io/blog/images/post/debuggap/debuggap-step2.png)\n\n##### 选择监听的设备，展示控制台\n![image](https://frender.github.io/blog/images/post/debuggap/debuggap-step3.png)\n\n##### 控制台展示网站的静态资源(`注意`右侧显示不支持单步调试提示，这里如果使用android+chrome需要用数据线连接手机与电脑，并手机打开USB调试模式以及开发者选项)\n![image](https://frender.github.io/blog/images/post/debuggap/debuggap-step4.png)\n\n- (4) 以上的模拟场景设备支持为：mac + chrome(截屏)。如果要使用实际的手机设备来测试，需要一个局域网，即上面第三点[路由代理](#路由代理)说的那样，然后进行页面的访问。\n\n- (5) 你以为做完(4)就OK了吗？！NO！！！还有坑！——\n\n`坑一：` IOS8.1.x以上是看不到控制台可以调试的内容，即以下的图展示的内容，看不到！！！\n![image](https://frender.github.io/blog/images/post/debuggap/debuggap-step3.png)\n\n`坑二：`手机必须用USB连接上电脑才可以单步调试，从不知道到知道，我折腾了好久，不要问我是怎么发现的\n\n`坑三：`你用iphone来调试？还想用chrome来访问？呵呵，这里貌似不行，至于为什么，我也不懂。。。\n\n`坑四：`吐槽国内的使用分享文章，清一色抄官网的，细节没说清，导致我经历了以上好多坑\n\n<br/>\n\n## 5. 安卓在chrome上的同步调试\n\n[Remote Debugging on Android with Chrome](https://developer.chrome.com/devtools/docs/remote-debugging)，这个是chrome提供的通过使用安卓设备，在chrome上面进行同步调试的使用教程。亲测之后感觉很方便，需要一台装有chrome的安卓手机，连接到mac上即可同步调试，比4说的[DebugGap](#DebugGap)要好用得多。唯一不好的，就是手机需要通过USB连接mac，不能实现DebugGao那样的一个调试终端，多个远程终端。\n\n<br/>\n\n## 6. iphone与mac在safari上同步调试\n\n既然可以通过安卓手机同步测试，那iphone的话就可以通过使用safari来做同步测试。[iphone与mac在safari上同步调试](http://chon.io/blog/safari-ios-iphone-itouch-web-dev-inspector/)，这个例子可以教你怎样设置iphone与mac，剩下的步骤就非常简单了。\n\n<br/>\n\n## 7. browser-sync\n\n[link](http://www.browsersync.io/)","bodyHtml":"<p>最近在公司项目一直做着触屏的项目，这里不是要说项目开发的实际内容，而是调试。说到调试，目前有几种方案：</p>\n<h2>1. Chrome的截屏</h2>\n<p>在PC上开发触屏项目，目前用得最多而且最方便的调试方式应该是chrome的截屏，支持20+种设备模拟，然并卵，chrome的截屏与实际的移动设备使用情况还是存在许多不一致的地方，导致很多问题在开发时没发现，一到了线上用手机测试就冒了出来😢。所以，chrome截屏并不能用来测试解决多数的兼容性问题。</p>\n<h2>2. Weinre</h2>\n<p>其实说起weinre，还真不想去提他。吐槽下他的文档，内容说得虽然是够清晰，但是整体样式排版看着真心别扭。<a href=\"http://people.apache.org/~pmuellr/weinre/docs/latest/\">weinre官方文档</a>。</p>\n<h2>3. 路由代理</h2>\n<p>这个可以算是用得最舒服的一种方式了，但是前提是有属于你自己或者小组一个路由器随你们玩弄。这种方法就是拥有一个路由器，然后使用一个路由代理将其ip进行映射到你的机器上，例如你PC当前的ip是192.168.190.199，希望映射的域名是hahaha.com，那在路由代理那里进行映射（公司用的是极路由），然后手机连接与PC同一个路由器，再访问hahaha.com就可以访问到本地机器的页面了。当然，这种方式更多是看页面样式、交互一些表面的问题，但例如脚本错误、异常情况等是没办法用这种方法进行测试的。</p>\n<h2>4. DebugGap</h2>\n<p><a href=\"http://www.debuggap.com/\">DebugGap</a>被誉为最强大的webview与浏览器调试工具，建立在<a href=\"https://github.com/nwjs/nw.js\">node-webkit</a>上。在DebugGap官网下载符合你当前电脑的版本，运行一个app并填入监听的ip以及端口，给需要测试的界面引入一个debuggap.js脚本，便可以开始你的调试。</p>\n<h4>DebugGap使用总结，按照步骤列举如下：</h4>\n<ul>\n<li>\n<p>(1) 到<a href=\"http://www.debuggap.com/\">DebugGap官网</a>下载应用程序，不需安装，解压即可以用；</p>\n</li>\n<li>\n<p>(2) 在需要调试的页面引用debuggap.js，</p>\n</li>\n<li>\n<p>(3) 本地需要配置：</p>\n</li>\n</ul>\n<p>a) nginx配置</p>\n<p>b) host配置</p>\n<p>c) 浏览器访问http://frend.cc\n&lt;br/&gt;</p>\n<h5>访问页面，注意右上角出现的蓝色按钮</h5>\n<p><img src=\"https://frender.github.io/blog/images/post/debuggap/browser-step1.png\" alt=\"image\"></p>\n<h5>点击蓝色按钮，出现四叶草，选择config连接到debuggap app</h5>\n<p><img src=\"https://frender.github.io/blog/images/post/debuggap/browser-step2.png\" alt=\"image\"></p>\n<h5>输入ip、ports</h5>\n<p><img src=\"https://frender.github.io/blog/images/post/debuggap/browser-step3.png\" alt=\"image\"></p>\n<p>d) debuggap app连接，并调试\n&lt;br/&gt;</p>\n<h5>连接debuggap，给各个端提供监听对象</h5>\n<p><img src=\"https://frender.github.io/blog/images/post/debuggap/debuggap-step1.png\" alt=\"image\"></p>\n<h5>获取当前在监听的设备</h5>\n<p><img src=\"https://frender.github.io/blog/images/post/debuggap/debuggap-step2.png\" alt=\"image\"></p>\n<h5>选择监听的设备，展示控制台</h5>\n<p><img src=\"https://frender.github.io/blog/images/post/debuggap/debuggap-step3.png\" alt=\"image\"></p>\n<h5>控制台展示网站的静态资源(<code>注意</code>右侧显示不支持单步调试提示，这里如果使用android+chrome需要用数据线连接手机与电脑，并手机打开USB调试模式以及开发者选项)</h5>\n<p><img src=\"https://frender.github.io/blog/images/post/debuggap/debuggap-step4.png\" alt=\"image\"></p>\n<ul>\n<li>\n<p>(4) 以上的模拟场景设备支持为：mac + chrome(截屏)。如果要使用实际的手机设备来测试，需要一个局域网，即上面第三点<a href=\"#%E8%B7%AF%E7%94%B1%E4%BB%A3%E7%90%86\">路由代理</a>说的那样，然后进行页面的访问。</p>\n</li>\n<li>\n<p>(5) 你以为做完(4)就OK了吗？！NO！！！还有坑！——</p>\n</li>\n</ul>\n<p><code>坑一：</code> IOS8.1.x以上是看不到控制台可以调试的内容，即以下的图展示的内容，看不到！！！\n<img src=\"https://frender.github.io/blog/images/post/debuggap/debuggap-step3.png\" alt=\"image\"></p>\n<p><code>坑二：</code>手机必须用USB连接上电脑才可以单步调试，从不知道到知道，我折腾了好久，不要问我是怎么发现的</p>\n<p><code>坑三：</code>你用iphone来调试？还想用chrome来访问？呵呵，这里貌似不行，至于为什么，我也不懂。。。</p>\n<p><code>坑四：</code>吐槽国内的使用分享文章，清一色抄官网的，细节没说清，导致我经历了以上好多坑</p>\n<p>&lt;br/&gt;</p>\n<h2>5. 安卓在chrome上的同步调试</h2>\n<p><a href=\"https://developer.chrome.com/devtools/docs/remote-debugging\">Remote Debugging on Android with Chrome</a>，这个是chrome提供的通过使用安卓设备，在chrome上面进行同步调试的使用教程。亲测之后感觉很方便，需要一台装有chrome的安卓手机，连接到mac上即可同步调试，比4说的<a href=\"#DebugGap\">DebugGap</a>要好用得多。唯一不好的，就是手机需要通过USB连接mac，不能实现DebugGao那样的一个调试终端，多个远程终端。</p>\n<p>&lt;br/&gt;</p>\n<h2>6. iphone与mac在safari上同步调试</h2>\n<p>既然可以通过安卓手机同步测试，那iphone的话就可以通过使用safari来做同步测试。<a href=\"http://chon.io/blog/safari-ios-iphone-itouch-web-dev-inspector/\">iphone与mac在safari上同步调试</a>，这个例子可以教你怎样设置iphone与mac，剩下的步骤就非常简单了。</p>\n<p>&lt;br/&gt;</p>\n<h2>7. browser-sync</h2>\n<p><a href=\"http://www.browsersync.io/\">link</a></p>\n","preview":"最近在公司项目一直做着触屏的项目，这里不是要说项目开发的实际内容，而是调试。说到调试，目前有几种方案：\n\n1.","dir":"content/posts/2015","base":"06-30-debug-gap.json","ext":".json","sourceBase":"06-30-debug-gap.md","sourceExt":".md"};

/***/ }),

/***/ "./content/posts/2015/07-02-cross-origin.json":
/*!****************************************************!*\
  !*** ./content/posts/2015/07-02-cross-origin.json ***!
  \****************************************************/
/*! exports provided: layout, title, description, keywords, date, categories, bodyContent, bodyHtml, preview, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"layout":"post","title":"跨域解决方案(基于nodejs)","description":"跨域是web开发经常遇到的问题，也是前端开发需要具备的技能之一，目前主流处理跨域的方法有jsonp、cors、postMessage","keywords":"跨域, jsonp, cors, postMessage","date":"2015-07-02T01:20:00.000Z","categories":"javascript","bodyContent":"跨域是web开发过程中经常会遇见的一种问题，因为javascript的同源策略的限制，a.com域名下是无法操作b.com下的对象或者调用接口的。\n\n- 什么情况算跨域？\n\n|-----------------+------------+-----------------+----------------|\n| request url | response url | 说明 | 是否允许通讯 |\n|-----------------|:-----------|:---------------:|---------------:|\n| www.a.com/a.js | www.a.com/b.js | 同一域名 | 允许 |\n|-----------------+------------+-----------------+----------------|\n| www.a.com/a.js | www.a.com:8080/b.js | 同一域名，端口不同 | 不允许 |\n|-----------------+------------+-----------------+----------------|\n| http://www.a.com/a.js | https://www.a.com/b.js | 同一域名，协议不同 | 不允许 |\n|-----------------+------------+-----------------+----------------|\n| www.a.com/a.js | blog.a.com/b.js | 一级域名相同，二级域名不同 | 不允许 |\n|-----------------+------------+-----------------+----------------|\n| www.a.com/a.js | www.b.com/b.js | 不同域名 | 不允许 |\n|-----------------+------------+-----------------+----------------|\n\n<br/>\n\n目前解决跨域的方法比较多，通常有iframe、动态创建script、document.domain、flash、jsonp、cors、postMessage这几种。但本文只给出`jsonp`、`cors`与`postMessage`三种的测试例子。\n\n<br/>\n\n## 测试环境\n\n* node.js  ~0.12.0\n* express  ~4.12.1\n* jade     ~1.9.2\n\n<br/>\n\n## 1. JSONP\n\nJSONP跟JSON是什么关系？JSONP的实现原理是什么？我就不造轮子了，因为我也是看了别人的文章才理解的，直接推荐一篇[讲得很清晰的博文](http://kb.cnblogs.com/page/139725/)。了解后，就开始本地的代码测试吧。\n\n#### 本地模拟跨域\n\n本地要模拟跨域，一开始我是通过使用node启动一个地址为127.0.0.1:3000的server，然后本地在配一个frend.com（这个是nginx启动的一个静态资源server，端口是80，host配置中指向127.0.0.1）。然而这个在调试的过程中居然不跨域，普通的ajax请求居然通过了，这个我也不太理解。\n<br/>\n\n既然上面的情况不算跨域，那我只能起两个不同端口的server了。所以我在本地起了两个基于node的server，但端口分别为3000和3001，来实现跨域。以下就是通过两个端口不一样的服务来测试jsonp解决跨域的方案：\n\n- server1: localhost:3001，作为响应端\n\n响应端代码：\n\n![image](https://frender.github.io/blog/images/post/cross-origin/jsonp/res-code.png)\n\n响应端启动log：\n\n![image](https://frender.github.io/blog/images/post/cross-origin/jsonp/res-log.png)\n\n- server2: localhost:3000，作为请求端\n\n请求端代码：\n\n![image](https://frender.github.io/blog/images/post/cross-origin/jsonp/req-code.png)\n\n请求端启动log：\n\n![image](https://frender.github.io/blog/images/post/cross-origin/jsonp/req-log.png)\n\n- 浏览器访问localhost:3000，响应如下：\n\n![image](https://frender.github.io/blog/images/post/cross-origin/jsonp/req-browser.png)\n\n<br/>\n\n[☞下载JSONP例子源码☜](https://github.com/FrendEr/Cross-Origin)\n\n#### JSONP总结\n\nJSONP实现的原理很简单而且使用jquery的api会非常的方便，只需要配合后台定义好的接口。但是也有缺点，就是只支持GET的请求方式，如果需要使用POST或者传输大量的数据的时候，那我们就只能选择其他方式了，例如下面介绍的[CORS](#CORS)。\n\n<br/>\n\n## 2. CORS\n\nCORS(Cross-Origin Resource Sharing)即跨域资源共享，也是一种实现跨域访问的方法。\n\nCORS的实现原理很简单，只需要在响应端的头信息配置一个`Access-Control-Allow-Origin`的响应信息即可。\n\n- a) 没有配置`Access-Control-Allow-Origin`时，http://localhost:3000向http://localhost:3001发起ajax请求，跨域请求失败。\n\n- b) 设置`Access-Control-Allow-Origin: http://localhost:3000`：\n\n响应代码：\n\n![image](https://frender.github.io/blog/images/post/cross-origin/cors/res-code.png)\n\n请求代码：\n\n![image](https://frender.github.io/blog/images/post/cross-origin/cors/req-code.png)\n\n浏览器访问http://localhost:3000，响应如下：\n\n![image](https://frender.github.io/blog/images/post/cross-origin/cors/res-browser.png)\n\n- c) 设置`Access-Control-Allow-Origin: *`，注意这里的`*`是指所有来源都可以调用该接口：\n\n![image](https://frender.github.io/blog/images/post/cross-origin/cors/res-code2.png)\n\n请求代码：\n\n![image](https://frender.github.io/blog/images/post/cross-origin/cors/req-code.png)\n\n浏览器访问http://localhost:3000，响应如下：\n\n![image](https://frender.github.io/blog/images/post/cross-origin/cors/res-browser.png)\n\n[☞下载CORS例子源码☜](https://github.com/FrendEr/Cross-Origin)\n\n<br/>\n\n#### CORS总结\n\nCORS在使用起来非常方便，但也有缺点。\n\n- ① 兼容性，下图可见，对于需要兼容IE6-7的网站来说，这种方案还是存在着不满足需求的情况。但是对于现代浏览器，特别是在移动端可以放心使用。\n\n![image](https://frender.github.io/blog/images/post/cross-origin/cors/support.png)\n\n- ② 安全性\n\nCORS提供了一种简易的跨域请求方案，但是并没有为安全访问提供足够的保障机制，例如上面`Access-Control-Allow-Origin: *`的情况，所有使用者都可以请求改接口，这给服务端带来了巨大的安全隐患。如果需要保障安全，请参考[OAuth2](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)。\n\n<br/>\n\n## 3. postMessage\n\npostMessage是html5引入的message的API，可以更加方便、有效、安全的解决iframe嵌套跨域问题。详情见[postMessage使用文档 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)。\n\n- 主页面\n\n![image](https://frender.github.io/blog/images/post/cross-origin/postMessage/parent-code.png)\n\n- iframe页面\n\n![image](https://frender.github.io/blog/images/post/cross-origin/postMessage/iframe-code.png)\n\n- 浏览器访问http://localhost:3000，响应如下：\n\n![image](https://frender.github.io/blog/images/post/cross-origin/postMessage/browser.png)\n\n[☞下载postMessage例子源码☜](https://github.com/FrendEr/Cross-Origin)\n\n<br/>\n\n## postMessage总结\n\npostMessage使用非常简单，但是在浏览器支持上对于IE6-7存在不足，如下图：\n\n![image](https://frender.github.io/blog/images/post/cross-origin/postMessage/support.png)\n\n但是现代浏览器对于使用postMessage还是非常有效的，特别是在移动端。","bodyHtml":"<p>跨域是web开发过程中经常会遇见的一种问题，因为javascript的同源策略的限制，a.com域名下是无法操作b.com下的对象或者调用接口的。</p>\n<ul>\n<li>什么情况算跨域？</li>\n</ul>\n<p>|-----------------+------------+-----------------+----------------|</p>\n<table>\n<thead>\n<tr>\n<th>request url</th>\n<th style=\"text-align:left\">response url</th>\n<th style=\"text-align:center\">说明</th>\n<th style=\"text-align:right\">是否允许通讯</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>www.a.com/a.js</td>\n<td style=\"text-align:left\">www.a.com/b.js</td>\n<td style=\"text-align:center\">同一域名</td>\n<td style=\"text-align:right\">允许</td>\n</tr>\n<tr>\n<td>-----------------+------------+-----------------+----------------</td>\n<td style=\"text-align:left\"></td>\n<td style=\"text-align:center\"></td>\n<td style=\"text-align:right\"></td>\n</tr>\n<tr>\n<td>www.a.com/a.js</td>\n<td style=\"text-align:left\">www.a.com:8080/b.js</td>\n<td style=\"text-align:center\">同一域名，端口不同</td>\n<td style=\"text-align:right\">不允许</td>\n</tr>\n<tr>\n<td>-----------------+------------+-----------------+----------------</td>\n<td style=\"text-align:left\"></td>\n<td style=\"text-align:center\"></td>\n<td style=\"text-align:right\"></td>\n</tr>\n<tr>\n<td>http://www.a.com/a.js</td>\n<td style=\"text-align:left\">https://www.a.com/b.js</td>\n<td style=\"text-align:center\">同一域名，协议不同</td>\n<td style=\"text-align:right\">不允许</td>\n</tr>\n<tr>\n<td>-----------------+------------+-----------------+----------------</td>\n<td style=\"text-align:left\"></td>\n<td style=\"text-align:center\"></td>\n<td style=\"text-align:right\"></td>\n</tr>\n<tr>\n<td>www.a.com/a.js</td>\n<td style=\"text-align:left\">blog.a.com/b.js</td>\n<td style=\"text-align:center\">一级域名相同，二级域名不同</td>\n<td style=\"text-align:right\">不允许</td>\n</tr>\n<tr>\n<td>-----------------+------------+-----------------+----------------</td>\n<td style=\"text-align:left\"></td>\n<td style=\"text-align:center\"></td>\n<td style=\"text-align:right\"></td>\n</tr>\n<tr>\n<td>www.a.com/a.js</td>\n<td style=\"text-align:left\">www.b.com/b.js</td>\n<td style=\"text-align:center\">不同域名</td>\n<td style=\"text-align:right\">不允许</td>\n</tr>\n<tr>\n<td>-----------------+------------+-----------------+----------------</td>\n<td style=\"text-align:left\"></td>\n<td style=\"text-align:center\"></td>\n<td style=\"text-align:right\"></td>\n</tr>\n</tbody>\n</table>\n<p>&lt;br/&gt;</p>\n<p>目前解决跨域的方法比较多，通常有iframe、动态创建script、document.domain、flash、jsonp、cors、postMessage这几种。但本文只给出<code>jsonp</code>、<code>cors</code>与<code>postMessage</code>三种的测试例子。</p>\n<p>&lt;br/&gt;</p>\n<h2>测试环境</h2>\n<ul>\n<li>node.js  ~0.12.0</li>\n<li>express  ~4.12.1</li>\n<li>jade     ~1.9.2</li>\n</ul>\n<p>&lt;br/&gt;</p>\n<h2>1. JSONP</h2>\n<p>JSONP跟JSON是什么关系？JSONP的实现原理是什么？我就不造轮子了，因为我也是看了别人的文章才理解的，直接推荐一篇<a href=\"http://kb.cnblogs.com/page/139725/\">讲得很清晰的博文</a>。了解后，就开始本地的代码测试吧。</p>\n<h4>本地模拟跨域</h4>\n<p>本地要模拟跨域，一开始我是通过使用node启动一个地址为127.0.0.1:3000的server，然后本地在配一个frend.com（这个是nginx启动的一个静态资源server，端口是80，host配置中指向127.0.0.1）。然而这个在调试的过程中居然不跨域，普通的ajax请求居然通过了，这个我也不太理解。\n&lt;br/&gt;</p>\n<p>既然上面的情况不算跨域，那我只能起两个不同端口的server了。所以我在本地起了两个基于node的server，但端口分别为3000和3001，来实现跨域。以下就是通过两个端口不一样的服务来测试jsonp解决跨域的方案：</p>\n<ul>\n<li>server1: localhost:3001，作为响应端</li>\n</ul>\n<p>响应端代码：</p>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/jsonp/res-code.png\" alt=\"image\"></p>\n<p>响应端启动log：</p>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/jsonp/res-log.png\" alt=\"image\"></p>\n<ul>\n<li>server2: localhost:3000，作为请求端</li>\n</ul>\n<p>请求端代码：</p>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/jsonp/req-code.png\" alt=\"image\"></p>\n<p>请求端启动log：</p>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/jsonp/req-log.png\" alt=\"image\"></p>\n<ul>\n<li>浏览器访问localhost:3000，响应如下：</li>\n</ul>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/jsonp/req-browser.png\" alt=\"image\"></p>\n<p>&lt;br/&gt;</p>\n<p><a href=\"https://github.com/FrendEr/Cross-Origin\">☞下载JSONP例子源码☜</a></p>\n<h4>JSONP总结</h4>\n<p>JSONP实现的原理很简单而且使用jquery的api会非常的方便，只需要配合后台定义好的接口。但是也有缺点，就是只支持GET的请求方式，如果需要使用POST或者传输大量的数据的时候，那我们就只能选择其他方式了，例如下面介绍的<a href=\"#CORS\">CORS</a>。</p>\n<p>&lt;br/&gt;</p>\n<h2>2. CORS</h2>\n<p>CORS(Cross-Origin Resource Sharing)即跨域资源共享，也是一种实现跨域访问的方法。</p>\n<p>CORS的实现原理很简单，只需要在响应端的头信息配置一个<code>Access-Control-Allow-Origin</code>的响应信息即可。</p>\n<ul>\n<li>\n<p>a) 没有配置<code>Access-Control-Allow-Origin</code>时，http://localhost:3000向http://localhost:3001发起ajax请求，跨域请求失败。</p>\n</li>\n<li>\n<p>b) 设置<code>Access-Control-Allow-Origin: http://localhost:3000</code>：</p>\n</li>\n</ul>\n<p>响应代码：</p>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/cors/res-code.png\" alt=\"image\"></p>\n<p>请求代码：</p>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/cors/req-code.png\" alt=\"image\"></p>\n<p>浏览器访问http://localhost:3000，响应如下：</p>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/cors/res-browser.png\" alt=\"image\"></p>\n<ul>\n<li>c) 设置<code>Access-Control-Allow-Origin: *</code>，注意这里的<code>*</code>是指所有来源都可以调用该接口：</li>\n</ul>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/cors/res-code2.png\" alt=\"image\"></p>\n<p>请求代码：</p>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/cors/req-code.png\" alt=\"image\"></p>\n<p>浏览器访问http://localhost:3000，响应如下：</p>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/cors/res-browser.png\" alt=\"image\"></p>\n<p><a href=\"https://github.com/FrendEr/Cross-Origin\">☞下载CORS例子源码☜</a></p>\n<p>&lt;br/&gt;</p>\n<h4>CORS总结</h4>\n<p>CORS在使用起来非常方便，但也有缺点。</p>\n<ul>\n<li>① 兼容性，下图可见，对于需要兼容IE6-7的网站来说，这种方案还是存在着不满足需求的情况。但是对于现代浏览器，特别是在移动端可以放心使用。</li>\n</ul>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/cors/support.png\" alt=\"image\"></p>\n<ul>\n<li>② 安全性</li>\n</ul>\n<p>CORS提供了一种简易的跨域请求方案，但是并没有为安全访问提供足够的保障机制，例如上面<code>Access-Control-Allow-Origin: *</code>的情况，所有使用者都可以请求改接口，这给服务端带来了巨大的安全隐患。如果需要保障安全，请参考<a href=\"http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html\">OAuth2</a>。</p>\n<p>&lt;br/&gt;</p>\n<h2>3. postMessage</h2>\n<p>postMessage是html5引入的message的API，可以更加方便、有效、安全的解决iframe嵌套跨域问题。详情见<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage\">postMessage使用文档 - MDN</a>。</p>\n<ul>\n<li>主页面</li>\n</ul>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/postMessage/parent-code.png\" alt=\"image\"></p>\n<ul>\n<li>iframe页面</li>\n</ul>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/postMessage/iframe-code.png\" alt=\"image\"></p>\n<ul>\n<li>浏览器访问http://localhost:3000，响应如下：</li>\n</ul>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/postMessage/browser.png\" alt=\"image\"></p>\n<p><a href=\"https://github.com/FrendEr/Cross-Origin\">☞下载postMessage例子源码☜</a></p>\n<p>&lt;br/&gt;</p>\n<h2>postMessage总结</h2>\n<p>postMessage使用非常简单，但是在浏览器支持上对于IE6-7存在不足，如下图：</p>\n<p><img src=\"https://frender.github.io/blog/images/post/cross-origin/postMessage/support.png\" alt=\"image\"></p>\n<p>但是现代浏览器对于使用postMessage还是非常有效的，特别是在移动端。</p>\n","preview":"","dir":"content/posts/2015","base":"07-02-cross-origin.json","ext":".json","sourceBase":"07-02-cross-origin.md","sourceExt":".md"};

/***/ }),

/***/ "./content/posts/2015/11-10-npm-package-version.json":
/*!***********************************************************!*\
  !*** ./content/posts/2015/11-10-npm-package-version.json ***!
  \***********************************************************/
/*! exports provided: layout, title, description, keywords, date, categories, bodyContent, bodyHtml, preview, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"layout":"post","title":"NPM 版本管理","description":"npm package version description","keywords":"npm, version","date":"2015-11-10T00:00:00.000Z","categories":"npm","bodyContent":"> 在发布与使用npm package的时候，对于package version的定义与使用规则存在疑惑，所以整理了一份文档。这个repo仅作记录与探讨npm包的版本号使用。\n\n> 如果描述中存在错误的地方，望指出。\n\n<br>\n\n\n## Publish package时，x.y.z代表什么？\n\n> x.y.z 对应的表达式是 major.minor.patch\n\n- **v1.0.0 表示 Release(正式发布)** : the project is going to be shared with others, it should start at 1.0.0(Npm rule).\n\n- **v1.0.1 表示 Patch release(补丁发布)** : make some backwards-compatible bug fixes\n\n``` javascript\n\n// npm version cmd\nnpm version patch\n\n// package version changes to\nv1.0.0 ===> v1.0.1\n\n```\n\n- **v1.1.0 表示 Minor release(小迭代版本发布)** : add new features but don't break existing features. It's `backwards compatibility`.\n\n``` javascript\n\n// npm version cmd\nnpm version minor\n\n// package version changes to\nv1.0.1 ===> v1.1.0\n\n```\n\n- **v2.0.0 表示 Major release(主版本发布)** : changes which `break backwards compatibility`.\n\n``` javascript\n\n// npm version cmd\nnpm version major\n\n// package version changes to\nv1.1.0 ===> v2.0.0\n\n```\n\n<br>\n\n\n## Publish package的命令(SemVer)\n\n- **Patch release**\n\n> 执行后x.y.z中的z自动加1\n\n``` javascript\n\nnpm version patch\n\n```\n\n- **Minor release**\n\n> 执行后x.y.z中的y自动加1，z重置为0\n\n``` javascript\n\nnpm version minor\n\n```\n\n- **Major release**\n\n> 执行后x.y.z中的x自动加1，y和z重置为0\n\n``` javascript\n\nnpm version major\n\n```\n\n<br>\n\n\n## Install package时，`常见`的版本号匹配规则\n\n- **>1.0.1**\n\n``` javascript\n\n>1.0.1 (1.0.2, 1.0.3 etc)\n\n```\n\n\n- **>=1.0.1**\n\n``` javascript\n\n>=1.0.1 (1.0.1, 1.0.2, 1.0.3 etc)\n\n```\n\n\n- **<1.0.5**\n\n``` javascript\n\n<1.0.5 (1.0.4, 1.0.3 etc)\n\n```\n\n\n- **<=1.0.5**\n\n``` javascript\n\n<=1.0.5 (1.0.5, 1.0.4, 1.0.3 etc)\n\n```\n\n\n- **>1.2.3-alpha.2**\n\n``` javascript\n\nprerelease version, match 1.2.3-alpha.3, 1.2.3-alpha.4 etc, but not match 4.5.6-alpha.3\n\n```\n\n\n- **1.1.x**\n\n``` javascript\n\n>=1.1.0 && < 1.2.0\n\n```\n\n\n- **~1.1.4**\n\n``` javascript\n\n>=1.1.4 && <1.2.0\n\n```\n\n\n- **^1.1.4**\n\n``` javascript\n\n>=1.1.4 && <2.0.0\n\n```\n\n<br>\n\n\n## 关于~(tilde) 和 ^(caret)\n\n> 从node v0.10.26开始，通过`install --save`安装的模块会使用^(caret)代替~(tilde)。\n\n##### ~(tilde) 和 ^(caret)的匹配规则不同，例如：~1.0.4会在[ >=1.0.4 && <1.1.0 ]中匹配1.0.x的最高版本；^1.0.4会在[ >= 1.0.4 && <2.0.0 ]中匹配1.x.x的最高版本。\n\n<br>\n\n\n## 是否该使用0.y.z这样的版本？\n\n> Major version zero (0.y.z) is for initial development. Anything may change at any time. The public API should not be considered stable.\n> ― semver.org\n\n##### 上面是官方的文档说明，意思是由于不是正式发布的版本，模块的API随时可能会被修改，而且可能会不向后兼容，因此模块的API为不稳定的API。\n\n<br>\n\n\n## 参考文档\n\n- [Semantic versioning and npm](https://docs.npmjs.com/getting-started/semantic-versioning) -- **Npm Tutorial**\n\n- [The semantic versioner for npm](https://docs.npmjs.com/misc/semver) -- **Npm Tutorial**\n\n- [**npm install --save** No Longer Using Tildes](http://fredkschott.com/post/2014/02/npm-no-longer-defaults-to-tildes/) --  **@FredKSchott**","bodyHtml":"<blockquote>\n<p>在发布与使用npm package的时候，对于package version的定义与使用规则存在疑惑，所以整理了一份文档。这个repo仅作记录与探讨npm包的版本号使用。</p>\n</blockquote>\n<blockquote>\n<p>如果描述中存在错误的地方，望指出。</p>\n</blockquote>\n<p>&lt;br&gt;</p>\n<h2>Publish package时，x.y.z代表什么？</h2>\n<blockquote>\n<p>x.y.z 对应的表达式是 major.minor.patch</p>\n</blockquote>\n<ul>\n<li>\n<p><strong>v1.0.0 表示 Release(正式发布)</strong> : the project is going to be shared with others, it should start at 1.0.0(Npm rule).</p>\n</li>\n<li>\n<p><strong>v1.0.1 表示 Patch release(补丁发布)</strong> : make some backwards-compatible bug fixes</p>\n</li>\n</ul>\n<pre><code class=\"hljs\">// npm version cmd\nnpm version patch\n\n// package version changes to\nv1.0.0 ===&gt; v1.0.1</code></pre><ul>\n<li><strong>v1.1.0 表示 Minor release(小迭代版本发布)</strong> : add new features but don't break existing features. It's <code>backwards compatibility</code>.</li>\n</ul>\n<pre><code class=\"hljs\">// npm version cmd\nnpm version minor\n\n// package version changes to\nv1.0.1 ===&gt; v1.1.0</code></pre><ul>\n<li><strong>v2.0.0 表示 Major release(主版本发布)</strong> : changes which <code>break backwards compatibility</code>.</li>\n</ul>\n<pre><code class=\"hljs\">// npm version cmd\nnpm version major\n\n// package version changes to\nv1.1.0 ===&gt; v2.0.0</code></pre><p>&lt;br&gt;</p>\n<h2>Publish package的命令(SemVer)</h2>\n<ul>\n<li><strong>Patch release</strong></li>\n</ul>\n<blockquote>\n<p>执行后x.y.z中的z自动加1</p>\n</blockquote>\n<pre><code class=\"hljs\">npm version patch</code></pre><ul>\n<li><strong>Minor release</strong></li>\n</ul>\n<blockquote>\n<p>执行后x.y.z中的y自动加1，z重置为0</p>\n</blockquote>\n<pre><code class=\"hljs\">npm version minor</code></pre><ul>\n<li><strong>Major release</strong></li>\n</ul>\n<blockquote>\n<p>执行后x.y.z中的x自动加1，y和z重置为0</p>\n</blockquote>\n<pre><code class=\"hljs\">npm version major</code></pre><p>&lt;br&gt;</p>\n<h2>Install package时，<code>常见</code>的版本号匹配规则</h2>\n<ul>\n<li><strong>&gt;1.0.1</strong></li>\n</ul>\n<pre><code class=\"hljs\">&gt;1.0.1 (1.0.2, 1.0.3 etc)</code></pre><ul>\n<li><strong>&gt;=1.0.1</strong></li>\n</ul>\n<pre><code class=\"hljs\">&gt;=1.0.1 (1.0.1, 1.0.2, 1.0.3 etc)</code></pre><ul>\n<li><strong>&lt;1.0.5</strong></li>\n</ul>\n<pre><code class=\"hljs\">&lt;1.0.5 (1.0.4, 1.0.3 etc)</code></pre><ul>\n<li><strong>&lt;=1.0.5</strong></li>\n</ul>\n<pre><code class=\"hljs\">&lt;=1.0.5 (1.0.5, 1.0.4, 1.0.3 etc)</code></pre><ul>\n<li><strong>&gt;1.2.3-alpha.2</strong></li>\n</ul>\n<pre><code class=\"hljs\">prerelease version, match 1.2.3-alpha.3, 1.2.3-alpha.4 etc, but not match 4.5.6-alpha.3</code></pre><ul>\n<li><strong>1.1.x</strong></li>\n</ul>\n<pre><code class=\"hljs\">&gt;=1.1.0 &amp;&amp; &lt; 1.2.0</code></pre><ul>\n<li><strong>~1.1.4</strong></li>\n</ul>\n<pre><code class=\"hljs\">&gt;=1.1.4 &amp;&amp; &lt;1.2.0</code></pre><ul>\n<li><strong>^1.1.4</strong></li>\n</ul>\n<pre><code class=\"hljs\">&gt;=1.1.4 &amp;&amp; &lt;2.0.0</code></pre><p>&lt;br&gt;</p>\n<h2>关于~(tilde) 和 ^(caret)</h2>\n<blockquote>\n<p>从node v0.10.26开始，通过<code>install --save</code>安装的模块会使用^(caret)代替~(tilde)。</p>\n</blockquote>\n<h5>~(tilde) 和 ^(caret)的匹配规则不同，例如：~1.0.4会在[ &gt;=1.0.4 &amp;&amp; &lt;1.1.0 ]中匹配1.0.x的最高版本；^1.0.4会在[ &gt;= 1.0.4 &amp;&amp; &lt;2.0.0 ]中匹配1.x.x的最高版本。</h5>\n<p>&lt;br&gt;</p>\n<h2>是否该使用0.y.z这样的版本？</h2>\n<blockquote>\n<p>Major version zero (0.y.z) is for initial development. Anything may change at any time. The public API should not be considered stable.\n― semver.org</p>\n</blockquote>\n<h5>上面是官方的文档说明，意思是由于不是正式发布的版本，模块的API随时可能会被修改，而且可能会不向后兼容，因此模块的API为不稳定的API。</h5>\n<p>&lt;br&gt;</p>\n<h2>参考文档</h2>\n<ul>\n<li>\n<p><a href=\"https://docs.npmjs.com/getting-started/semantic-versioning\">Semantic versioning and npm</a> -- <strong>Npm Tutorial</strong></p>\n</li>\n<li>\n<p><a href=\"https://docs.npmjs.com/misc/semver\">The semantic versioner for npm</a> -- <strong>Npm Tutorial</strong></p>\n</li>\n<li>\n<p><a href=\"http://fredkschott.com/post/2014/02/npm-no-longer-defaults-to-tildes/\"><strong>npm install --save</strong> No Longer Using Tildes</a> --  <strong>@FredKSchott</strong></p>\n</li>\n</ul>\n","preview":"在发布与使用npm package的时候，对于package version的定义与使用规则存在疑惑，所以整理了一份文档。这个repo仅作记录与探讨npm包的版本号使用。\n\n>","dir":"content/posts/2015","base":"11-10-npm-package-version.json","ext":".json","sourceBase":"11-10-npm-package-version.md","sourceExt":".md"};

/***/ }),

/***/ "./content/posts/2016/02-06-how-to-do-an-unit-test.json":
/*!**************************************************************!*\
  !*** ./content/posts/2016/02-06-how-to-do-an-unit-test.json ***!
  \**************************************************************/
/*! exports provided: layout, title, description, keywords, date, categories, bodyContent, bodyHtml, preview, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"layout":"post","title":"前端单元测试 - 工具使用与运行配置","description":"前端单元测试入门学习，工具的使用以及基础运行配置","keywords":"unit test, chai, mocha, sinon, react, es6","date":"2016-02-06T00:00:00.000Z","categories":"unit-test","bodyContent":"## 用到的测试工具（框架）\n\n> 俗话说：工欲善其事必先利其器。要做好单元测试，必须有一套好的辅助工具。\n\n### Mocha\n\n> [Mocha](http://mochajs.org/) 是一个可以运行在 node 环境与 browser 环境的测试框架，它的作用是一个任务运行器，因此它并不太关心测试本身，而是关心测试的结构，测试的结构决定着怎样让测试知道代码运行失败了以及怎样显示结果。\n\n使用 Mocha 创建代码的方式非常简单，通过使用 `describe` 块来展示你的库（模块）中不同组件（函数），然后在其中添加 `it` 块来制定特殊的测试逻辑。\n\n``` javascript\n\nvar assert = require('assert');\ndescribe('Array', function() {\n    describe('#indexOf()', function () {\n        it('should return -1 when the value is not present', function () {\n            assert.equal(-1, [1,2,3].indexOf(5));\n        });\n    });\n});\n\n```\n\n`备注`：Mocha 本身集成了 `assert` 断言模块，但它允许你使用任何一个你希望使用的断言库，包括 [Chai](http://chaijs.com/)、[should.js](https://github.com/shouldjs/should.js)、[expect.js](https://github.com/Automattic/expect.js) 等。这也正是使用 Mocha 十分灵活的一个地方。在项目中我选择使用 chai 作为断言库。\n\n上面说到了 Mocha 的重点是控制着测试代码的结构以及整个测试的流程，所以 Mocha 也提供了在测试的周期中方便我们控制模拟整个测试流程的一些钩子（Hook）函数。\n\n> Mocha 为我们提供了 before()、after()、beforeEach()、afterEach() 的钩子函数，允许我们在测试代码执行前进行预处理以及代码执行后进行清理工作。\n\n``` javascript\n\ndescribe('Hooks', function() {\n\n    // 当前block --> 当前describe\n\n    before(function() {\n        // runs before all tests in this block\n    });\n\n    after(function() {\n        // runs after all tests in this block\n    });\n\n    beforeEach(function() {\n        // runs before each test in this block\n    });\n\n    afterEach(function() {\n        // runs after each test in this block\n    });\n\n    // test cases\n});\n\n```\n\nMocha 更多的使用细节不在这里展开说明，有需要请看[官方文档](http://mochajs.org/)。\n\n### Chai\n\n> chai 是一个断言库，提供 expect、assert 以及 should 三种断言方式。更多使用细节请看[官方文档](http://chaijs.com/)。\n\n使用 chai 中的 expect 改写上面的例子：\n\n``` javascript\n\nimport { expect } from 'chai';\ndescribe('Array', function() {\n    describe('#indexOf()', function () {\n        it('should return -1 when the value is not present', function () {\n            expect([1,2,3].indexOf(5)).to.equal(-1);\n        });\n    });\n});\n\n```\n\n在使用 should 方式的断言前，需要进行初始化。\n\n``` javascript\n\nimport chai from 'chai';\n\nchai.should();\n\n```\n\nchai 还提供了 use() 的接口，让我们加载基于 chai 的测试插件\n\n``` javascript\n\nimport sinonChai from 'sinon-chai';\nimport chaiAsPromised from 'chai-as-promised';\n\nchai.use(sinonChai);\nchai.use(chaiAsPromised);\n\n```\n\n### Sinon\n\n> 前端开发少不了需要 mock 的情况，这里的 mock 并不单纯代表数据，Sinon 可以为我们 mock 包括函数调用、网络请求、超时、数据库操作等。\n\nsinon 有很多强大的 API，见[官网](http://sinonjs.org/docs/)。在了解如何使用 sinon 时，spy、stub 和 mock 各自的使用场景是最让我感到迷惑的，看了官网的介绍也是一头雾水。这里推荐一篇不错的文章 [Best Practices for Spies, Stubs and Mocks in Sinon.js](https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)，下面也是通过对这篇文章的简单总结，给出一个使用场景的简单说明：\n\n* sinon.spy()\n\n> spy 允许我们获取函数调用返回的信息，包括调用次数、传入的参数、返回值以及抛出的异常等。这些可以通过 sinon 提供的[断言API](http://sinonjs.org/docs/#assertions)轻松实现。但是，spy 是不会对测试的函数行为造成影响的，如果我们需要修改测试的函数的行为，我们则需要去使用 stub。\n\n* sinon.stub()\n\n> stub 跟 spy 的行为是一致的，而且 stub 可以使用 spy 所拥有的 API。stub 的特殊之处，是允许我们修改函数的行为，即我们可以把测试的函数进行替换。这样，我们让函数返回我们预设的返回值或者异常情况。更多关于 stub 的使用方法请看 [这里](http://sinonjs.org/docs/#stubs)。\n\n* sinon.mock()\n\n> 如果我们需要使用 stub，同时我们需要验证函数多个行为时，我们就应该使用 mock。mock 允许我们通过 verify() 去同时验证函数的多个行为，例如：调用次数、传入参数等。\n\n### Enzyme\n\n> enzyme 是 airbnb 提供的一个用来测试 react 组件的测试工具。由于 enzyme 的 API 是效仿 jQuery 的，所以我们可以按照 jQuery 操作 DOM 的思路去操作我们的 react 组件，进行测试。\n\nenzyme 提供3种基本的使用方法：\n\n* [Shallow Rendering](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md)\n\n> Enzyme 提供的 shallow 方法，可以让你可以把一个组件当做一个测试单元来看待，确保你的测试代码不会间接的去断言子组件的行为。我们可以通过enzyme提供的 API 去操作子组件来达到我们的测试需求。这个让我们很轻松的去测试组件的渲染逻辑是否正确，结合一些API我们还可以轻松的去模拟用户的行为，测试变化后组件的渲染逻辑。\n\n``` javascript\n\nimport { shallow } from 'enzyme';\n\ndescribe('<MyComponent />', () => {\n\n    it('should render `.icon-star` element', () => {\n        const wrapper = shallow(<MyComponent />);\n        expect(wrapper.find('.icon-star')).to.have.length(1);\n    });\n\n});\n\n```\n`备注`：Mocha 不提倡使用箭头函数（arrow function），因为在箭头函数中，this 会自动与当前的作用域进行绑定，并且不允许修改。如果在回调函数中需要使用 this.timeout(1000) 方法时，会发现 this => undefined。这种情况下请使用普通的匿名函数。\n\n* [JSDOM Full Rendering](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md)\n\n> Enzyme 提供的 mount 方法适用于，当我们的组件需要与 DOM api 进行交互或者需要测试组件的整个完整的生命周期的情况。它的实现是基于 [jsdom](https://github.com/tmpvar/jsdom)。\n\n``` javascript\n\nimport { mount } from 'enzyme';\n\ndescribe('<Foo />', () => {\n\n    it('calls componentDidMount', () => {\n        spy(Foo.prototype, 'componentDidMount');\n        const wrapper = mount(<Foo />);\n        expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);\n    });\n\n});\n\n```\n\n* [Static Rendered Markup](https://github.com/airbnb/enzyme/blob/master/docs/api/render.md)\n\n> Enzyme 提供的 render 方法可以把我们的 react 组件渲染成静态的 HTML，render 返回的渲染对象 wrapper 与使用 mount、shallow很相似，但是它是基于一个叫做 [Cheerio](https://github.com/cheeriojs/cheerio) 的库。\n\n``` javascript\n\nimport { render } from 'enzyme';\n\ndescribe('<Foo />', () => {\n\n    it('renders three `.foo-bar`s', () => {\n        const wrapper = render(<Foo />);\n        expect(wrapper.find('.foo-bar')).to.have.length(3);\n    });\n\n    it('rendered the title', () => {\n        const wrapper = render(<Foo title=\"unique\" />);\n        expect(wrapper.text()).to.contain(\"unique\");\n    });\n\n});\n\n```\n\n### Istanbul\n\n> Istanbul 是一个帮助我们统计测试覆盖率的工具。\n\n* 安装 istanbul\n\n``` javascript\n\nnpm install istanbul --save-dev\n\n```\n\n* 启动命令\n\n``` javascript\n\n./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha\n\n```\n\n`备注`：上面的命令中使用`_mocha`可以正常输出测试覆盖率的数据，但使用`mocha`则报`No coverage information was collected, exit without writing coverage information`。因为，[mocha 和 _mocha 是两个不同的命令](https://github.com/gotwarlost/istanbul/issues/44)，前者会新建一个进程执行测试，而后者是在当前进程（即 istanbul 所在的进程）执行测试，只有这样， istanbul 才会捕捉到覆盖率数据。其他测试框架也是如此，必须在同一个进程执行测试。下同。\n\n* 为 mocha 传参\n\n``` javascript\n\n./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- test/setupNewUser-spec.js\n\n```\n\n`备注`：上面的命令中 `--` 后面的部分会当做 mocha 的参数被传入，如果不加 `--` 则会作为 istanbul 的参数。\n\n### Isparta + Babel\n\n> Isparta + Babel 可以让我们对使用es2015语法的源代码进行测试覆盖率统计。当然，对于使用非es2015语法的代码也是能够正常使用的。\n\n* 安装 Isparta + Babel\n\n``` javascript\n\nnpm install babel-cli isparta --save-dev\n\n```\n\n* 启动命令\n\n``` javascript\n\n./node_modules/.bin/babel-node ./node_modules/.bin/isparta cover ./node_modules/.bin/_mocha\n\n```\n\n\n`备注`：在运行以上命令时，可能会报下面的提示\n\n``` javascript\n\nTransformation error; return original code\n{ [Error: Line 1: Unexpected token ILLEGAL]\n  lineNumber: 1,\n  description: 'Unexpected token ILLEGAL',\n  index: 0 }\n\n```\n\n这个提示并不影响测试代码的运行，但是有强迫症的程序员表示看不得有一个错误提示，可以通过添加一个 `.istanbul.yml` 文件进行处理（[#issues 47](https://github.com/douglasduteil/isparta/issues/47#issuecomment-121014224)）\n\n``` javascript\n\n# .istanbul.yml\ninstrumentation:\n  root: src\n\n```\n\n再次运行测试脚本，发现一切都干净了。\n\n* 运行结果截图（自行运行 `example` 目录内的例子或者使用 [`generator-tman`](https://github.com/FrendEr/generator-tman) 初始化项目）\n\n![运行结果](https://raw.githubusercontent.com/FrendEr/blog/gh-pages/images/post/how-to-an-unit-test/result.png)\n\n## 如何启动一个测试\n\n> 以下配置是根据在xxx项目组件需要进行的，技术选型不同配置的方案必然不相同。以下的配置方案是基于：react + es2015。\n\n#### 配置.babelrc\n\n* 安装依赖包\n\n``` javascript\n\nnpm i babel-preset-es2015 babel-preset-react --save-dev\n\n```\n\n* 配置.babelrc\n\n``` javascript\n\n{\n    \"presets\": [\"es2015\", \"react\"]\n}\n\n```\n\n`备注`：在 babel 6.0 以后不再只是 es2015 transpiler，同时也支持 jsx 等语法的编译。我们需要安装相关的 presets 去处理我们的需求。\n\n#### 测试启动命令\n\n* 安装依赖包\n\n``` javascript\n\nnpm i babel-register --save-dev\n\n```\n\n* 执行测试命令\n\n``` javascript\n\nmocha --compilers js:babel-register --recursive\n\n```\n\n这里用到了 `--compilers js:babel-register` —— 允许我们选择编译器，这里对js使用了babel，会自动读取 `.babelrc` 里面的配置；`--recursive` —— 会遍历执行test/目录下所有的测试文件。执行 `mocha -h` 可以查看完整的参数说明。\n\n* 为了使用方便，建议配置在 package.json 里面，通过执行 `npm test` 运行测试\n\n``` javascript\n\n\"scripts\": {\n    \"test\": \"mocha --compilers js:babel-register --recursive\"\n}\n\n```\n\n#### 测试目录以及文件命名\n\n``` javascript\n\n├── package.json\n├── setupNewUser.js\n└── test\n    └── setupNewUser-spec.js\n\n```\n\n上面配置的命令会让 mocha 遍历test/目录下所有的测试文件。在命名上，为了让测试脚本与组件（库）脚本对应起来，一般会这样命名：'组件名字' + '-spec.js' 、 '组件名字' + 'Spec.js'、'组件名字' + '.spec.js'。\n\n\n## 参考资料\n* [Mocha 官网](http://mochajs.org/)\n* [Chai 官网](http://chaijs.com/)\n* [Sinon 官网](http://sinonjs.org/)\n* [Enzyme 官网](http://airbnb.io/enzyme/)\n* [Best Practices for Spies, Stubs and Mocks in Sinon.js](https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)\n* [Mocha + Chai.js unit testing for ES6 with Istanbul code coverage](https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/)\n* [代码覆盖率工具 Istanbul 入门教程](http://www.ruanyifeng.com/blog/2015/06/istanbul.html)","bodyHtml":"<h2>用到的测试工具（框架）</h2>\n<blockquote>\n<p>俗话说：工欲善其事必先利其器。要做好单元测试，必须有一套好的辅助工具。</p>\n</blockquote>\n<h3>Mocha</h3>\n<blockquote>\n<p><a href=\"http://mochajs.org/\">Mocha</a> 是一个可以运行在 node 环境与 browser 环境的测试框架，它的作用是一个任务运行器，因此它并不太关心测试本身，而是关心测试的结构，测试的结构决定着怎样让测试知道代码运行失败了以及怎样显示结果。</p>\n</blockquote>\n<p>使用 Mocha 创建代码的方式非常简单，通过使用 <code>describe</code> 块来展示你的库（模块）中不同组件（函数），然后在其中添加 <code>it</code> 块来制定特殊的测试逻辑。</p>\n<pre><code class=\"hljs\">var assert = require('assert');\ndescribe('Array', function() {\n    describe('#indexOf()', function () {\n        it('should return -1 when the value is not present', function () {\n            assert.equal(-1, [1,2,3].indexOf(5));\n        });\n    });\n});</code></pre><p><code>备注</code>：Mocha 本身集成了 <code>assert</code> 断言模块，但它允许你使用任何一个你希望使用的断言库，包括 <a href=\"http://chaijs.com/\">Chai</a>、<a href=\"https://github.com/shouldjs/should.js\">should.js</a>、<a href=\"https://github.com/Automattic/expect.js\">expect.js</a> 等。这也正是使用 Mocha 十分灵活的一个地方。在项目中我选择使用 chai 作为断言库。</p>\n<p>上面说到了 Mocha 的重点是控制着测试代码的结构以及整个测试的流程，所以 Mocha 也提供了在测试的周期中方便我们控制模拟整个测试流程的一些钩子（Hook）函数。</p>\n<blockquote>\n<p>Mocha 为我们提供了 before()、after()、beforeEach()、afterEach() 的钩子函数，允许我们在测试代码执行前进行预处理以及代码执行后进行清理工作。</p>\n</blockquote>\n<pre><code class=\"hljs\">describe('Hooks', function() {\n\n    // 当前block --&gt; 当前describe\n\n    before(function() {\n        // runs before all tests in this block\n    });\n\n    after(function() {\n        // runs after all tests in this block\n    });\n\n    beforeEach(function() {\n        // runs before each test in this block\n    });\n\n    afterEach(function() {\n        // runs after each test in this block\n    });\n\n    // test cases\n});</code></pre><p>Mocha 更多的使用细节不在这里展开说明，有需要请看<a href=\"http://mochajs.org/\">官方文档</a>。</p>\n<h3>Chai</h3>\n<blockquote>\n<p>chai 是一个断言库，提供 expect、assert 以及 should 三种断言方式。更多使用细节请看<a href=\"http://chaijs.com/\">官方文档</a>。</p>\n</blockquote>\n<p>使用 chai 中的 expect 改写上面的例子：</p>\n<pre><code class=\"hljs\">import { expect } from 'chai';\ndescribe('Array', function() {\n    describe('#indexOf()', function () {\n        it('should return -1 when the value is not present', function () {\n            expect([1,2,3].indexOf(5)).to.equal(-1);\n        });\n    });\n});</code></pre><p>在使用 should 方式的断言前，需要进行初始化。</p>\n<pre><code class=\"hljs\">import chai from 'chai';\n\nchai.should();</code></pre><p>chai 还提供了 use() 的接口，让我们加载基于 chai 的测试插件</p>\n<pre><code class=\"hljs\">import sinonChai from 'sinon-chai';\nimport chaiAsPromised from 'chai-as-promised';\n\nchai.use(sinonChai);\nchai.use(chaiAsPromised);</code></pre><h3>Sinon</h3>\n<blockquote>\n<p>前端开发少不了需要 mock 的情况，这里的 mock 并不单纯代表数据，Sinon 可以为我们 mock 包括函数调用、网络请求、超时、数据库操作等。</p>\n</blockquote>\n<p>sinon 有很多强大的 API，见<a href=\"http://sinonjs.org/docs/\">官网</a>。在了解如何使用 sinon 时，spy、stub 和 mock 各自的使用场景是最让我感到迷惑的，看了官网的介绍也是一头雾水。这里推荐一篇不错的文章 <a href=\"https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js\">Best Practices for Spies, Stubs and Mocks in Sinon.js</a>，下面也是通过对这篇文章的简单总结，给出一个使用场景的简单说明：</p>\n<ul>\n<li>sinon.spy()</li>\n</ul>\n<blockquote>\n<p>spy 允许我们获取函数调用返回的信息，包括调用次数、传入的参数、返回值以及抛出的异常等。这些可以通过 sinon 提供的<a href=\"http://sinonjs.org/docs/#assertions\">断言API</a>轻松实现。但是，spy 是不会对测试的函数行为造成影响的，如果我们需要修改测试的函数的行为，我们则需要去使用 stub。</p>\n</blockquote>\n<ul>\n<li>sinon.stub()</li>\n</ul>\n<blockquote>\n<p>stub 跟 spy 的行为是一致的，而且 stub 可以使用 spy 所拥有的 API。stub 的特殊之处，是允许我们修改函数的行为，即我们可以把测试的函数进行替换。这样，我们让函数返回我们预设的返回值或者异常情况。更多关于 stub 的使用方法请看 <a href=\"http://sinonjs.org/docs/#stubs\">这里</a>。</p>\n</blockquote>\n<ul>\n<li>sinon.mock()</li>\n</ul>\n<blockquote>\n<p>如果我们需要使用 stub，同时我们需要验证函数多个行为时，我们就应该使用 mock。mock 允许我们通过 verify() 去同时验证函数的多个行为，例如：调用次数、传入参数等。</p>\n</blockquote>\n<h3>Enzyme</h3>\n<blockquote>\n<p>enzyme 是 airbnb 提供的一个用来测试 react 组件的测试工具。由于 enzyme 的 API 是效仿 jQuery 的，所以我们可以按照 jQuery 操作 DOM 的思路去操作我们的 react 组件，进行测试。</p>\n</blockquote>\n<p>enzyme 提供3种基本的使用方法：</p>\n<ul>\n<li><a href=\"https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md\">Shallow Rendering</a></li>\n</ul>\n<blockquote>\n<p>Enzyme 提供的 shallow 方法，可以让你可以把一个组件当做一个测试单元来看待，确保你的测试代码不会间接的去断言子组件的行为。我们可以通过enzyme提供的 API 去操作子组件来达到我们的测试需求。这个让我们很轻松的去测试组件的渲染逻辑是否正确，结合一些API我们还可以轻松的去模拟用户的行为，测试变化后组件的渲染逻辑。</p>\n</blockquote>\n<pre><code class=\"hljs\">import { shallow } from 'enzyme';\n\ndescribe('&lt;MyComponent /&gt;', () =&gt; {\n\n    it('should render `.icon-star` element', () =&gt; {\n        const wrapper = shallow(&lt;MyComponent /&gt;);\n        expect(wrapper.find('.icon-star')).to.have.length(1);\n    });\n\n});</code></pre><p><code>备注</code>：Mocha 不提倡使用箭头函数（arrow function），因为在箭头函数中，this 会自动与当前的作用域进行绑定，并且不允许修改。如果在回调函数中需要使用 this.timeout(1000) 方法时，会发现 this =&gt; undefined。这种情况下请使用普通的匿名函数。</p>\n<ul>\n<li><a href=\"https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md\">JSDOM Full Rendering</a></li>\n</ul>\n<blockquote>\n<p>Enzyme 提供的 mount 方法适用于，当我们的组件需要与 DOM api 进行交互或者需要测试组件的整个完整的生命周期的情况。它的实现是基于 <a href=\"https://github.com/tmpvar/jsdom\">jsdom</a>。</p>\n</blockquote>\n<pre><code class=\"hljs\">import { mount } from 'enzyme';\n\ndescribe('&lt;Foo /&gt;', () =&gt; {\n\n    it('calls componentDidMount', () =&gt; {\n        spy(Foo.prototype, 'componentDidMount');\n        const wrapper = mount(&lt;Foo /&gt;);\n        expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);\n    });\n\n});</code></pre><ul>\n<li><a href=\"https://github.com/airbnb/enzyme/blob/master/docs/api/render.md\">Static Rendered Markup</a></li>\n</ul>\n<blockquote>\n<p>Enzyme 提供的 render 方法可以把我们的 react 组件渲染成静态的 HTML，render 返回的渲染对象 wrapper 与使用 mount、shallow很相似，但是它是基于一个叫做 <a href=\"https://github.com/cheeriojs/cheerio\">Cheerio</a> 的库。</p>\n</blockquote>\n<pre><code class=\"hljs\">import { render } from 'enzyme';\n\ndescribe('&lt;Foo /&gt;', () =&gt; {\n\n    it('renders three `.foo-bar`s', () =&gt; {\n        const wrapper = render(&lt;Foo /&gt;);\n        expect(wrapper.find('.foo-bar')).to.have.length(3);\n    });\n\n    it('rendered the title', () =&gt; {\n        const wrapper = render(&lt;Foo title=\"unique\" /&gt;);\n        expect(wrapper.text()).to.contain(\"unique\");\n    });\n\n});</code></pre><h3>Istanbul</h3>\n<blockquote>\n<p>Istanbul 是一个帮助我们统计测试覆盖率的工具。</p>\n</blockquote>\n<ul>\n<li>安装 istanbul</li>\n</ul>\n<pre><code class=\"hljs\">npm install istanbul --save-dev</code></pre><ul>\n<li>启动命令</li>\n</ul>\n<pre><code class=\"hljs\">./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha</code></pre><p><code>备注</code>：上面的命令中使用<code>_mocha</code>可以正常输出测试覆盖率的数据，但使用<code>mocha</code>则报<code>No coverage information was collected, exit without writing coverage information</code>。因为，<a href=\"https://github.com/gotwarlost/istanbul/issues/44\">mocha 和 _mocha 是两个不同的命令</a>，前者会新建一个进程执行测试，而后者是在当前进程（即 istanbul 所在的进程）执行测试，只有这样， istanbul 才会捕捉到覆盖率数据。其他测试框架也是如此，必须在同一个进程执行测试。下同。</p>\n<ul>\n<li>为 mocha 传参</li>\n</ul>\n<pre><code class=\"hljs\">./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- test/setupNewUser-spec.js</code></pre><p><code>备注</code>：上面的命令中 <code>--</code> 后面的部分会当做 mocha 的参数被传入，如果不加 <code>--</code> 则会作为 istanbul 的参数。</p>\n<h3>Isparta + Babel</h3>\n<blockquote>\n<p>Isparta + Babel 可以让我们对使用es2015语法的源代码进行测试覆盖率统计。当然，对于使用非es2015语法的代码也是能够正常使用的。</p>\n</blockquote>\n<ul>\n<li>安装 Isparta + Babel</li>\n</ul>\n<pre><code class=\"hljs\">npm install babel-cli isparta --save-dev</code></pre><ul>\n<li>启动命令</li>\n</ul>\n<pre><code class=\"hljs\">./node_modules/.bin/babel-node ./node_modules/.bin/isparta cover ./node_modules/.bin/_mocha</code></pre><p><code>备注</code>：在运行以上命令时，可能会报下面的提示</p>\n<pre><code class=\"hljs\">Transformation error; return original code\n{ [Error: Line 1: Unexpected token ILLEGAL]\n  lineNumber: 1,\n  description: 'Unexpected token ILLEGAL',\n  index: 0 }</code></pre><p>这个提示并不影响测试代码的运行，但是有强迫症的程序员表示看不得有一个错误提示，可以通过添加一个 <code>.istanbul.yml</code> 文件进行处理（<a href=\"https://github.com/douglasduteil/isparta/issues/47#issuecomment-121014224\">#issues 47</a>）</p>\n<pre><code class=\"hljs\"># .istanbul.yml\ninstrumentation:\n  root: src</code></pre><p>再次运行测试脚本，发现一切都干净了。</p>\n<ul>\n<li>运行结果截图（自行运行 <code>example</code> 目录内的例子或者使用 <a href=\"https://github.com/FrendEr/generator-tman\"><code>generator-tman</code></a> 初始化项目）</li>\n</ul>\n<p><img src=\"https://raw.githubusercontent.com/FrendEr/blog/gh-pages/images/post/how-to-an-unit-test/result.png\" alt=\"运行结果\"></p>\n<h2>如何启动一个测试</h2>\n<blockquote>\n<p>以下配置是根据在xxx项目组件需要进行的，技术选型不同配置的方案必然不相同。以下的配置方案是基于：react + es2015。</p>\n</blockquote>\n<h4>配置.babelrc</h4>\n<ul>\n<li>安装依赖包</li>\n</ul>\n<pre><code class=\"hljs\">npm i babel-preset-es2015 babel-preset-react --save-dev</code></pre><ul>\n<li>配置.babelrc</li>\n</ul>\n<pre><code class=\"hljs\">{\n    \"presets\": [\"es2015\", \"react\"]\n}</code></pre><p><code>备注</code>：在 babel 6.0 以后不再只是 es2015 transpiler，同时也支持 jsx 等语法的编译。我们需要安装相关的 presets 去处理我们的需求。</p>\n<h4>测试启动命令</h4>\n<ul>\n<li>安装依赖包</li>\n</ul>\n<pre><code class=\"hljs\">npm i babel-register --save-dev</code></pre><ul>\n<li>执行测试命令</li>\n</ul>\n<pre><code class=\"hljs\">mocha --compilers js:babel-register --recursive</code></pre><p>这里用到了 <code>--compilers js:babel-register</code> —— 允许我们选择编译器，这里对js使用了babel，会自动读取 <code>.babelrc</code> 里面的配置；<code>--recursive</code> —— 会遍历执行test/目录下所有的测试文件。执行 <code>mocha -h</code> 可以查看完整的参数说明。</p>\n<ul>\n<li>为了使用方便，建议配置在 package.json 里面，通过执行 <code>npm test</code> 运行测试</li>\n</ul>\n<pre><code class=\"hljs\">\"scripts\": {\n    \"test\": \"mocha --compilers js:babel-register --recursive\"\n}</code></pre><h4>测试目录以及文件命名</h4>\n<pre><code class=\"hljs\">├── package.json\n├── setupNewUser.js\n└── test\n    └── setupNewUser-spec.js</code></pre><p>上面配置的命令会让 mocha 遍历test/目录下所有的测试文件。在命名上，为了让测试脚本与组件（库）脚本对应起来，一般会这样命名：'组件名字' + '-spec.js' 、 '组件名字' + 'Spec.js'、'组件名字' + '.spec.js'。</p>\n<h2>参考资料</h2>\n<ul>\n<li><a href=\"http://mochajs.org/\">Mocha 官网</a></li>\n<li><a href=\"http://chaijs.com/\">Chai 官网</a></li>\n<li><a href=\"http://sinonjs.org/\">Sinon 官网</a></li>\n<li><a href=\"http://airbnb.io/enzyme/\">Enzyme 官网</a></li>\n<li><a href=\"https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js\">Best Practices for Spies, Stubs and Mocks in Sinon.js</a></li>\n<li><a href=\"https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/\">Mocha + Chai.js unit testing for ES6 with Istanbul code coverage</a></li>\n<li><a href=\"http://www.ruanyifeng.com/blog/2015/06/istanbul.html\">代码覆盖率工具 Istanbul 入门教程</a></li>\n</ul>\n","preview":"用到的测试工具（框架）\n\n> 俗话说：工欲善其事必先利其器。要做好单元测试，必须有一套好的辅助工具。\n\nMocha\n\n> Mocha 是一个可以运行在 node 环境与 browser","dir":"content/posts/2016","base":"02-06-how-to-do-an-unit-test.json","ext":".json","sourceBase":"02-06-how-to-do-an-unit-test.md","sourceExt":".md"};

/***/ }),

/***/ "./content/summary.json":
/*!******************************!*\
  !*** ./content/summary.json ***!
  \******************************/
/*! exports provided: fileMap, sourceFileArray, default */
/***/ (function(module) {

module.exports = {"fileMap":{"content/posts/2016/02-06-how-to-do-an-unit-test.json":{"layout":"post","title":"前端单元测试 - 工具使用与运行配置","description":"前端单元测试入门学习，工具的使用以及基础运行配置","keywords":"unit test, chai, mocha, sinon, react, es6","date":"2016-02-06T00:00:00.000Z","categories":"unit-test","preview":"用到的测试工具（框架）\n\n> 俗话说：工欲善其事必先利其器。要做好单元测试，必须有一套好的辅助工具。\n\nMocha\n\n> Mocha 是一个可以运行在 node 环境与 browser","dir":"content/posts/2016","base":"02-06-how-to-do-an-unit-test.json","ext":".json","sourceBase":"02-06-how-to-do-an-unit-test.md","sourceExt":".md"},"content/posts/2015/06-30-debug-gap.json":{"layout":"post","title":"移动调试方法总结","description":"Chrome的截屏、Weinre、路由代理、DebugGap","keywords":"debuggap, debug, 移动调试, node-webkit, Weinre, 移动调试方法总结","date":"2015-06-30T22:57:00.000Z","categories":"debug","preview":"最近在公司项目一直做着触屏的项目，这里不是要说项目开发的实际内容，而是调试。说到调试，目前有几种方案：\n\n1.","dir":"content/posts/2015","base":"06-30-debug-gap.json","ext":".json","sourceBase":"06-30-debug-gap.md","sourceExt":".md"},"content/index.json":{"siteTitle":"Frend's Blog","description":"","stylesheets":["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css"],"topLinks":[{"text":"About","href":"/about"},{"text":"Github","href":"https://github.com/FrendEr"}],"backgroundClass":"bg-dark-gray","copyright":"Frend","siteId":"","dir":"content","base":"index.json","ext":".json","sourceBase":"index.md","sourceExt":".md"},"content/posts/2015/02-01-fe-modules.json":{"layout":"post","title":"前端模块化 - CommonJS、AMD与CMD","description":"学习SeaJS，了解前端js模块化编程，CommonJS、AMD与CMD的比较","keywords":"SeaJS, CMD, AMD, CommonJS, RequireJS, Node.js","date":"2015-02-01T00:06:10.000Z","categories":"seajs","preview":"AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。\n\nCMD 是 SeaJS","dir":"content/posts/2015","base":"02-01-fe-modules.json","ext":".json","sourceBase":"02-01-fe-modules.md","sourceExt":".md"},"content/posts/2015/11-10-npm-package-version.json":{"layout":"post","title":"NPM 版本管理","description":"npm package version description","keywords":"npm, version","date":"2015-11-10T00:00:00.000Z","categories":"npm","preview":"在发布与使用npm package的时候，对于package version的定义与使用规则存在疑惑，所以整理了一份文档。这个repo仅作记录与探讨npm包的版本号使用。\n\n>","dir":"content/posts/2015","base":"11-10-npm-package-version.json","ext":".json","sourceBase":"11-10-npm-package-version.md","sourceExt":".md"},"content/posts/2015/07-02-cross-origin.json":{"layout":"post","title":"跨域解决方案(基于nodejs)","description":"跨域是web开发经常遇到的问题，也是前端开发需要具备的技能之一，目前主流处理跨域的方法有jsonp、cors、postMessage","keywords":"跨域, jsonp, cors, postMessage","date":"2015-07-02T01:20:00.000Z","categories":"javascript","preview":"","dir":"content/posts/2015","base":"07-02-cross-origin.json","ext":".json","sourceBase":"07-02-cross-origin.md","sourceExt":".md"}},"sourceFileArray":["content/index.md","content/posts/2015/02-01-fe-modules.md","content/posts/2015/06-30-debug-gap.md","content/posts/2015/07-02-cross-origin.md","content/posts/2015/11-10-npm-package-version.md","content/posts/2016/02-06-how-to-do-an-unit-test.md"]};

/***/ }),

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
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

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/post.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/post.js */"./pages/post.js");


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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=post.js.map