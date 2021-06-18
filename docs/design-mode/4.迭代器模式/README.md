# 迭代器模式

迭代器模式是指提供一个方法顺序访问一个聚合对象中的各个元素，
而又不需要暴露该对象的内部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来，
而在使用迭代器模式后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素；


## 实现自己的一个迭代器
```js
// 该迭代器为一个内部迭代器；
var each = function (ary,callback) {
    for (let i = 0 ; i < ary.length; i++) {
        callback.call(ary[i],i,ary[i]);//把下标和元素当成参数传给callback；
        
    }
};
each([1,2,3,4],function(index,item) {
    console.log(index,item);
});

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
```
内部迭代器的缺点：由于迭代器的内部规则已经定义好，上面的each函数就无法同时迭代两个数组
唯一能够改写就是回调函数；
## 外部迭代器

外部迭代器增加了一些调用的复杂度，但相对也增加了迭代器的灵活性，我们可以手工控制迭代的过程或者顺序
```js
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
```
## 倒序迭代器
```js
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
```

## 场景使用

某文件上传模块代码，根据不同的浏览器获取相对应的组件对象
```js
var getUplaodObj = function () {
    try {
        return new ActiveXObject('TXFTNActiveX.FTNUpload');//ie文件上传
    } catch (error) {
        if(supportFlash() ) {
            var str = '<object type="appliction/x-showkware-flash"></object>';
            return $(str).appendTo($('body'));
        } else {
            var str = '<input name="file" type="file">';//表单上传
            return $(str)/appendTo($('body'));
        }
    }
};
```
该例子的缺点：函数里面充满了try catch以及if else分支；一是很难阅读，二是违反了开闭原则；
采用迭代器模式修改如下
我们将每种上传的的方法都封装到各自的函数中，然后使用一个迭代器获取这些upload对象，直到获取到一个可以用的为止；
```js
var getActiveUploadObj = function () {
    try {
        return new ActiveXObject('TXFTNActiveX.FTNUpload');
    } catch (error) {
        return false;
    }
};
var getFlaseUploadObj = function () {
    if (supportFlash()) {
        var str = '<object type="appliction/x-showkware-flash"></object>';
        return $(str).appendTo($('body'));
    }
    return false;
};
var getFormUploadObj = function () {
    var str = '<input name="file" type="file">';//表单上传
    return $(str) / appendTo($('body'));
};
```
上面的三个函数中有一个共同的约定，就是如果函数中的upload可以用，就返回该对象，否则就返回false；
现在只需要提供一个可被迭代的方法，使得上面的函数依照优先级顺序被迭代；
```js
var iteratorUploadObj = function () {
    for (var i = 0,fn; fn = arguments[1++];) {
        var upLoadObj = fn();
        if (upLoadObj !== false) {
            return upLoadObj;
        }
    }
};
iteratorUploadObj(getActiveUploadObj, getFlaseUploadObj, getFormUploadObj);
```
如下再想加入新的文件上传组件，只需要增加上传的方法，并把上传的方法添加到迭代器中即可；
