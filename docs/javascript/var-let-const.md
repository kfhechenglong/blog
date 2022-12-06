# 变量声明

在`JavaScript`中，我们一般通过`var`、`let`、`const`三种方式显示的声明变量，其中`let`和`const`是在ES6中新增的命令，现在我们来分别介绍一下这三种声明变量的区别和要点。
## var
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


### 重复声明

## let

## const
