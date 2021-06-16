// 代理模式
/* 
代理模式的关键是，当客户不方便直接访问一个对象或者不满足需求时，提供一个替身对象来控制对这个对象的访问
，客户实际上时访问的是替身。
替身对象对请求作出一些处理之后，再把请求转给本体对象；

*/
// 代理模式的基本用法

var Flower = function(){};

var xiaoming = {
    sendFlower : function (target) {
        target.receiveFlower(flower);
    }
};

var B  = {
    receiveFlower:function(flower) {
        A.listenGoodMood(function() {
            A.receiveFlower(flower)
        })
    }
};

var A = {
    receiveFlower:function(flower) {
        console.log('收到' + flower)
    },
    listenGoodMood:function(fn) {
        setTimeout(function() {
            fn();
        },10000)
    }
}

xiaoming.sendFlower(B);

