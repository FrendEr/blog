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
<table align="center">
	<tr>
		<th>URL1</th>
		<th>URL2</th>
		<th>说明</th>
		<th>是否允许通讯</th>
	</tr>
	<tr>
		<td>www.a.com/a.js</td>
		<td>www.a.com/b.js</td>
		<td>同一域名下</td>
		<td>允许</td>
	</tr>
</table>

##1. JSONP


##2. CORS


##3. postMessage

