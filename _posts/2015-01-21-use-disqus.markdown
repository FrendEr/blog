---
layout: post
title:  "Disqus的接入"
description: "Disqus为不同平台搭建的系统提供了接口，本文介绍了如何在Jekyll下搭建的博客系统中使用Disqus，给出了具体的实现方法。"
keywords: "disqus, jekyll, javascript"
date:   2015-01-21 23:41:08
categories: blog
---

博客的大体框架搭好了，没有评论功能感觉太low，果断接入Disqus @。@

###1. Disqus账号
使用Disqus需要账号，按注册流程走一遍，如果有gmail账号的就直接用gmail登陆也是可以滴。
注册完，接下来会让你输入你准备使用的二级域名，因为我的域名是frend.cc，我就填了frendcc。


###2. 选择博客的搭建平台
选择*Settings* -> *Install*，会出现九个可以选择的平台。

但是。。。。为何没有Jekyll？于是我全部点了一遍，最后选择了*Universal Code*，为什么？因为他会给你生成一段内嵌的脚本（使用过第三方插件或者服务的应该都懂的其中的原因）

{% highlight javascript %}

<div id="disqus_thread"></div>
<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    var disqus_shortname = 'frendcc'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

{% endhighlight %}

将以上代码放到你的项目代码中，大功告成！


###3. 填坑
上面做的事情都是对的，而且很简单有木有，但是以上的代码会报错，什么错？F12打开的Chrome的控制台，会发现

{% highlight javascript %}

frendcc.disqus.com/embed.js 指向 a.disqus.com/embed.js

{% endhighlight %}

而且，你在浏览器输入a.disqus.com/embed.js会发现是404的错误。。。

上面的代码有什么问题吗？哦，*dsp.src = '//' + disqus_shortname + '.disqus.com/embed.js';*使用的是你当前博客系统的协议，我的是*http://*。问题就在这里了，disqus的协议是*https://*，所以上面的代码需要改为

{% highlight javascript %}

<div id="disqus_thread"></div>
<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    var disqus_shortname = 'frendcc'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = (location.protocol == 'https:' ? location.protocol : 'https:') + '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

{% endhighlight %}

以上是简单介绍怎样在博客接入Disqus，由于目前认识有限，一些描述或者方法上可能会不太准确，欢迎指正。




















