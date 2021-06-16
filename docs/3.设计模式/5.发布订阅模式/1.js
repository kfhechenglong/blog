/**
* Created by 绝对零
* Copyright © 2018年 he. All rights reserved
* date 2019.4.3
*/
// 发布订阅模式（观察者模式）
// 发布订阅模式的实现
/* 
1.首先确定谁充当发布者；
2.然后给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者；
3.最后发布消息的时候，发布者会遍历这个缓存列表，依次触发存放的订阅者回调函数
*/
(function () {
    var salesOffices = {};
    salesOffices.clientList = [];//缓存列表用于存放订阅者的回调函数
    salesOffices.listen = function (fn) {//增加订阅者
        this.clientList.push(fn);//订阅的消息添加到缓存列表中
    };
    salesOffices.trigger = function () {
        // 发布消息
        for (let i = 0,fn; fn = this.clientList[i++];) {
            fn.apply(this,arguments);
        }
    };

    // 下面是测试的代码
    salesOffices.listen(function(price,squareMeter) {
        console.log('总价：' + price);
        console.log('面积：'+squareMeter);
    });
    salesOffices.listen(function(price,squareMeter) {
        console.log('总价：' + price);
        console.log('面积：' + squareMeter);
    });
    salesOffices.trigger(200000, 88);
    salesOffices.trigger(300000,100);
})();


// 发布订阅的改进模式，只关心自己订阅的消息，通过key值获取

(function(){
    var salesOffices = {};
    salesOffices.clientList = [];
    salesOffices.listen = function ( key ,fn) {
        if(!this.clientList[key]) {//如果还没有订阅过此类消息，就给该消息创建一个缓存列表；
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    };
    salesOffices.trigger = function () {
        // 发布消息
        var key = Array.prototype.shift.call(arguments);//获取key值
        var fns = this.clientList[key];//获取该key值对应的回调函数集合
        if(!fns || fns.length === 0) {//如果没有订阅该类型的消息就直接返回
            return false;
        }
        for (let i = 0,fn ; fn = fns[i++];) {
            fn.apply(this,arguments);
        }
    };
    salesOffices.listen('squareMeter88',function (price) {
        console.log('总价：' + price);
    });
    salesOffices.listen('squareMeter100',function (price) {
        console.log('总价：' + price);
    });
    salesOffices.trigger('squareMeter88',200000);
    salesOffices.trigger('squareMeter100',300000);
})();

// 发布订阅的通用模式以及取消订阅事件
// 将发布订阅的功能提取出来，放到一个单独的对象中；
(function() {
    var event = {
        clientList : [],
        listen:function(key,fn) {
            if (!this.clientList[key]) {
                this.clientList[key] = [];
            }
            this.clientList[key].push(fn);
        },
        trigger:function () {
            var key = Array.prototype.shift.call(arguments);
            var fns = this.clientList[key];
            if (!fns || fns.length === 0) {
                return false;
            }
            for (let i = 0, fn; fn = fns[i++];) {
                fn.apply(this, arguments);
            }
        },
        remove:function(key,fn) {
            // 取消订阅的事件
            var fns = this.clientList[key];
            if(!fns) {//如果没有订阅该类型的事件，就直接返回
                return false;
            }
            if(!fn) {//如果没有传入具体的回调函数，表示要取消key值对应消息的所有订阅
                fns && (fns.length = 0);
            } else {
                // 反向遍历所有的订阅函数列表
                for( var i = fns.length - 1; i >= 0 ;i--) {
                    var _fn = fns[i];
                    if(_fn == fn) {//找到相同的函数，并删除掉订阅的回调函数
                        fns.splice(i,1);
                    }
                }
            }

        }
    };
    // 这里再定义一个installEvent函数，这个函数可以给所有的对象都动态安装发布订阅功能；
    var installEvent = function (obj) {
        for(var key in event) {
            obj[key] = event[key];
        }
    };
    // 现在增加一个发布订阅模式
    var test = {};
    installEvent(test);
    test.listen('name',function (name) {
        console.log('name:' + name);
    });
    test.listen('age',function (age) {
        console.log('age:' + age);
    });
    test.remove('name');
    test.trigger('age','18');
})();