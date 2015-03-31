---
layout: post
title:  "SeaJS学习笔录 - CommonJS、AMD与CMD"
description: "学习SeaJS，了解前端js模块化编程，CommonJS、AMD与CMD的比较"
keywords: "SeaJS, CMD, AMD, CommonJS, RequireJS, Node.js"
date:   2015-02-01 00:06:10
categories: seajs
---

`AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。`

`CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。`

`--玉伯`

第一次听说SeaJS，已经是两年前的事了，但一直没有机会让我意识到模块化对于前端开发的好处，所以也没有深入去了解使用SeaJS或者RequireJS这类的模块加载器进行模块化编程。

随着公司项目越来越大，不管是代码维护还是新功能模块的添加，都越显困难与无力。模块化编程现在已经非常成熟，很多大的公司项目已经在使用，例如QQ空间、淘宝等。模块化编程在发展过程中，已经形成了多套规范以及基于不同规范的框架。本博文是我在探讨这些规范以及模块化框架过程中的一些总结与记录，已作分享以及备忘使用。

<br/>

###1. CommonJS规范

CommonJS是服务器端模块化的规范，Node.js就是基于CommonJS Modules/1.0。

根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，在改模块内定义的变量无法被其他模块所读取，除非定义为global对象的属性。

{% highlight javascript %}
:::under nodejs
//main.js

global.name = 'Frend';
{% endhighlight %}

