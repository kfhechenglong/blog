/**
* Created by 绝对零
* Copyright © 2018年 he. All rights reserved
* date 2019.4.3
*/
// 一个发布订阅模式的案例，
// 用户登录成功后各个模块的操作及显示
$.ajax('http://xxxx',function(data) {
    login.trigger('loginSuccess',data);//登录成功后发布消息
});
// 以下是各个模块监听登录成功后的消息
// 模块一
var header =  (function () {
    login.listen('loginSuccess',function (data) {
        header.setAvatar(data)
    });
    return {
        setAvatar:function (data) {
            // 登录成功后header模块要处理的业务逻辑
        }
    }
})();
// 模块二
var nav = (function () {
    login.listen('loginSuccess',function (data) {
        nav.setAvatar(data);
    });
    return {
        setAvatar:function (data) {
            // 登录成功后nav模块要处理的业务逻辑
        }
    }
})();
// 模块三