# 字典

## 定义
  字典存储是[键、值]对，其中键名是用来查询特定的元素。字典也称做`映射`、`符号表`、`关联数组`；
  字典经常用来保存对象的引用地址；在字典中，理想的情况是用字符串作为键名，值可以是任何类型；

## 创建字典类
[defaultToString函数](/uitls/#defaulttostring)
```js
import { defaultToString } from '../../uitls';

export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
}
```
### 检测一个键是否存在于字典中
  首先需要实现`hasKey(key)`方法，之所以要实现这个方法，是因为它会被`set`和`remove`等其它方法调用；
```js
hasKey(key) {
  return this.table[this.toStrFn(key)] != null;
}
```