以上定义的name变量可以被所有的模块所读取，但是并不推荐这种方式。输出模块的变量，最好的方式是使用exports(module.exports)对象。关于`exports与module.exports的区别`推荐看[一位全栈码农对exports与module.exports的分析](http://zihua.li/2012/03/use-module-exports-or-exports-in-node/)。如果这篇博文让你还是理解不了，那给出一个更加浅显的说明：exports一般是一个对象，用于挂一堆的方法或者属性，例如一个slider滑动模块，有一堆的控制方法和属性，这种情况下就可以用exports来挂载，而另外一种情况，例如这个模块是叫$G.dom.get，实现和jquery的$()一样的功能，这时候不需要额外的一些乱七八糟的东西，只需要它是个方法，能直接调用，这时就可以使用module.exports了，调用的时候就可以直接通过$get = require( './dom/get' ); $get方法来使用了。

{% highlight javascript %}
:::under nodejs
//module_a.js

exports.name = 'Frend';

exports.say = function() {
    console.log(name);
}
{% endhighlight %}

使用require方法，加载module_a.js

{% highlight javascript %}
:::under nodejs
//main.js

var module_a = require('./module_a.js');    //同步加载模块，加载完再执行后面的代码

module_a.say(); //Frend
{% endhighlight %}

<br/>

###2. AMD规范
从[#CommonJS规范#](#commonjs)已经初步了解了CommonJS，它加载模块时是同步的，也就是说，只有加载完成才会开始执行后面的操作。由于Node.js主要是用于服务器编程，模块文件一般是存放在服务器硬盘，所以加载会非常的快，不用考虑像浏览器请求脚本时造成阻塞等的情况，所以CommonJS规范比较适用。但是，如果是在浏览器，要从服务器加载模块，带宽是主要的瓶颈，所以AMD规范提倡的异步加载模块的方式比较适用。

AMD（Asynchronous Module Definition）规范则是异步加载模块，即模块的加载不会影响后面语句的运行。所有依赖于某些模块的语句均放在回调函数中执行。
[AMD规范](https://github.com/amdjs/amdjs-api/wiki/AMD)

<br/>

>###2.1 AMD的全局变量 —— define函数

####define(id?, dependencies?, factory)

`id` 为可选参数，字符串类型，表示当前模块的标识。

`dependencies` 可选参数，当前模块所依赖并已经被定义的模块标志的数组字面量。

`factory` 一个模块需要执行一次的函数或者是分配了模块属性的的对象。

* 创建模块标识为alpha的模块，依赖于require，export，和标识为beta的模块
{% highlight javascript %}
define('alpha', ['require', 'exports', 'beta'], function(require, exports, beta) {
    export.verb = function() {
        return beta.verb();
    }
});
{% endhighlight %}

* 一个返回对象字面量的异步模块
{% highlight javascript %}
define(['alpha'], function(alpha) {
    return {
        verb : function() {
            return alpha.verb() + 1 ;
        }
    }
});
{% endhighlight %}

* 无依赖模块可以直接使用对象字面量来定义
{% highlight javascript %}
define({
    add : function(x, y) {
        return x + y;
    }
});
{% endhighlight %}

* 兼容CommonJS的写法
{% highlight javascript %}
define(function(require, exports, module) {
    var a = require('a'),
        b = require('b');

    exports.action = function(){};
});
{% endhighlight %}

<br/>

>###2.2 AMD的factory中的require参数

* require(String)
{% highlight javascript %}
define(function(require) {
    var a = require('a');   //加载模块a
});
{% endhighlight %}

* require(Array, Function)
{% highlight javascript %}
define(function(require) {
    require(['a', 'b'], function(a, b) {    //加载模块a b 使用
        //依赖 a b 模块的运行代码
    }); 
});
{% endhighlight %}

* require.toUrl(Url)
{% highlight javascript %}
define(function(require){
    var temp = require.toUrl('./temp/a.html');  //加载页面
});
{% endhighlight %}

<br/>

###3. CMD规范
CMD（Common Module Definition）规范是SeaJS遵循的规范，明确了模块的基本书写格式和基本交互规则。

在该规范中，一个模块就是一个文件。

<br/>

>###3.1 CMD的全局变量 —— define函数

####define(id?, dependencies?, factory)

`id`为可选参数，字符串类型，表示当前模块的标识。

`dependencies`为可选参数，数组类型，表示当前模块的依赖。

`factory`可以是对象、字符串或者函数

* 定义JSON数据模块
{% highlight javascript %}
define({'foo': 'bar'});
{% endhighlight %}

* 通过字符串定义模板模块
{% highlight javascript %}
define('this is {{data}}.');
{% endhighlight %}

* factory为函数的时候，表示模块的构造方法，执行构造方法便可以得到模块向外提供的接口
{% highlight javascript %}
define(function(require, exports, module) {
    //模块代码
});
{% endhighlight %}

* 当拥有两个以上参数时
{% highlight javascript %}
define('module', ['module1', 'module2'], function(require, exports, module) {
    //模块代码
});
{% endhighlight %}

从上面代码对比来看，CMD与AMD规范在define函数上用法不相同。

<br/>

>###3.2 CMD的factory中的require参数

* `require(id);`接受模块标识作为唯一的参数，用来获取其他模块提供的接口
{% highlight javascript %}
define(function(require, exports) {
    var a = require('./a');
    
    a.doSomething();
});
{% endhighlight %}

* `require.async(id, callback?);` require是同步往下执行的，需要的异步加载模块可以使用 require.async 来进行加载
{% highlight javascript %}
define(function(require, exports, module) {
    require.async('.a', function(a) {
        a.doSomething();
    });
});
{% endhighlight %}

<br/>

>###3.3 CMD的factory中的exports参数

* exports用来向外提供模块接口
{% highlight javascript %}
define(function(require, exports) {
    exports.foo = 'bar';    //向外提供的属性
    exports.do = function(){};  //向外提供的方法
});
{% endhighlight %}

* 使用return直接向外提供接口
{% highlight javascript %}
define(function(require, exports) {
    return{
        foo: 'bar',    //向外提供的属性
        do: function(){}   //向外提供的方法
    }
});
{% endhighlight %}

* 简化为直接对象字面量的形式
{% highlight javascript %}
define({
    foo: 'bar',     //向外提供的属性
    do: function(){}    //向外提供的方法
});
{% endhighlight %}

* 与nodeJS中一样需要注意的情况
{% highlight javascript %}
//以下方式是错误的
define(function(require, exports) {
    exports = {
        foo: 'bar',     //向外提供的属性
        do: function(){}    //向外提供的方法
    }
});

//正确写法
define(function(require, exports, module) {
    module.exports = {
        foo: 'bar',     //向外提供的属性
        do: function(){}   //向外提供的方法
    }
});
{% endhighlight %}

<br/>

>###3.4 CMD的factory中的module参数

* module 是factory的第三个参数，为一个对象，上面存储了一些与当前模块相关联的属性与方法

{% highlight javascript %}
module.id 为模块的唯一标识。
module.uri 根据模块系统的路径解析规则得到模块的绝对路径。
module.dependencies 表示模块的依赖。
module.exports 当前模块对外提供的接口。
{% endhighlight %}

<br/>

###4. AMD与CMD的区别

下面是玉伯对于 AMD 与 CMD 区别的解释：

AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。

CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。

AMD与CMD都是为了实现javascript的模块化开发，特别是在浏览器端。下面介绍两者的区别：

1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.

2. CMD推崇依赖就近，AMD推崇依赖前置。

* CMD推崇依赖就近，可以把依赖写进你的代码中的任意一行

{% highlight javascript %}
// CMD
define(function(require, exports, module) {
    var a = require('./a');
    a.doSomething()
    // ...
    var b = require('./b') // 依赖可以就近书写
    b.doSomething()
    // ...
});
{% endhighlight %}

代码在运行时，首先是不知道依赖的，需要遍历所有的require关键字，找出后面的依赖。具体做法是将function toString后，用正则匹配出require关键字后面的依赖。显然，这是一种牺牲性能来换取更多开发便利的方法。

* AMD推崇依赖前置，在解析和执行当前模块之前，模块作者必须指明当前模块所依赖的模块

{% highlight javascript %}
// AMD
define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
    a.doSomething()
    // ...
    b.doSomething()
    // ...
});
{% endhighlight %}

代码在一旦运行到此处，能立即知晓依赖。而无需遍历整个函数体找到它的依赖，因此性能有所提升，缺点就是开发者必须显式得指明依赖——这会使得开发工作量变大，比如：当你写到函数体内部几百上千行的时候，忽然发现需要增加一个依赖，你不得不回到函数顶端来将这个依赖添加进数组。

对比

|| *方案* || *优势* || *劣势* || *特点* ||
|| AMD || 速度快 || 会浪费资源 || 预先加载所有的依赖，直到使用的时候才执行
|| CMD || 只有真正需要才加载依赖 || 性能较差 || 直到使用的时候才定义依赖








