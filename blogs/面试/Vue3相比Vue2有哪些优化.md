---
title: Vue3相比Vue2有哪些优化
date: '2023-08-24'
sidebar: 'auto'
categories:
 - 前端
 - 面试
tags:
 - 面试
---

:::tip
Vue3相比Vue2，有了许多优化和改进
:::

<!-- more -->

主要包括以下方面：

1. 更快的渲染性能

`Vue3`中使用了更快的虚拟`DOM`算法，并对静态节点进行了优化，提高了渲染性能。此外，`Vue3`还采用了`Tree-Shaking`技术来消除未使用代码，减小了构建生成的代码量。

2. 更好的`TypeScript`支持

`Vue3`在设计时考虑了`TypeScript`，对`TypeScript`的支持更加友好，包括对`TypeScript`的类型检查和推断、对自定义指令类型推断等方面进行了优化。

3. 更好的组合`API`

`Vue3`中引入了组合`API`，它通过`setup()`函数来获取组件的状态，并且允许将组件的逻辑组织成小的、可复用的逻辑片段，使得组件更加易读、易维护。同时，组合API可以将数据和方法直接暴露给模板，消除了`Vue2`中经常出现的作用域丢失问题。

4. `Composition API`

`Vue3`中引入了`Composition API`，该API提供了更灵活和可重用的方式来组织组件逻辑，是在`Vue2`中`Options API`的改进。`Composition API`解决了在`Vue2`中由于组件变得更加庞大、复杂而存在的一些问题，并且能够更好地支持

5. 更好的数据响应式

`Vue3`中使用了`Proxy`替换了`Object.defineProperty`来实现响应式系统，使得在嵌套对象或数组时更加高效和灵活。

```js
// Vue.js 2.0中的依赖监听代码
function defineReactive(obj, key, value) {
    Object.defineProperty(obj, key, {
        set: function reactiveSetter(newVal) {

            if (newVal === value || (newVal !== newVal && value !== value)) {
                return;
            }

            value = newVal;

            // 在这里进行响应数据变化、触发视图更新等操作
            // dep.notify()
            console.log('data changed');
        }
    })
}
```

从上面的代码也可以看出，一次`defineReactive`方法调用只能给目标对象设置一个属性的`setter`。当目标对象有多个属性时，就需要进行遍历，在每个属性上调用一次`defineReactive`。不仅如此，由于对象是有嵌套层级的，还需要进行深度遍历。例如，`a`对象上有个属性`b`，`b`也为一个对象，上面有属性`c`。那么为了监听对`a.b.c`的修改，我们需要在`b`上对`c`也调用一次`defineReactive`。当应用的数据非常庞大时，整个数据结构的遍历及`defineReactive`调用会对执行时间和内存占用造成影响；

同时也解决了vue2无法直接修改数组类型触发响应式的问题；

总之，相对于`Vue2`，`Vue3`在性能、开发效率、类型检查等方面都有了极大的改进和优化，让开发者可以更加便捷的构建高质量的Web应用。