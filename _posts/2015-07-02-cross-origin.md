---
layout: post
title:  "跨域解决方案"
description: "跨域是web开发经常遇到的问题，也是前端开发需要具备的技能之一，目前主流处理跨域的方法有jsonp、cors、postMessage"
keywords: "跨域, jsonp, cors, postMessage"
date:   2015-07-02 01:20:00
categories: javascript
---

跨域是web开发过程中经常会遇见的一种问题，因为javascript的同源策略的限制，a.com域名下是无法操作b.com下的对象或者调用接口的。

- 什么情况算跨域？
<table>
	<tr>
		<th>URL1</th>
		<th>URL2</th>
		<th>说明</th>
		<th>是否允许通讯</th>
	</tr>
	<tr>
		<td style="padding: 3px 10px;text-align: center;">www.a.com/a.js</td>
		<td style="padding: 3px 10px;text-align: center;">www.a.com/b.js</td>
		<td style="padding: 3px 10px;text-align: center;">同一域名</td>
		<td style="padding: 3px 10px;text-align: center;">允许</td>
	</tr>
	<tr>
		<td style="padding: 3px 10px;text-align: center;">www.a.com/a.js</td>
		<td style="padding: 3px 10px;text-align: center;">www.a.com:8080/b.js</td>
		<td style="padding: 3px 10px;text-align: center;">同一域名，端口不同</td>
		<td style="padding: 3px 10px;text-align: center;">不允许</td>
	</tr>
	<tr>
		<td style="padding: 3px 10px;text-align: center;">http://www.a.com/a.js</td>
		<td style="padding: 3px 10px;text-align: center;">https://www.a.com/b.js</td>
		<td style="padding: 3px 10px;text-align: center;">同一域名，协议不同</td>
		<td style="padding: 3px 10px;text-align: center;">不允许</td>
	</tr>
	<tr>
		<td style="padding: 3px 10px;text-align: center;">www.a.com/a.js</td>
		<td style="padding: 3px 10px;text-align: center;">blog.a.com/b.js</td>
		<td style="padding: 3px 10px;text-align: center;">一级域名相同，二级域名不同</td>
		<td style="padding: 3px 10px;text-align: center;">不允许</td>
	</tr>
	<tr>
		<td style="padding: 3px 10px;text-align: center;">www.a.com/a.js</td>
		<td style="padding: 3px 10px;text-align: center;">www.b.com/b.js</td>
		<td style="padding: 3px 10px;text-align: center;">不同域名下</td>
		<td style="padding: 3px 10px;text-align: center;">不允许</td>
	</tr>
</table>

<br/>

目前解决跨域的方法比较多，通常有iframe、动态创建script、document.domain、flash、jsonp、cors、postMessage这几种。但本文只给出`jsonp`、`cors`与`postMessage`三种的测试例子。

## 测试环境
- node.js  ~0.12.0
- express  ~4.12.1
- jade     ~1.9.2

##1. JSONP

JSONP跟JSON是什么关系？JSONP的实现原理是什么？我就不造轮子了，因为我也是看了别人的文章才理解的，直接推荐一篇[讲得很清晰的博文](http://kb.cnblogs.com/page/139725/)。了解后，就开始本地的代码测试吧。

#### 本地模拟跨域

本地要模拟跨域，一开始我是通过使用node启动一个地址为127.0.0.1:3000的server，然后本地在配一个frend.com（这个是nginx启动的一个静态资源server，端口是80，host配置中指向127.0.0.1）。然而这个在调试的过程中居然不跨域，普通的ajax请求居然通过了，这个我也不太理解。
<br/>

既然通过本地host配置域名再请求ip不算跨域，那我只能改变思路了，那就换个端口吧。所以我在本地起了两个基于node的server，但端口不一样来实现跨域。以下就是通过两个端口不一样的服务来测试jsonp解决跨域的方案：

- server1: localhost:3001，作为响应端

响应端代码：

![image](https://frender.github.io/blog/images/post/cross-origin/jsonp/res-code.png)

响应端启动log：

![image](https://frender.github.io/blog/images/post/cross-origin/jsonp/res-log.png)

- server2: localhost:3000，作为请求端

请求端代码：

![image](https://frender.github.io/blog/images/post/cross-origin/jsonp/req-code.png)

请求端启动log：

![image](https://frender.github.io/blog/images/post/cross-origin/jsonp/req-log.png)

- 浏览器请求及响应

![image](https://frender.github.io/blog/images/post/cross-origin/jsonp/req-browser.png)

##2. CORS


##3. postMessage

