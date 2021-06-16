## 1.所有的数据都是对象
  JavaScript在设计的时候，模仿Java引入了两套类型机制：基本类型和对象类型。基本类型包括`undefined`、`number`、`Boolean`、`string`、`function`、`object`。从现在看，这并不是一个好的想法；

  按照JavaScript设计者的本意，除了`undefined`之外，一切都是对象。为了实现这一目标，`number`、`string`、`boolean`这几种基本数据类型也可以通过“包装类”的方式变成对象数据类型；

 我们不能说在`JavaScript`中所有的数据的批示后对象，但可以说绝大部分数据都是对象，那么相信在`JavaScript`中也一定会有一个根对象存在，这些对象追根溯源都来源这个根对象。
 
 事实上这个根对象就是`Object.prototype`对象。该对象是一个空对象。
 
 ```
 var obj1 = new Object();
 var obj2 = {};
 //可以利用ECMAScript中的Object.getPrototypeOf来查看这个对象的原型
 console.log(Object.getPrototypeOf( obj1 ) === Object.prototype);
 console.log(Object.getPrototypeOf( obj2 ) === Object.prototype);
 ```
 
 再来看看如何用一个new运算符从构造器中的得到一个对象，下面的代码：
 ```
 function Person ( name ){
  this.name = name;
 };
 Person.prototype.getName = function(){
  return this.name;
 };
 var a = new Person('绝对零度');
 console.log(a.getName);
 console.log(Object.getPrototypeOf(a) === Person.prototype);// true
 ```

通过下面这段代码来理解new的运算过程：
```
	function Person(name) {
		this.name = name;
	};
	Person.prototype.getName = function() {
		return this.name;
	};
	var objectFactory = function () {
		var obj = new Object(),//从Object.prototype上克隆一个空对象
				Constructor = [].shift.call(arguments);//获取外部传入的构造器
				obj.__proto__ = Constructor.prototype;
		var ret = Constructor.apply(obj,arguments);//借用外部传入的构造器给obj设置属性
		return typeof ret === 'object' ? ret : obj;
	};
	var a = objectFactory(Person,'hechenglong');
	console.log(a.name); // hechenglong
	console.log(a.getName());//hechenglong
	console.log(Object.getPrototypeOf(a) === Person.prototype);//true
```
	