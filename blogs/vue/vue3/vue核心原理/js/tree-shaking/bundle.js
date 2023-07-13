const foo = () => {
    console.log('foo');
};

const effect = (obj) => {
    obj && obj.a;
};
var userInfo = {
    name: function () {
        console.log('绝对零度');
    },
    age: () => {
        console.log(18);
    }
};

const fn = () => {
    console.log('fn');
    userInfo.name();
    effect();
    foo();
};
fn();
