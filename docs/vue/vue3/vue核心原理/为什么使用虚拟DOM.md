# `Vue`为什么使用虚拟DOM

作为前端开发者，无论是否使用过`Vue`框架作为技术栈，都应该听过说`Vue`的虚拟`Dom`。

如果在面试的时候被面试官问：`Vue`为什么要使用虚拟`DOM`？那么在回答这个问题之前我们应该先了解js操作`dom`的方式和性能差异；

## 操作`DOM`的方法和性能

`JavaScript`操作`DOM`一般采用一下两种方式：
- 通过原生的`JavaScript`代码直接操作`DOM`；
- 通过html字符串拼接+innerHTML直接操作`DOM`；

### 原生操作
在我们前端开发者最初接触`JavaScript`时，都将学习如何使用原生js对`DOM`进行操作（增、删、改、查、事件绑定等等）。例如有如下代码
```html
<div id="testEle">这是div的文本内容</div>
```
```js
// 修改div的内容
const ele = documont.querySelector('#testEle');
div.innerText = "使用js-innerText修改dom文本"
// or
div.textContent = "使用js-textContent修改dom文本"

```
### innerHtml
使用innerHTML方式
```js
const html = `<div>使用innerHTML</div>`
div.innerHtml = html;
```
### 虚拟`DOM`
使用虚拟DOM操作html
```js
const virtualDOM = {
  tag: 'div',
  children: [{ children: '使用虚拟DOM操作html' }]
}
// render 函数将虚拟 DOM 创建为真实 DOM ，并将其插入到文档中
render(virtualDOM)

```

以上便是三种操作DOM的方式，在写法上有些不同，下面重点分析一下性能问题；
## 性能差异对比

首先有两个要点需要声明：
- js的操作性能要远远大于dom的操作，他们两个不是一个量级；
- js原生操作dom的方法应该除去innerHTML方法，因为innerHTML较为复杂；

### 最快的性能
修改dom最直接的方式就是用原生的方法，也是最优的性能选择；
```js
div.textContent = "使用js-textContent修改dom文本"
```
因为我们知道dom结构中哪个地方需要修改，要修改成什么内容，直接使用js操作dom就是最优的
### 虚拟DOM的性能
使用虚拟DOM的方式去操作DOM，其实就是找出来虚拟DOM前后的区别，然后更新一下，请看下面示例代码：
```html
<!-- 原始的dom代码如下 -->
<div>虚拟DOM修改前</div>
<!-- 修改后的dom代码 -->
<div>虚拟DOM修改后</div>
```
这里需要说一下，虚拟DOM的底层还是使用的原生的js去操作的DOM，只不过我们对修改做了一层封装。所以虚拟DOM的性能要低于原生js操作DOM的方式；

这里我们可以得出的结论是：
- 原生js操作DOM的性能 = js操作DOM的性能；
- 虚拟DOM的性能 = js找出DOM前后差异的性能 + js操作DOM的性能；

至于为什么还要使用虚拟DOM，这个问题在文章的最后再说。
### innerHTML的性能

## 可维护性

### 命令式

### 声明式