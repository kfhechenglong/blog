/**
* Created by 绝对零
* Copyright © 2019年 he. All rights reserved
* date 2019.4.2
*/

// 某文件上传模块代码，根据不同的浏览器获取相对应的组件对象
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
// 该例子的缺点：函数里面充满了try catch以及if else分支；一是很难阅读，二是违反了开闭原则；
// 采用迭代器模式修改如下
// 我们将每种上传的的方法都封装到各自的函数中，然后使用一个迭代器获取这些upload对象，直到获取到一个可以用的为止；

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
// 上面的三个函数中有一个共同的约定，就是如果函数中的upload可以用，就返回该对象，否则就返回false；
// 现在只需要提供一个可被迭代的方法，使得上面的函数依照优先级顺序被迭代；
var iteratorUploadObj = function () {
    for (var i = 0,fn; fn = arguments[1++];) {
        var upLoadObj = fn();
        if (upLoadObj !== false) {
            return upLoadObj;
        }
    }
};
iteratorUploadObj(getActiveUploadObj, getFlaseUploadObj, getFormUploadObj);
// 如下再想加入新的文件上传组件，只需要增加上传的方法，并把上传的方法添加到迭代器中即可；
