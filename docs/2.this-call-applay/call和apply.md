# call和apply的用途
## 改变this指向
call和apply最常见的用途是改变函数内部的this指向，如下代码：
```
var obj1 = {
	name:'jueduilingdu'
};
var obj2 = {
	name:"he"
};
window.name = "hcl";
var getName = function () {
	console.log(this.name);
};
getName();//hcl
getName.call(obj1);//jueduilingdu
getName.apply(obj2);//he
```
实际开发中，经常回遇到this指向被不经意改变的场景，比如有一个div节点，div节点的onclick事件中的this指向该div
```
document.getElementById('divid').onclick = function() {
	console.log(this);
};
```
假如该事件函数内部有一个函数func，在事件内部调用func函数时，func函数体内的this就指向了window，而非预期的div
```
document.getElementById('divid').onclick = function() {
	console.log(this.id);//divid
	var func = function () {
		console.log(this.id);//undefined
	};
	func();
};
```
这时可以通过call来修复this指向，让其指向div
```
document.getElementById('divid').onclick = function() {
	console.log(this.id);//divid
	var func = function () {
		console.log(this.id);//divid
	};
	func.call(this);
};
```
## Function.prototype.bind
大部分 浏览器都实现了内置的Function.prototype.bind,用来指定函数内部的this指向，下面模拟一个简化的bind方法：
```
/* 
 我们通过Function.prototype.bind来'包装'func函数，并且传入一个context当作参数，这个context对象就是我们要想修正的this对象；
 在bind方法内部，我们先把func函数的引用保存起来，然后返回一个新的函数，
 当我们在将来执行func函数时，实际上先执行的是这个刚刚返回的新函数
 在新函数内部，self.apply(context,arguments)才是执行原来的func函数，并且指定context对象为func函数体内的this；
 */
Function.prototype.bind = function (context) {
	var self = this;//保留原来的函数
	return function() {//返回一个新函数
		return self.apply(context,arguments);//执行新的函数，把之前传入的context当作新函数体的this
	}
};
var obj= {
	name:"hcl"
};
var func = function () {
	console.log(this.name);
}.bind(obj);
func();//输出hcl
```
复杂一点的bind代码如下：
```
Function.prototype.bind = function() {
	var self = this,
		context = [].shift.call(arguments),
		args = [].slice.call(arguments);
	return function() {
		return self.apply(context,[].concat.call(args,[].slice.call(arguments)));
	}
};
var obj = {name:"hcl"};
var func = function(a,b,c,d) {
	console.log(this.name);//hcl
	console.log([a,b,c,d]);//[1,2,3,4]
}.bind(obj,1,2);
func(3,4);
```
## 借用其他对象的方法

```
var A = function (name){
	this.name = name;
};
var B = function() {
	A.apply(this,arguments);
};
B.prototype.getName = function() {
	return this.name;
};
var b = new B('hcl');
var name = b.getName();
console.log(name);
```