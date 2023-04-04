# 如何让 (a == 1 && a == 2 && a == 3) 返回 true

## 1.宽松相等

### 1.1一般写法

```js
const a = {
  i: 1,
  toString: function () {
    return a.i++;
  }
}
if (a == 1 && a == 2 && a == 3) {
  console.log('this value is truth')
  // this value is truth
}
```
  `==`判断相等，只要值相等即可，不判断类型是否相等，该方法中存在这隐式的类型转换；
  1. `a`为对象，首先转换为字符串，调用了`toString`方法，，此时`a`的值为`1`，然后执行`++`，`i`的值为`2`；
  2. 故`a==1`相等，然后依次进行后面的相等判断；

### 1.2另一种写法
```js
const b = {
  i: 1,
  valueOf () {
    return this.i++;
  }
}
if (b == 1 && b == 2 && b == 3) {
  console.log('this value is truth')
  // this value is truth
}
```

### 1.3使用ES6的Proxy写法

```js
const c = new Proxy({i: 1}, {
  get(target) {
    return () => target.i++;
  }
})
if (c == 1 && c == 2 && c == 3) {
  console.log('Proxy')
  // Proxy
}
```
## 2.严格相等

让(a === 1 && a === 2 && a === 3) 返回 true

```js
var j = 1;
Object.defineProperty(window, 'm', {
  get() {
    return j++;
  }
})
if (m === 1 && m === 2 && m === 3) {
  console.log('defineProperty')
  // defineProperty
}
```
  对于严格相等，一般只能通过劫持数据的`getter`来进行操作；
  相对于宽松相等，除了劫持`getter`以外，还能使用`Object`,`Proxy`对象的`valueOf`，`toString`方法；