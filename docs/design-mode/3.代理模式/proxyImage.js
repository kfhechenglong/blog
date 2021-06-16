// 使用虚拟代理实现图片预加载
// 虚拟代理把一些开销很大的对象，延迟到真正需要它的时候才去创建；

// 要符合单一职责原则，开发封闭远程
// 代理和本体接口的一致性

var myImage = (function(){
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return function(src) {
        imgNode.src = src;
    }
})();

var proxyImage = (function(){
    var img= new Image();
    img.onload = function(){
        myImage(this.src)
    }
    return function(src) {
        myImage('静态图片地址')
        img.src= src;
    }
})()

proxyImage('图片的线上地址！');


// 使用虚拟代理解决网络请求频繁问题

var synchronousFile =  function(id){
    console.log('开始执行网络请求');
}

var proxySynchronousFile = (function(){
    var cache = [];//保存要发的请求资源
    var timer = null;
    return function(id) {
        cache.push(id);
        if(timer) {
            return;
        }
        timer = setTimeout(function() {
            synchronousFile(cache.join(','))
            clearTimeout(timer)
            timer = null;
            cache.length = 0;
        },2000)
    }
})();

var checkbox = document.getElementsByTagName('input');
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = function() {
        if(this.checked === true) {
            proxySynchronousFile(this.id)
        }
    };
}


/* ************缓存代理*********** */
//mult符合单一职责原则（计算结果）
var mult = function() {
    var a = 1;
    for(var i = 0,l = arguments.length; i < l; i++) {
        a = a*arguments[i]
    }
    return a;
}

var proxyMult = (function()  {
    var cache = {};
    return function () {
        var agrs = Array.prototype.join.call(arguments,',');
        if(agrs in  cache) {
            return cache[agrs];
        }
        return cache[agrs] = mult.apply(this,arguments)
    }
    
})();
proxyMult(1,2,3,4)
proxyMult(1,2,3,4)