# 命令模式
## 命令模式实现菜单程序
```html
	<body>
        <button id="botton1">点击按钮1</button>
        <button id="botton2">点击按钮2</button>
        <button id="botton3">点击按钮3</button>
    </body>
    <script>
        var button1 = document.getElementById('botton1');
        var button2 = document.getElementById('botton2');
        var button3 = document.getElementById('botton3');
    </srcipt>
```
定义`setCommand`函数，负责往按钮上添加命令；
```js
var setCommand = function(button,command) {
	button.onclick = function() {
		command.execute();
	}
}
```
按钮后面的行为被封装在下面的两个对象中：
```js
var MenBar = {
	refresh:function() {
		// 刷新菜单的操作
	}
};
var SubMenu = {
	add:function() {
		// 添加菜单的操作
	},
	del:function() {
		// 删除菜单的操作
	}
}
```
在让button变得有用起来之前，我们先要把这些行为都封装在命令类中：
```js
// 刷新
var RefreshMenuBarCommand = function(receiver) {
	this.receiver = receiver;
};
RefreshMenuBarCommand.prototype.execute = function() {
	this.receiver.refresh();
};
// 添加
var AddMenuCommand = function (receiver) {
	this.receiver = receiver;
};
AddMenuCommand.prototype.execute = function() {
	this.receiver.add();
};
// 删除
var DelMenuCommand = function(receiver) {
	this.receiver = receiver;
};
DelMenuCommand.prototype.execute = funciton() {
	this.receiver.del();
};
```
最后把命令接收者传入到command对象中，并且把command对象安装到`button`上面：
```js
var refreshMenuBarCommand = new RefreshMenuBarCommand(MenBar);
var addMenuCommand = new AddMenuCommand(SubMenu);
var delMenuCommand = new DelMenuCommand(SubMenu);
setCommand(button1,refreshMenuBarCommand);
setCommand(button2,addMenuCommand);
setCommand(button3,delMenuCommand);
```
## Javascript中的命令模式

命令模式的由来，其实就是回调函数的一个面向对象的替代品。
利用JavaScript实现命令模式的：
```js
var bindClick = function (button,func) {
	button.onclick = func;
};
var MenBar = {
	refresh = function () {
		console.log('刷新页面！');
	}
};
var SubMenu = {
	add : function () {
		console.log('添加菜单！')
	},
	del :funciton () {
		console.log('删除菜单')
	}
};
bindClick(button1,MenBar.refresh);
bindClick(button2,SubMenu.add);
bindClick(button3,SubMenu.del);
```
在面向对象设计中，命令模式的接收者被当成`command`对象的属性保存起来，同时约定执行命令的操作调用`command.execute`方法。在使用闭包的命令模式实现中，接收者被封闭在闭包产生的环境中，执行命令更加简单，仅仅执行回调函数即可；
```js
var setCommand = function (button,func) {
	button.onclick = function () {
		func()
	}
};
var MenuBar = {
	refresh = function () {
		console.log('刷新页面！');
	}
};
var RefreshMenuBarCommand = function (receiver) {
	return function () {
		receiver.refresh();
	}
};
var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);
setCommand(button1,refreshMenuBarCommand);
```
当然，如果想要更明确地表达当前正在使用命令模式，或者出了执行命令之外，将来还有可能还要提供撤销命令等操作。那么最好还是把执行函数改成调用`execute`方法：

```js
var RefreshMenuBarCommand = function (receiver) {
	reuturn {
		execute : function () {
			receiver.refresh();
		}
	}
};
var setCommand = function (button ,command) {
	button.onclick = function () {
		command.execute();
	}
};
var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);
setCommand(button1,refreshMenuBarCommand);
```

## 命令模式的撤销操作
撤销操作的实现一般是给命令对象增加一个名为`unexecude`或者`undo`的方法，在该方法里执行execute的反向操作，代码如下：
```js
var MoveCommand = function (receiver,pos) {
	this.receiver = receiver;
	this.pos = pos;
	this.oldPos = null;
};
MoveCommand.prototype.execute = function () {
	this.receiver.start('left',this.pos,1000,'strongEaseOut');
	this.oldPos = this.receiver.dom.getBoundingClienRect()[this.receiver.propertyName];//记录初始位置
};
MoverCommand.prototype.undo = function () {
	this.receiver.start('left',this.oldPos,1000,'strongEaseOut');
	//撤销操作，回到之前运动的位置
};
var moveCommand;
moveBtn.onclick = function() {
	var animate = new Animate(ball);
	moveCommand = new MoveCommand(animate,pos.value);
	moveCommand.execute();
};
cancelBtn.onclick = function () {
	moveCommand.undo();
}
```
## 撤销和重做

下面代码将讲述如何撤销一系列的命令

```js
var Ryu = {
	attack :function () {
		console.log('攻击')
	},
	defense:function() {
		console.log('防御')
	},
	jump:function() {
		conosle.log('跳跃')
	},
	crouch:function () {
		console.log('蹲下')
	}
};

var makeCommand = function (receiver,state) {
	return function () {
		receiver[state]();
	}
};
var commands = {
	"119":"jump",
	"115":"crouch",
	"97":"defense",
	"100":"attack"
};
var commandStack = [];
doccument.onkeypress = function (ev) {
	var keyCode = ev.keyCode,
		command = makCommand(Ryu,commands[keyCode]);
	if(command) {
		cammand();
		commandStack.push(command);//保存刚才执行的动作
	}
};
//撤销的操作
document.getElementById('replay').onclick = function () {
	var command;
	while(command = commandStack.shift()) {
		command();
	}
}
```
# 命令模式的撤销操作
撤销操作的实现一般是给命令对象增加一个名为`unexecude`或者`undo`的方法，在该方法里执行execute的反向操作，代码如下：
```js
var MoveCommand = function (receiver,pos) {
	this.receiver = receiver;
	this.pos = pos;
	this.oldPos = null;
};
MoveCommand.prototype.execute = function () {
	this.receiver.start('left',this.pos,1000,'strongEaseOut');
	this.oldPos = this.receiver.dom.getBoundingClienRect()[this.receiver.propertyName];//记录初始位置
};
MoverCommand.prototype.undo = function () {
	this.receiver.start('left',this.oldPos,1000,'strongEaseOut');
	//撤销操作，回到之前运动的位置
};
var moveCommand;
moveBtn.onclick = function() {
	var animate = new Animate(ball);
	moveCommand = new MoveCommand(animate,pos.value);
	moveCommand.execute();
};
cancelBtn.onclick = function () {
	moveCommand.undo();
}
```
# 撤销和重做

下面代码将讲述如何撤销一系列的命令

```js
var Ryu = {
	attack :function () {
		console.log('攻击')
	},
	defense:function() {
		console.log('防御')
	},
	jump:function() {
		conosle.log('跳跃')
	},
	crouch:function () {
		console.log('蹲下')
	}
};

var makeCommand = function (receiver,state) {
	return function () {
		receiver[state]();
	}
};
var commands = {
	"119":"jump",
	"115":"crouch",
	"97":"defense",
	"100":"attack"
};
var commandStack = [];
doccument.onkeypress = function (ev) {
	var keyCode = ev.keyCode,
		command = makCommand(Ryu,commands[keyCode]);
	if(command) {
		cammand();
		commandStack.push(command);//保存刚才执行的动作
	}
};
//撤销的操作
document.getElementById('replay').onclick = function () {
	var command;
	while(command = commandStack.shift()) {
		command();
	}
}
```