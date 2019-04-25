---
layout: post
title: 基于 Gitlab Hook 的前端资源部署流程
description:
keywords: "部署, deploy, 自动化"
date: 2018-11-15
categories: deploy
---

## 背景

一年前公司的前端项目都还是放在 SVN 进行代码版本管理，并且围绕 SVN 有一套前端代码发布的流程（此处不展开）。对比 Git，无论是效率还是逼格，都让我不再愿意使用 SVN 的“老套”版本管理。所以推动了公司内部搭建了一个 [Gitlab](https://about.gitlab.com/) 平台，并希望将前端代码管理以及一系列的操作流程都向 Git 靠拢。

如果使用 Gitlab 只是作为代码版本管理，是很简单的，跟使用外部 Github 一样。但是公司项目代码需要发布、发布需要有版本、有版本就需要有版本管理规则及流程...这一系列的问题都与我们平时开发以及项目上线效率、团队协作息息相关。

## 思路

曾在某厂打过杂，使用 Git 进行代码版本管理也是那时培养并熟悉的。某厂使用的是内部 Gitlab 平台，并且有一套语义化版本(Semantic Versioning)的开发分支管理规范。结合 Gitlab 提供的 webhooks 功能以及语义化版本(Semantic Versioning)，某厂内部建立了一套完善规范的发布流程。

所以，我的思路也是利用 `git webhooks` 并配合语义化版本(Semantic Versioning)，建立一套自动部署的流程（Gitlab 平台完整支持这一流程，Github 和 Gitee 也都是支持的，不过三者的数据格式有差异，要注意区分）。

## 部署流程

#### 自动化部署流程图

![](https://user-gold-cdn.xitu.io/2018/10/12/1666763169c9b5b1?w=1008&h=803&f=png&s=93714)

#### 约定规则

大多数情况下我们都需要 `测试`与`生产` 两套环境，所以我们先为两套环境约定两个关键词：

* `daily`
* `publish`

##### daily

**用于日常开发的 `branch`**。这里的 `daily` 是我们拉取开发分支的关键词，例如我们现在要从 master 拉取的 **Branch**，用于实现业务开发

```sh
$ git checkout master && git fetch
$ git checkout -b daily/x.y.z
```

##### publish

**用于正式发布的 `Tag`**。这里的 `publish` 是我们从 `master` 打的 **Tag**，用于生产环境的代码部署

```sh
$ git checkout master && git fetch
$ git tag publish/x.y.z
```

确定了两个环境对应的 `branch` 以及 `Tag` 的关键词后，配合语义化版本(Semantic Versioning)（[不了解 semver 的请看这里](https://semver.org/)），我们可以针对同一个环境下不同版本的代码进行管理与发布。
回到上面的部署流程图，当我们向 git 服务器提交代码时，将会触发我们在 Gitlab 平台项目中设置的 webhooks，并向 `git hooks service` 服务发送请求，并进入 hooks 服务的执行流程。

#### 版本控制规则

首先列举两个较为常见的静态版本控制的方案：

* 静态资源路径携带 querystring 的方式，例如：`//static.website.com/pc/index.js?version=20181010`
* 静态资源文件命名携带动态参数的方式，例如：`//static.website.com/pc/index.edshajdhvbx.js`

第一种方案最为常见，但是有个比较明显的问题：**前端代码覆盖式发布、回滚难度大**；

第二种方案配合一些前端打包工具（例如 webpack）实现起来也很方便，能够解决方案一的问题，**但是动态参数一般为随机生成的哈希值，上线后识别度较低，版本概念不明显**。

经常使用 `npm` 的伙伴肯定十分了解，我们的 `npm` 在管理包的时候使用的就是我们上文提到的语义化版本 (semver)，而且每个版本号对于发包者来说，都是清晰定义的，发布后对于使用者来说也能第一时间察觉。所以，我们的发布流程，在约定版本时，也参照一样的规则给我们的项目做一个版本的划分：`x.y.z`，上线后静态资源链接如：`//static.website.com/pc/1.0.0/index.js`

## 如何搭建部署流程

网上有很多关于使用 git webhooks 进行自动化部署方案的文章，基本都是需要手动修改服务器中代码仓库的 `.git/hooks/*.sample` 来支持一系列的自动化操作。这种方案的缺点是：

* 需要熟悉 `shell` 进行代码编写（针对非运维同学，这个是比较大的实现成本）
* 可复用性差，每建立一个仓库都需要手动修改一次
* 可维护性差，规则在每个独立的仓库中，如果要批量修改成本极高

**那某厂是怎么做的呢？** 某厂的 Gitlab 仓库在创建后便自动支持了上述的部署流程，我猜想是对 Gitlab 平台进行了定制才能支持这个规则的，但是这个对于小公司来说是不现实的。

针对以上情况，我还是选择了自己开发一个接收 git hooks 请求的服务。下面来了解下如何搭建这个服务，并如何在 Gitlab 中接入服务。

#### 环境准备

* Gitlab 平台（我的是 Gitlab 9.2.6）
* 服务器一台（我的是 CentOS 6.5），并已经安装配置好以下环境：
  *  Git
  *  Node(LTS)
  *  PM2


> 未完待续...
