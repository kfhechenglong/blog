---
title: 变量声明
date: '2023-03-22'
sidebar: 'auto'
categories:
 - 前端
 - 技术
tags:
 - JavaScript
publish: true
---
:::tip
在`JavaScript`中，我们一般通过`var`、`let`、`const`三种方式显示的声明变量，其中`let`和`const`是在ES6中新增的命令，现在我们来分别介绍一下这三种声明变量的区别和要点。
:::

<!-- more -->

## var关键字
使用`var`声明变量是`ES6`之前的标准方式，那时候还没有`let`和`const`。使用`var`定义变量，如果没有设置初始值，则变量会保存`undefined`。

### 全局作用域变量

在浏览器环境中，如果在全局作用域下使用`var`声明变量，那么该变量默认会挂载在全局的`window`对象上，如果`window`上存在该属性或者方法，则此处声明的变量会覆盖原始的属性或者方法。

考虑以下代码：
```js
// test.js
var name = '绝对零度';
console.log(name === window.name); // true
```
### 函数作用域变量
在函数作用域内使用`var`关键字声明的变量，会成为该函数的局部变量；如果在函数作用域内未使用`var`关键字进行变量赋值，那么该变量就会顺着作用域链的方向进行向上查找，如果在上级作用域链做找到了该变量的声明，则就是该作用下的属性，否则直到查找到全局作用域`window`（浏览器环境下）并作为`window`的属性。

```js
// fn1函数作用域下的变量
function fn1() {
    var name = "绝对零度"
    console.log(name) // 绝对零度
};
console.log(name) // undefined

// 在setAge函数下进行赋值给fn2函数作用域下的变量age
function fn2() {
    var age = ""
    function setAge () {
        age = 18;
    };
    setAge()
    console.log(age) // 18
};
fn2();
console.log(age) // undefined

// 全局变量gender
function fn3() {
    gender = "男"
}
fn3();
console.log(gender) // 男

```

### 变量提升
使用var关键字声明变量，会自动将变量声明提升到当前作用域的最顶端；

```js
function fn () {
    console.log(a);
    var a = 2;
    console.log(a)
}
fn();
// undefined
// 2
```
上面代码同等于

```js
function fn () {
    var a;
    console.log(a);
    a = 2;
    console.log(a)
}
fn();
```
由于变量的提升，故在执行第一个`console.log(a)`的时候并没有报出语法错误，而是输出了`undefined`；
### 重复声明
使用var关键字可以在同一个作用域内多次声明同一个同名变量，后声明的变量会自动覆盖前面已声明的变量；

重复声明变量在开发实践中应当避免这种行为，因为会造成不必要的bug，同时给程序调试带来麻烦，这种操作是属于非友好型；
```js
function fn () {
    var a = 1;
    console.log(a);
    var a = 18;
    console.log(a);
    var a = "男";
    console.log(a);
}
fn();
// 1
// 18
// 男
```
## let与coanst关键字

`let`、`coanst`关键字与`var`关键字的一个重要区别就是前两者具有块级作用域的概念和不能重复声明，当然还有其它的区别与特性，下面我们将详细介绍。

### 块级作用域
`ES6`的块级作用域一般可以使用`{}`表示，`ES6` 允许块级作用域的任意嵌套。

在块级作用域内使用`let`、`const`关键字声明的变量不会成为`window`或函数的属性，他们仅仅属于当前块级作用域内，在付作用域内是正常无法访问的。

```js
function fn() {
    let a = 1;
    if (a === 1) {
        let b = 2
    }
    console.log(a);
    console.log(b)
}
fn();
```
执行上面代码，则会出现报错`Uncaught ReferenceError: b is not defined`，这是因为在`fn`函数作用域内无法访问变量`b`。
### 不存在变量提升
`var`关键字会发生“变量提升”现象，即变量可以在声明之前使用，值为`undefined`，ES6为解决这个奇怪的现象，改变了这种语法。使用`let`、`const`声明的变量只能在变量声明之后访问使用。
```js
// var 的情况
console.log(a); // 输出undefined
var a = 2;

// let 的情况
console.log(b); // 报错ReferenceError
let b = 2;
```
### 暂时性死区
`ES6`明确规定，如果区块中存在`let`和`const`关键字，这个区块对这些关键字声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

在代码块内，使用`let`命令声明变量之前，该变量都是不可用的，在`let`声明之前的执行瞬间被称为暂时性死区。

一个隐蔽的暂时性死区：
```js
function fn(x = y, y = 2) {
  return [x, y];
}
fn(); // 报错
```
上面代码中，调用`fn`函数之所以报错（某些实现可能不报错），是因为参数`x`默认值等于另一个参数`y`，而此时`y`还没有声明，属于“死区”。


如果代码改成一下示例则可避免报错

```js
function fn(x = 2, y = x) {
  return [x, y];
}
fn(); // [2, 2]
```
暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
### 不允许重复声明
`let`、`const`不允许在相同作用域内，重复声明同一个变量。
```js
// 报错
function fn1() {
  let a = 1;
  let a = 2;
};

// 报错
function fn2 (a) {
    let a = 1
}
// 正常运行
function fn3 (a) {
    {
        let a = 2
        console.log(a)
    }
}
fn3()
```
### const的本质
`const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。
## ES6 声明变量的六种方法

- `var`
- `let`
- `const`
- `import`
- `class`
- `function`

