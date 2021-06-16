# 简单的单例模式实现
```
const Singletion = function (name) {
	this.name = name;
	this.instance = null;
};
Singletion.prototype.getName = function() {
	console.log(`name:${this.name}`);
};
Singletion.getInstance = function(name) {
	if(!this.instance) {
		this.instance = new Singletion(name);
	}
	return this.instance;
};
let singletion_a = Singletion.getInstance('jueduilingdu');
let singletion_b = Singletion.getInstance('hcl');
console.log(singletion_a === singletion_b);//true
```

通过该方法必须用`Singletion.getInstance`来获取`Singletion`类的唯一对象，该方式增加了类的不透明性；
# 透明的单例模式
使用透明的单例模式来创建一个元素节点
```
const CreateEle = (function() {
	var instance;
	var CreateEle = function (html) {
		if(instance) return instance;
		this.html = html;
		this.initCreateElement();
		return instance = this;
	};
	CreateEle.prototype.initCreateElement = function() {
		var ele = document.createElement('div');
		ele.innerHTML = this.html;
		document.body.appendChild(ele);
	};
	return CreateEle;
})();
var ele1 = new CreateEle('testEle1');
var ele2 = new CreateEle('testEle2');
console.log(ele1 === ele2);
```
透明的单例模式中，不能复用创建多个元素，现在改写`CreateEle`构造函数，把控制创建唯一对象的那一部分移除出来，利用代理来实现
# 代理实现创建单例模式
这里先将创建节点的代码封装成一个普通函数类
```
const CreateDiv = function(context) {
	this.context = context;
	this.init();
};
CreateDiv.prototype.init = function() {
	let div = document.createElement('div');
	div.innerHTML = this.context;
	document.body.appendChild(div);
};
```
下面创建一个代理类
```
const ProxySingletionClass = (function() {
	let instance = null;
	return function(context) {
		if(!instance) {
			instance = new CreateDiv(context);
		}
		return instance;
	}
})();
```
# 通用的惰性单例模式
现在将创建单例模式的代码抽象出来，封装在一个`getSingle`函数内部，创建对象的方法`fn`被当成动态参数传入`getSingle`函数中，代码如下：
```
const getSingle = function(fn) {
	let result = null;
	return function (){
		return result || (result = fn.apply(this,arguments));
	}
};

```
代码使用demo
```
var createLoginLayer = function() {
	var div = document.createElement('div');
	div.innerHTML = '这就是一个demo';
	div.style.display = "none";
	document.body.appendChild(duv);
	return div;
};

var createSingleLoginLayer = getSingle(createLoginLayer);
document.getElementById('button').onclick = function() {
	var loginLayer = createSingleLoginLayer();
	loginLayer.style.display = "block";
};
```
在这个例子中，我们把创建实例对象的职责和管理单例的职责分别放置在两个方法里面，这两个方法可以独立变化而互不影响，当它们连接在一起的时候，就完成创建一个唯一实例对象的功能；