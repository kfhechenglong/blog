# 模板模式
## 模板方法模式的定义和组成
    模板方法模式是一种只需使用继承就可以实现的简单模式。
    通过模板方法模式，我们在父类中封装了子类的算法框架，这些算法框架在正常状态下是适用于大多数子类，如果有一些特别个性的子类，我们就需要加入hook来解决这个问题；
	抽象类的实现
```
var Beverage = function(){};
Beverage.prototype.boilWater = function(){
	console.log('把水烧开！')
}
Beverage.prototype.brew = function(){
	throw new Error('子类必须重写brew方法！')
}
Beverage.prototype.pourInCup = function(){
	throw new Error('子类必须重写pourInCup方法！')
}
Beverage.prototype.addCondiments = function(){
	throw new Error('子类必须重写addCondiments方法！');
}
Beverage.prototype.customerWantsCondiments = function(){
	return true;
}
Beverage.prototype.init = function () {
	this.boilWater();
	this.brew();
	this.pourInCup();
	if(this.customerWantsCondiments) {
		this.addCondiments();
	}
}
```
	具体方法的实现
```
var CoffeeWithHook = function(){};
CoffeeWithHook.prototype.brew = function(){
	console.log('冲咖啡！')
};
CoffeeWithHook.prototype.pourInCup = function(){
	console.log('把咖啡倒进杯子中！')
};
CoffeeWithHook.prototype.addCondiments = function(){
	console.log('加添加剂！')
};
CoffeeWithHook.prototype.customerWantsCondiments = function(){
	return window.confirm('请问需要调料吗？');
}
var coffeeWithHook = new CoffeeWithHook();
coffeeWithHook.init();
```

	不使用继承来实现模板模式
```
var Beverage = function (params) {
	var boilWater = function(){
		console.log('把水煮沸！');
	};
	var brew = params.brew || function(){
		throw new Error('必须传递brew方法！');
	};
	var pourInCup = params.pourInCup || function(){
		throw new Error('必须传递pourInCup方法！');
	};
	var addCondiments = params.addCondiments || function(){
		throw new Error('必须传递addCondiments方法！');
	};
	var F = function(){};
	F.prototype.init = function(){
		boilWater();
		brew();
		pourInCup();
		addCondiments();
	};
	return F;
};
var Coffee = Beverage({
	brew:function (){
		console.log('brew');
	},
	pourInCup:funciton (){
		console.log('pourInCup');
	},
	addCondiments:function(){
		console.log('addCondiments');
	}
});
var coffee = new Coffee();
coffee.init();
```
