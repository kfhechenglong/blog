
# 策略模式
## 策略模式计算奖金
`策略模式的定义：是指定义一系列的算法，把它们一个个封装起来。`

策略模式的目的是将算法的使用和算法的实现分离开来；

一个基于策略模式的程序至少由两部分组成。第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。第二个部分是环境类`Context`,`Context`接受客户的请求，随后把请求委托给摸一个策略类。要做的这点，说明`Context`中要维持对某个策略对象的引用；
```javascript
const performanceS = function(){};
performanceS.prototype.calculate = function(salary) {
	return salary * 4;
};
const performanceA = function(){};
performanceA.prototype.calculate = function(salary) {
	return salary * 3;
};
const performanceB = function(){};
performanceB.prototype.calculate = function(salary) {
	return salary * 2;
};
```
定义奖金类Bonus：
```javascript
var  Bonus = function() {
	this.salary = null;
	this.strategy = null;
};
Bonus.prototype.setSalary = function (salary) {
	this.salary = salary;//设置原始工资
};
Bonus.prototype.setStrategy = function(strategy) {
	this.strategy = strategy;//设置绩效等级对应的策略对象
};
Bonus.prototype.getBonus = function() {//获取奖金金额
	return this.strategy.calculate(this.salary);//把计算奖金的操作委托给对应的策略对象
}；

```

使用如下
```javascript
const bonus = new Bonus();
bonus.setSalary(20000);//设置初始原始工资基数
bonus.setStrategy(new performanceS());//设置策略对象
console.log(bonus.getBonus());//获取奖金

bonus.setStrategy(new performanceA());//设置策略对象
console.log(bonus.getBonus());//获取奖金
```

## 策略模式实现表单验证
html代码如下：
```html
<html>
	<body>
		<form action="" id="registerFomer" method="post">
			请输入用户名：<input type="text" name="userName"/>
			请输入密码：<input type="text" name="password"/>
			请输入手机号：<input type="text" name="phoneName"/>
			<button>提交</button>
		</form>
	</body>
</html>
```
我们把效验逻辑都封装成策略对象：
```javascript
var strategies = {
	isNonEmpty:function (value,errorMsg) {//不能为空；
		if(value === "") {
			return errorMsg;
		}
	},
	minLength:function(value,length,errorMsg) {//限制最小长度
		if(value.length < length) {
			return errorMsg;
		}
	},
	isMobile:function(value,errorMsg) {
		if(!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
			return errorMsg;
		}
	}
};

```
下面来实现Validator类，Validator类在这里作为Context，负责接收用户的请求，并委托给strategy对象；
```javascript
var validataFunc = function() {
	var validator = new Validator();
	//添加效验规则
	validator.add(registerForm.userName,'isNoEmpty','用户名不能为空！');
	validator.add(registerForm.password,'minLength:6','密码长度不能少于6位！');
	validator.add(registerForm.phoneNumber,'isMobile','手机号码格式不正确！');
	var errorMsg = validator.start();//开始效验
	return errorMsg;
};
var registerForm = document.getElementById('registerForm');
registerForm.onsubmit = function () {
	var errorMsg = validataFunc();
	if(errorMsg) {
		alert(errorMsg);
		return false;
	}
}
```
从这段代码我们可以看到，我们先创建了一个validator对象，然后通过validator.add方法，往validator对象中添加一些效验规则；

最后是Validator类的实现：
```javascript
var Validator = function () {
	this.cache = [];
};
Validator.prototype.add = function (dom,rule,errorMsg) {
	var ary = rule.split(':');
	this.cache.push(function() {
		var strategy = ary.shift();
		ary.unshift(dom.value);
		ary.push(errorMsg);
		return strategies[strategy].apply(dom,ary);
	});
};
Validator.prototype.start = function() {
	for(var i = 0,validatorFunc;validatorFunc = this.cache[i++];){
		var msg = validatorFunc();
		if(msg) return msg;
	}
};
```
使用策略模式重构代码后，我们仅仅通过“配置”的方式就可以完成一个表单的效验，这些效验规则也可以复用再程序的任何地方，还能作为插件的形式，方便地被移植到其他项目中；
