---
layout: post
title:  "前端单元测试 - 工具使用与运行配置"
description: "前端单元测试入门学习，工具的使用以及基础运行配置"
keywords: "unit test, chai, mocha, sinon, react, es6"
date:   2016-02-06 00:00:00
categories: unit-test
---

## 用到的测试工具（框架）

> 俗话说：工欲善其事必先利其器。要做好单元测试，必须有一套好的辅助工具。

### Mocha

> [Mocha](http://mochajs.org/) 是一个可以运行在 node 环境与 browser 环境的测试框架，它的作用是一个任务运行器，因此它并不太关心测试本身，而是关心测试的结构，测试的结构决定着怎样让测试知道代码运行失败了以及怎样显示结果。

使用 Mocha 创建代码的方式非常简单，通过使用 `describe` 块来展示你的库（模块）中不同组件（函数），然后在其中添加 `it` 块来制定特殊的测试逻辑。

```
var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1,2,3].indexOf(5));
        });
    });
});
```

`备注`：Mocha 本身集成了 `assert` 断言模块，但它允许你使用任何一个你希望使用的断言库，包括 [Chai](http://chaijs.com/)、[should.js](https://github.com/shouldjs/should.js)、[expect.js](https://github.com/Automattic/expect.js) 等。这也正是使用 Mocha 十分灵活的一个地方。在项目中我选择使用 chai 作为断言库。

上面说到了 Mocha 的重点是控制着测试代码的结构以及整个测试的流程，所以 Mocha 也提供了在测试的周期中方便我们控制模拟整个测试流程的一些钩子（Hook）函数。

> Mocha 为我们提供了 before()、after()、beforeEach()、afterEach() 的钩子函数，允许我们在测试代码执行前进行预处理以及代码执行后进行清理工作。

```
describe('Hooks', function() {

    // 当前block --> 当前describe

    before(function() {
        // runs before all tests in this block
    });

    after(function() {
        // runs after all tests in this block
    });

    beforeEach(function() {
        // runs before each test in this block
    });

    afterEach(function() {
        // runs after each test in this block
    });

    // test cases
});
```

Mocha 更多的使用细节不在这里展开说明，有需要请看[官方文档](http://mochajs.org/)。

### Chai

> chai 是一个断言库，提供 expect、assert 以及 should 三种断言方式。更多使用细节请看[官方文档](http://chaijs.com/)。

使用 chai 中的 expect 改写上面的例子：

```
import { expect } from 'chai';
describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            expect([1,2,3].indexOf(5)).to.equal(-1);
        });
    });
});
```

在使用 should 方式的断言前，需要进行初始化。

```
import chai from 'chai';

chai.should();
```

chai 还提供了 use() 的接口，让我们加载基于 chai 的测试插件

```
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);
```

### Sinon

> 前端开发少不了需要 mock 的情况，这里的 mock 并不单纯代表数据，Sinon 可以为我们 mock 包括函数调用、网络请求、超时、数据库操作等。

sinon 有很多强大的 API，见[官网](http://sinonjs.org/docs/)。在了解如何使用 sinon 时，spy、stub 和 mock 各自的使用场景是最让我感到迷惑的，看了官网的介绍也是一头雾水。这里推荐一篇不错的文章 [Best Practices for Spies, Stubs and Mocks in Sinon.js](https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)，下面也是通过对这篇文章的简单总结，给出一个使用场景的简单说明：

* sinon.spy()

> spy 允许我们获取函数调用返回的信息，包括调用次数、传入的参数、返回值以及抛出的异常等。这些可以通过 sinon 提供的[断言API](http://sinonjs.org/docs/#assertions)轻松实现。但是，spy 是不会对测试的函数行为造成影响的，如果我们需要修改测试的函数的行为，我们则需要去使用 stub。

* sinon.stub()

> stub 跟 spy 的行为是一致的，而且 stub 可以使用 spy 所拥有的 API。stub 的特殊之处，是允许我们修改函数的行为，即我们可以把测试的函数进行替换。这样，我们让函数返回我们预设的返回值或者异常情况。更多关于 stub 的使用方法请看 [这里](http://sinonjs.org/docs/#stubs)。

* sinon.mock()

> 如果我们需要使用 stub，同时我们需要验证函数多个行为时，我们就应该使用 mock。mock 允许我们通过 verify() 去同时验证函数的多个行为，例如：调用次数、传入参数等。

### Enzyme

> enzyme 是 airbnb 提供的一个用来测试 react 组件的测试工具。由于 enzyme 的 API 是效仿 jQuery 的，所以我们可以按照 jQuery 操作 DOM 的思路去操作我们的 react 组件，进行测试。

enzyme 提供3种基本的使用方法：

* [Shallow Rendering](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md)

> Enzyme 提供的 shallow 方法，可以让你可以把一个组件当做一个测试单元来看待，确保你的测试代码不会间接的去断言子组件的行为。我们可以通过enzyme提供的 API 去操作子组件来达到我们的测试需求。这个让我们很轻松的去测试组件的渲染逻辑是否正确，结合一些API我们还可以轻松的去模拟用户的行为，测试变化后组件的渲染逻辑。

```
import { shallow } from 'enzyme';

describe('<MyComponent />', () => {

    it('should render `.icon-star` element', () => {
        const wrapper = shallow(<MyComponent />);
        expect(wrapper.find('.icon-star')).to.have.length(1);
    });

});
```
`备注`：Mocha 不提倡使用箭头函数（arrow function），因为在箭头函数中，this 会自动与当前的作用域进行绑定，并且不允许修改。如果在回调函数中需要使用 this.timeout(1000) 方法时，会发现 this => undefined。这种情况下请使用普通的匿名函数。

* [JSDOM Full Rendering](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md)

> Enzyme 提供的 mount 方法适用于，当我们的组件需要与 DOM api 进行交互或者需要测试组件的整个完整的生命周期的情况。它的实现是基于 [jsdom](https://github.com/tmpvar/jsdom)。

```
import { mount } from 'enzyme';

describe('<Foo />', () => {

    it('calls componentDidMount', () => {
        spy(Foo.prototype, 'componentDidMount');
        const wrapper = mount(<Foo />);
        expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
    });

});
```

* [Static Rendered Markup](https://github.com/airbnb/enzyme/blob/master/docs/api/render.md)

> Enzyme 提供的 render 方法可以把我们的 react 组件渲染成静态的 HTML，render 返回的渲染对象 wrapper 与使用 mount、shallow很相似，但是它是基于一个叫做 [Cheerio](https://github.com/cheeriojs/cheerio) 的库。

```
import { render } from 'enzyme';

describe('<Foo />', () => {

    it('renders three `.foo-bar`s', () => {
        const wrapper = render(<Foo />);
        expect(wrapper.find('.foo-bar')).to.have.length(3);
    });

    it('rendered the title', () => {
        const wrapper = render(<Foo title="unique" />);
        expect(wrapper.text()).to.contain("unique");
    });

});
```

### Istanbul

> Istanbul 是一个帮助我们统计测试覆盖率的工具。

* 安装 istanbul

```
npm install istanbul --save-dev
```

* 启动命令

```
./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha
```

`备注`：上面的命令中使用`_mocha`可以正常输出测试覆盖率的数据，但使用`mocha`则报`No coverage information was collected, exit without writing coverage information`。因为，[mocha 和 _mocha 是两个不同的命令](https://github.com/gotwarlost/istanbul/issues/44)，前者会新建一个进程执行测试，而后者是在当前进程（即 istanbul 所在的进程）执行测试，只有这样， istanbul 才会捕捉到覆盖率数据。其他测试框架也是如此，必须在同一个进程执行测试。下同。

* 为 mocha 传参

```
./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- test/setupNewUser-spec.js
```

`备注`：上面的命令中 `--` 后面的部分会当做 mocha 的参数被传入，如果不加 `--` 则会作为 istanbul 的参数。

### Isparta + Babel

> Isparta + Babel 可以让我们对使用es2015语法的源代码进行测试覆盖率统计。当然，对于使用非es2015语法的代码也是能够正常使用的。

* 安装 Isparta + Babel

```
npm install babel-cli isparta --save-dev
```

* 启动命令

```
./node_modules/.bin/babel-node ./node_modules/.bin/isparta cover ./node_modules/.bin/_mocha
```


`备注`：在运行以上命令时，可能会报下面的提示

```
Transformation error; return original code
{ [Error: Line 1: Unexpected token ILLEGAL]
  lineNumber: 1,
  description: 'Unexpected token ILLEGAL',
  index: 0 }
```

这个提示并不影响测试代码的运行，但是有强迫症的程序员表示看不得有一个错误提示，可以通过添加一个 `.istanbul.yml` 文件进行处理（[#issues 47](https://github.com/douglasduteil/isparta/issues/47#issuecomment-121014224)）

```
# .istanbul.yml
instrumentation:
  root: src
```

再次运行测试脚本，发现一切都干净了。

* 运行结果截图（自行运行 `example` 目录内的例子或者使用 [`generator-tman`](https://github.com/FrendEr/generator-tman) 初始化项目）

![运行结果](https://raw.githubusercontent.com/FrendEr/how-todo-an-unit-test/master/example/rectangle/result.png)

## 如何启动一个测试

> 以下配置是根据在xxx项目组件需要进行的，技术选型不同配置的方案必然不相同。以下的配置方案是基于：react + es2015。

#### 配置.babelrc

* 安装依赖包

```
npm i babel-preset-es2015 babel-preset-react --save-dev
```

* 配置.babelrc

```
{
    "presets": ["es2015", "react"]
}
```

`备注`：在 babel 6.0 以后不再只是 es2015 transpiler，同时也支持 jsx 等语法的编译。我们需要安装相关的 presets 去处理我们的需求。

#### 测试启动命令

* 安装依赖包

```
npm i babel-register --save-dev
```

* 执行测试命令

```
mocha --compilers js:babel-register --recursive
```

这里用到了 `--compilers js:babel-register` —— 允许我们选择编译器，这里对js使用了babel，会自动读取 `.babelrc` 里面的配置；`--recursive` —— 会遍历执行test/目录下所有的测试文件。执行 `mocha -h` 可以查看完整的参数说明。

* 为了使用方便，建议配置在 package.json 里面，通过执行 `npm test` 运行测试

```
"scripts": {
    "test": "mocha --compilers js:babel-register --recursive"
}
```

#### 测试目录以及文件命名

```
├── package.json
├── setupNewUser.js
└── test
    └── setupNewUser-spec.js
```

上面配置的命令会让 mocha 遍历test/目录下所有的测试文件。在命名上，为了让测试脚本与组件（库）脚本对应起来，一般会这样命名：'组件名字' + '-spec.js' 、 '组件名字' + 'Spec.js'、'组件名字' + '.spec.js'。


## 参考资料
* [Mocha 官网](http://mochajs.org/)
* [Chai 官网](http://chaijs.com/)
* [Sinon 官网](http://sinonjs.org/)
* [Enzyme 官网](http://airbnb.io/enzyme/)
* [Best Practices for Spies, Stubs and Mocks in Sinon.js](https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)
* [Mocha + Chai.js unit testing for ES6 with Istanbul code coverage](https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/)
* [代码覆盖率工具 Istanbul 入门教程](http://www.ruanyifeng.com/blog/2015/06/istanbul.html)
