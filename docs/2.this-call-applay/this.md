# 1.this指向
## 1.1.作为方法调用
当函数作为对象的方法被调用时，this指向该对象
```
var obj = {
	name:"jueduilingdu",
	getName:function() {
		console.log(this.name);
		console.log(this === obj);
	}
};
obj.getName();
```

## 1.2.作为普通函数调用
 当函数作为普通函数调用时，此时this指向全局对象；
 ```
 window.name = "jueduilingdu";
 var getName = function() {
	 return this.name;
 };
 console.log(getName());//jueduilingdu
 或者
 window.name = "hechenglong";
 var myObj = {
	 name:'he',
	 getName:function() {
		 return this.name;
	 }
 };
 console.log(myObj.getName());//he
 let getName = myObj.getName;
 console.log(getName());//hechenglong
 ```
 有时候我们会遇到一下麻烦，比如在div节点的事件函数内部，有一个局部的callback方法，callback被当做普通函数调用时，其内部的this指向window，但我们想让他指向div节点，如下：
 ```
 <html>
	<body>
		<div id="test">这就是一个测试的div</div>
	</body>
	<script>
		window.id = "globalId";
		document.getElementById('test').onClick = funciton() {
			console.log(this.id);//test
			var callback = fucniton (){
				console.log(this.id);//globalId
			};
			callback();
		};
	</script>
 </html>
 ```
 可以通过保存this变量来解决这个问题
 ```
 <html>
 <body>
 	<div id="test">这就是一个测试的div</div>
 </body>
 <script>
 	window.id = "globalId";
 	document.getElementById('test').onClick = funciton() {
		var that = this;
 		console.log(that.id);//test
 		var callback = fucniton (){
 			console.log(that.id);//test
 		};
 		callback();
 	};
 </script>
 </html>
 ```
 在ECMAScript5的严格模式，这种情况的this已经被规定为不会指向全局对象，而是undefined；
 ## 1.3.作为构造函数调用
 当用new运算符调用函数时，该函数总是会返回一个对象，通常情况下，构造器里的this就是指向返回的这个对象，代码如下：
 ```
 var = MyClass = function() {
	 this.name = "jueduilingdu";
 };
 var obj = new MyClass();
 console.log(obj.name);//jueduilingdu
 ```
 但是如果显示的返回一个object类型的对象，那么此次运算结果最终返回这个对象，而不是我们之前期待的this
 ```
 var MyClass = function() {
	 this.name = 'jueduilingdu';
	 return {
		 name:'hechenglong'
	 };
 };
 var obj = new MyClass();
 console.log(obj.name);//hechenglong
 ```
 如果构造器不返回任何数据，或者是返回一个非对象类型的数据，就不会造成上述问题：
 ```
 var MyClass = function() {
 	this.name = 'jueduilingdu';
 	return 'hechenglong';
 };
 var obj = MyClass();
 console.log(obj.name);//jueduilingdu
 ```
 ## 1.4.Function.prototype.call或Function.prototype.apply调用
 跟普通函数调用相比，用Function.prototype.call或Function.prototype.apply可以动态地传入函数的this：
 ```
 var obj1 = {
	 name:'hechenglong',
	 getName:function(){
		 return this.name;
	 }
 };
 var obj2 = {
	 name:'jueduilingdu'
 };
 console.log(obj1.getName());//hechenglong
 console.log(obj1.getName.call(obj2));//jueduilingdu
 ```
 # 2.this丢失
  这是一个经常遇到的问题，先看下面代码：
  ```
  var obj = {
	  name:'jueduilingdu',
	  getName:function() {
		  return this.name;
	  }
  };
  console.log(obj.getName());//jueduilingdu
  var getName2 = obj.getName;
  console.log(getName2());//undefined
  ```
 当调用`obj.getName`时，`getName`方法是作为`obj`对象的属性被调用，此时`this`指向`obj`对象，所以`obj.getName()`输出`jueduilingdu`；
 
 当用另一个变量`getName2`来引用`obj.getName`,并调用`getName2`时，此时就是普通函数调用，`this`指向全局对象，所以输出`undefined`；