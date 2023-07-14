---
title: 理解Vue中的Tree-Shaking
date: '2023-05-13'
sidebar: true
categories:
 - 前端
 - 技术
tags:
 - 核心原理
 - Vue3
publish: true
---

<!-- more -->
## 什么是Tree-Shaking

`Tree-Shaking`这个概念在前端领域是因为`rollup.js`而起，后来webpack等也加入支持`Tree-Shaking`的行列中。简单来说就是移除掉项目中永远不会被执行的代码（`dead code`），实际情况中，代码虽然依赖了某个模块，但其实只使用其中的某些功能。通过`Tree-shaking`，将没有使用的模块代码移除掉，这样来达到删除无用代码的目的。

## Tree-shaking的原理和支持

- 实现`tree-shaking`的基础是依赖于`ES6`的模块特性，即模块必须是`ESM（ES Module）`。这是因为ES6模块的依赖关系是确定的、静态的，和运行的时的状态无关，可以进行静态分析。
- 现在主流的打包工具都支持`Tree-shaking`，例如最早支持的`rollup`，后来支持的`webpack`，以及`vite`等等。

## 可以被Tree-shaking

有以下代码，其中工具函数文件中包含了`foo`与`bar`，在`shaking`文件中只使用了`foo`，在`main`文件中引用了`foo`，但没有使用：

```js
// utils.js
export const foo = () => {
    console.log('foo')
}

export const bar = () => {
    console.log('bar')
}
// shaking.js
import { foo } from './utils.js'

const fn = () => {
    console.log('fn')
    foo()
}
fn()
// main.js
import { foo, bar } from './utils.js'

const main = () => {
    console.log('main')
    bar()
}
main()
```

现在分包使用`rollup.js`打包`shaking.js`与`main.js`文件

```sh
# 打包shaking文件
npx rollup shaking.js -f esm -o bundle.js
# 打包main文件
npx rollup main.js -f esm -o mian-bundle.js
```

先来看`bundle.js`文件的内容,`utils`文件中`foo`打包进去，而`bar`没有被引用，则被移除。

```js
const foo = () => {
    console.log('foo');
};

const fn = () => {
    console.log('fn');
    foo();
};
fn();
```

再来看`main-bundle.js`文件的内容,`utils`文件中`bar`打包进去，而`foo`虽然被引用，但是没有在`main.js`文件中使用，则被移除。

```js
const bar = () => {
    console.log('bar');
};

const main = () => {
    console.log('main');
    bar();
};
main();

```

## 不可以被Tree-shaking

有些代码看着无用，但是确不能被`Tree-shaking`移除，例如我们对上面的代码进行重写

```js
// utils.js
// 新增以下代码
export default {
    name: function () {
        console.log('绝对零度')
    },
    age: () => {
        console.log(18)
    }
}
// shaking.js
import userInfo,  { foo } from './utils.js'

const fn = () => {
    console.log('fn')
    userInfo.name()
    foo()
}
fn()
```

再次使用`rollup.js`打包文件

```js
const foo = () => {
    console.log('foo');
};

var userInfo = {
    name: function () {
        console.log('绝对零度');
    },
    age: () => {
        console.log(18);
    }
};

const fn = () => {
    console.log('fn');
    userInfo.name();
    foo();
};
fn();
```

有意思的问题来了，这次我们仅仅使用`name`方法，而`age`方法也被打包进来，说明`Tree-shaking`没有生效。究其原因，`export default`导出的是一个对象，无法通过静态分析判断出一个对象的哪些变量未被使用，所以`tree-shaking`只对使用`export`导出的变量生效。

另外一个问题是，如果一个函数被调用的时候会产生副作用，那么就不会被移除。再次在utils文件中增加下面代码

```js
// utils.js新增的代码
export const empty = () => {
    const a = 1
}

export const effect = (obj) => {
    obj && obj.a
}
```

再次导入使用然后打包

```js
// shaking.js文件
import userInfo,  { foo, empty, effect } from './utils.js'

const fn = () => {
    console.log('fn')
    userInfo.name()
    empty()
    effect()
    foo()
}
fn()
```

打包后发现新增加了一个`effect`函数，而同时新增的`empty`函数被移除，分析原因发现`effect`函数就是一个纯读取函数，但是这个函数可能会产生副作用。试想一下，如果`obj`对象是一个通过`Proxy`创建的代理对象，那么当我们读取对象属性时，就会触发代理对象的`get`方法，在`get`方法中是可能产生副作用的，比如调用其它的方法或者修改一些变量等等。

```js
const foo = () => {
    console.log('foo');
};
const effect = (obj) => {
    obj && obj.a;
};
var userInfo = {
    name: function () {
        console.log('绝对零度');
    },
    age: () => {
        console.log(18);
    }
};

const fn = () => {
    console.log('fn');
    userInfo.name();
    effect();
    foo();
};
fn();
```

由于rollup.js分析静态代码很困难，所以他们给我们提供一个机制，明确告诉rollup，这部分代码没有副作用可以移除。`/*#__PURE__*/`就是解决这个问题的办法，只需要在effect方法前面加上上面的代码，程序运行的时候就会认为他是没有副作用的，可以放心的进行`Tree-shaking`。

```js
/*#__PURE__*/const effect = (obj) => {
    obj && obj.a;
};
```

## Vue中的应用

在Vue的框架源码中，存在这大量的特性开关，打包编译或者使用的时候通过配置特性开关可以通过`Tree-shaking`机制让代码资源最优化。\
比如`Vue3`为了支持`Vue2`的`options Api`，写了大量的兼容代码，但是如果我们再使用`Vue3`中不使用`options Api`，就可以通过一个叫做`__VUE_OPTIONS_API__`的特性开关去关闭这个特性，这样最终打包的Vue代码就不会包含这部分，进而减少代码体积。
