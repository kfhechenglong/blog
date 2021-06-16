var duck ={
	duckSinging : function(){
		console.log('duck singing')
	}
};
var chicken = {
	duckSinging : function(){
		console.log('嘎嘎嘎')
	}
};
var choir = [];
var joinChoir = function(animal){
	if(animal && typeof animal.duckSinging === 'function'){
		choir.push(animal);
		console.log('恭喜加入合唱团！')
	}
};
joinChoir(duck);
joinChoir(chicken);


/*多态*/
var makeSound = function(animal){
	console.log(animal)
	if(animal instanceof Duck){
		console.log('鸭子');
	} else if ( animal instanceof Chicken){
		console.log('鸡');
	}
};
var Duck = function(){};
var Chicken = function(){};

makeSound( new Duck());
makeSound( new Chicken());

/*面向对象的多态*/
var makeSound = function(animal){
	animal.sound()
};

var Duck = function(){};
Duck.prototype.sound = function(){
	console.log('嘎嘎嘎！');
};

var Chicken = function(){};
Chicken.prototype.sound = function(){
	console.log('咯咯咯');
};

makeSound(new Duck());
makeSound(new Chicken());
var Dog = function(){};
Dog.prototype.sound = function(){
	console.log('汪汪汪');
};
makeSound( new Dog() );