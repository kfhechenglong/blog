/*
* 给某个文本输入框添加多种效验规则
* */

/**********************策略对象************************/
var strategies = {
    isNonEmpty : function(value,errorMsg) {
        if( value === "") {
            return errorMsg;
        }
    },
    minLength : function (value,length,errorMsg) {
        if(value.length < length) return errorMsg;
    },
    isMobile : function (value,errorMsg) {
        if(!/(^1[3|5|8][0-9]{9}$)/.test(value)) return errorMsg
    }
};

/**********************Validator类************************/

var Validator = function() {
    this.cache = [];
};
Validator.prototype.add = function(dom,rules) {
    let self = this;
    for(var i = 0,rule;rule = rules[i++];){
        (function (rule) {
            var strategyAry = rule.strategy.split(':');
            var errorMsg = rule.errorMsg;
            self.cache.push(function() {
                var strategy = strategyAry.shift();
                strategyAry.unshift(dom.value);
                strategyAry.push(errorMsg);
                return strategies[strategy].apply(dom,strategyAry);
            })
        })(rule)
    }
};
Validator.prototype.start = function() {
    for (var i = 0,validatorFunc; validatorFunc = this.cache[i++];) {
        var errorMsg = validatorFunc();
        if(errorMsg) return errorMsg;
    }
};

/***********************客户调用代码************************* */

var registerForm = document.getElementById('registerForm');
var validatorFunc = function() {
    var validator = new Validator();
    validator.add(registerForm.userName,[
        {
            startegy:'isNonEmpty',
            errorMsg:'用户名不能为空！'
        },
        {
            strategy:'minLength:6',
            errorMsg:'用户名长度不小于6位！'
        }
    ]);
    var errorMsg = validator.start();
    return errorMsg;
}

// 表单验证时，只需要判断函数validatorFunc是否有值即可，有值说明验证不通过，提示验证失败的信息