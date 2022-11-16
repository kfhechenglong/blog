/**
* Created by 绝对零
* Copyright © 2019年 he. All rights reserved
* date 2019.4.2
*/

// 迭代器模式是指提供一个方法顺序访问一个聚合对象中的各个元素，
// 而又不需要暴露该对象的内部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来，
// 而在使用迭代器模式后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素；


// 实现自己的一个迭代器
// 该迭代器为一个内部迭代器；
var each = function (ary,callback) {
    for (let i = 0 ; i < ary.length; i++) {
        callback.call(ary[i],i,ary[i]);//把下标和元素当成参数传给callback；
        
    }
};
each([1,2,3,4],function(index,item) {
    console.log(index,item);
});
// 内部迭代器的缺点：由于迭代器的内部规则已经定义好，上面的each函数就无法同时迭代两个数组
// 唯一能够改写就是回调函数；
// example 判断数组里的元素值是否相等
var compare = function (ary1,ary2) {
    if(ary1.length !== ary2.length) {
        throw new Error('ary1 和 ary2 不相等！');
    }
    each(ary1,function (index ,item) {
        if(item !== ary2[index]) {
            throw new Error('ary1 和 ary2 不相等！');
        }
    });
    console.log('两个数组完全相等！');
    
};
compare([1,2,3],[1,2,3]);

// 外部迭代器
// 外部迭代器增加了一些调用的复杂度，但相对也增加了迭代器的灵活性，我们可以手工控制迭代的过程或者顺序

var Interator = function (obj) {
    var current = 0;
    var next  = function () {
        current += 1;
    };
    var isDone = function () {
        return current >= obj.length;
    };
    var getCurrentItem = function () {
        return obj[current];
    };
    return {
        next :next,
        isDone:isDone,
        getCurrentItem: getCurrentItem,
        length:obj.length
    }
};
// 接下来改写compare函数
var compare2 = function (interator1,interator2) {
    if (interator1.length !== interator2.length) {
        console.log('不相等！');
    }
    while (!interator1.isDone() && !interator2.isDone()) {
        if(interator1.getCurrentItem() !== interator2.getCurrentItem()) {
            throw Error('iterator1 和interator2不相等！');
        }
        interator1.next();
        interator2.next();
    }
    console.log('相等！');
};

var interator1 = Interator([1, 2, 3, 4]);
var interator2 = Interator([1,2,3,4]);
compare2(interator1,interator2);

// 倒序迭代器
var reverseEach = function (ary,callback) {
    for (var l = ary.length - 1; l >= 0; l--) {
        callback(l,ary[l]);
    }
};
reverseEach([1,2,3,4],function(index ,item) {
    console.log(index,item);
});

// 终止迭代器
var each = function (ary,callback) {
    for (let i = 0; i < ary.length; i++) {
        if(callback(i,ary[i]) === false) {//如果执行的函数返回false，则提前终止迭代器
            break;
        }
    }
};
each([1,2,3,4,5],function (i,n) {
    if(n > 3) {
        return false;
    }
});
