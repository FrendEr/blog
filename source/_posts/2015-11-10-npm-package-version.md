---
layout: post
title:  "NPM 版本管理"
description: "npm package version description"
keywords: "npm, version"
date:   2015-11-10
categories: npm
---

> 在发布与使用npm package的时候，对于package version的定义与使用规则存在疑惑，所以整理了一份文档。这个repo仅作记录与探讨npm包的版本号使用。

> 如果描述中存在错误的地方，望指出。

<br>


## Publish package时，x.y.z代表什么？

> x.y.z 对应的表达式是 major.minor.patch

- **v1.0.0 表示 Release(正式发布)** : the project is going to be shared with others, it should start at 1.0.0(Npm rule).

- **v1.0.1 表示 Patch release(补丁发布)** : make some backwards-compatible bug fixes

``` javascript

// npm version cmd
npm version patch

// package version changes to
v1.0.0 ===> v1.0.1

```

- **v1.1.0 表示 Minor release(小迭代版本发布)** : add new features but don't break existing features. It's `backwards compatibility`.

``` javascript

// npm version cmd
npm version minor

// package version changes to
v1.0.1 ===> v1.1.0

```

- **v2.0.0 表示 Major release(主版本发布)** : changes which `break backwards compatibility`.

``` javascript

// npm version cmd
npm version major

// package version changes to
v1.1.0 ===> v2.0.0

```

<br>


## Publish package的命令(SemVer)

- **Patch release**

> 执行后x.y.z中的z自动加1

``` javascript

npm version patch

```

- **Minor release**

> 执行后x.y.z中的y自动加1，z重置为0

``` javascript

npm version minor

```

- **Major release**

> 执行后x.y.z中的x自动加1，y和z重置为0

``` javascript

npm version major

```

<br>


## Install package时，`常见`的版本号匹配规则

- **>1.0.1**

``` javascript

>1.0.1 (1.0.2, 1.0.3 etc)

```


- **>=1.0.1**

``` javascript

>=1.0.1 (1.0.1, 1.0.2, 1.0.3 etc)

```


- **<1.0.5**

``` javascript

<1.0.5 (1.0.4, 1.0.3 etc)

```


- **<=1.0.5**

``` javascript

<=1.0.5 (1.0.5, 1.0.4, 1.0.3 etc)

```


- **>1.2.3-alpha.2**

``` javascript

prerelease version, match 1.2.3-alpha.3, 1.2.3-alpha.4 etc, but not match 4.5.6-alpha.3

```


- **1.1.x**

``` javascript

>=1.1.0 && < 1.2.0

```


- **~1.1.4**

``` javascript

>=1.1.4 && <1.2.0

```


- **^1.1.4**

``` javascript

>=1.1.4 && <2.0.0

```

<br>


## 关于~(tilde) 和 ^(caret)

> 从node v0.10.26开始，通过`install --save`安装的模块会使用^(caret)代替~(tilde)。

##### ~(tilde) 和 ^(caret)的匹配规则不同，例如：~1.0.4会在[ >=1.0.4 && <1.1.0 ]中匹配1.0.x的最高版本；^1.0.4会在[ >= 1.0.4 && <2.0.0 ]中匹配1.x.x的最高版本。

<br>


## 是否该使用0.y.z这样的版本？

> Major version zero (0.y.z) is for initial development. Anything may change at any time. The public API should not be considered stable.
> ― semver.org

##### 上面是官方的文档说明，意思是由于不是正式发布的版本，模块的API随时可能会被修改，而且可能会不向后兼容，因此模块的API为不稳定的API。

<br>


## 参考文档

- [Semantic versioning and npm](https://docs.npmjs.com/getting-started/semantic-versioning) -- **Npm Tutorial**

- [The semantic versioner for npm](https://docs.npmjs.com/misc/semver) -- **Npm Tutorial**

- [**npm install --save** No Longer Using Tildes](http://fredkschott.com/post/2014/02/npm-no-longer-defaults-to-tildes/) --  **@FredKSchott**
