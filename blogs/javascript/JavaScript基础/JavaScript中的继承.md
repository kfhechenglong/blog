---
title: JavaScript中的继承
date: '2021-06-17 08:02:00'
sidebar: 'auto'
categories:
 - 前端
 - 技术
tags:
 - JavaScript
publish: true
---
# JavaScript中的继承
通过ECMAScript5提供的Object.create方法，来创建克隆对象
```javascript
var Plane = function () {
  this.blood = 100;
  this.attackLevel = 1;
  this.defenseLevel = 1;
};
var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;
var clonePlane = Object.create( plane );
console.log( clonePlane);

//为了兼容不支持Object.create方法
Object.create = Object.create || function( obj ) {
  var F = function(){};
  F.prototype = obj;
  return new F();
};
```
