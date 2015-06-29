---
layout: post
title:  "compass + sass"
description: "sass是一种css预处理语言，而compass是使用sass的利器，包括兼容、拓展、编译等处理"
keywords: "sass, compass, css"
date:   2015-06-30 01:37:00
categories: css
---

每天都往自己的任务列表里面去塞东西，逼着自己去不断学习。毕业一年，现在似乎才开始找到比较良好的自学感觉，并希望坚持使之成为一种习惯。对于每个前端来说，除非挂着js工程师的牌而且由是掉渣天的，都或多或少需要花时间在页面重构上面。在过去的一年半时间里，我做页面重构不下一百个充满分量的页面。无奈以前不懂磨刀不误砍柴工的道理，不会使用工具提高效率，周而复始的都是花巨大的时间去做页面重构，到后来完全成为了劳动力密集型。
<br/>
说了一堆废话，只想表达一句：页面重构也可以通过使用正确的工具来提高你的效率并拓展你的视野。


##sass

相信前端er都听过或者使用过sass了，与之相类似的还有less、stylus等的一些被称之为css的预处理语言。这些css预处理语言是对css进行了拓展，增加了例如变量、混合、函数等的功能，帮助我们更好的维护、拓展我们的样式。至于如何使用，这里列几个相关的官网：

- [less官网](http://lesscss.org/)
- [less中文官网](http://less.bootcss.com/)
- [sass官网](http://sass-lang.com/)
- [stylus官网](https://learnboost.github.io/stylus/)


##compass

compass是什么？compass可以说是为了sass而生的，跟sass进行着紧密的配合，更有一种说法是compass相对于sass，就是jquery相对于javascript。compass可以让我们使用sass来写样式代码时不必要为了兼容而写过多的重复代码，同时提供了一些内置的模板供我们使用，例如reset、css3、layout等等。compass还有一个功能就是可以作为一个运行时环境以及构建工具使用，给我们在进行叶面重构时带来巨大的方便。
* 说到上面的内容也顺便说下两点：
- 现在公司的触屏项目用的是less来进行样式开发的，解决多浏览器兼容问题使用的是grunt的一个叫做grunt-autoprefix的插件；
- compass有一个比较好用的功能就是css sprite，而grunt也有这类型的插件，例如grunt-imagine
*
这里也不细讲用法，推荐一些链接：


- [compass官网](http://compass-style.org/)
