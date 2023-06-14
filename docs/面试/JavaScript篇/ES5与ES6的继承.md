---
title: 分别用ES5和ES6的方式解决一个继承问题
date: '2023-03-28'
sidebar: 'auto'
categories:
 - 前端
 - 面试
tags:
 - JavaScript
describe: '前端面试题，分别用ES5和ES6的方式解决一个继承问题'
img: './interview.png'
publish: true
---
# 分别用es5和es6的方式解决一个继承问题

在 ES5 中，可以使用原型链继承来解决继承问题。代码如下：
```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a noise.");
}

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(this.name + " barks.");
}

var dog = new Dog("Fido");
dog.speak(); // 输出 "Fido barks."

```
在 ES6 中，可以使用 class 和 extends 关键字来定义子类，并使用 super 来调用父类的构造函数和方法。代码如下：
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  
  speak() {
    console.log(this.name + " barks.");
  }
}

let dog = new Dog("Fido");
dog.speak(); // 输出 "Fido barks."
```
在这个例子中，Dog 类继承了 Animal 类，并重写了 speak 方法。使用 super 调用了父类的构造函数和方法。
