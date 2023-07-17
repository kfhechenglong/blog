---
title: 常见算法-字典
date: '2021-06-28'
sidebar: true
categories:
 - 前端
 - 技术
tags:
 - 算法
publish: true
---
:::tip
字典存储是[键、值]对，其中键名是用来查询特定的元素。字典也称做`映射`、`符号表`、`关联数组`；
:::

<!-- more -->
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
### 设置键和值
实现`set`方法，用于添加新值或更新已有的值；
```js
set(key, value) {
  if(key != null && value != null) {
    const tableKey = this.toStrFn(key);
    this.table[tableKey] = new ValuePair(key, value);
    return true;
  }
  return false;
}
```
在`set`方法中我们需要实现`ValuePair`类；
```js
class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[${this.key}:${this.value}]`;
  }
}
```
### 移除一个值

```js
remove(key) {
  if(this.hasKey(key)){
    delete this.table[this.toStrFn(key)];
    return true;
  }
  return false;
}
```
### 检索值
```js
get(key) {
  const valuePair = this.table[this.toStrFn(key)];
  return valuePair === null ? undefined : valuePair.value
}
```

### 其他辅助方法
```js
keyValues() {
  return Object.values(this.table);
}
keys() {
  return this.keyValues().map(valuePair => valuePair.key);
}
values() {
  return this.keyValues().map(valuePair => valuePair.value);
}
forEach(cb) {
  const valuePairs = this.keyValues();
  for (let i = 0; i < valuePairs.length; i++) {
    const res = cb(valuePairs[i].key, valuePairs[i].value);
    if (res === false){
      break;
    }
  }
}
// 获取长度
size() {
  return Object.keys(this.table).length;
}
// 判断是否为空
isEmpty() {
  return this.size() === 0;
}
// 清空字典
clear() {
  this.table = {};
}
// 返回字符串
toString() {
  if (this.isEmpty()) {
    return '';
  }
  const valuePairs = this.keyValues();
  let objString = `${valuePairs[0].toString()}`;
  for (let i = 1; i < valuePairs.length; i++) {
    objString = `${objString},${valuePairs[i].toString()}`
  }
  return objString;
}
```
## 使用Dictionary类

```js
const dictionary = new Dictionary();

dictionary.set('he',1891167723);
dictionary.set('laohe','hhh');
dictionary.set('jueduilingdu','绝对零度');

console.log(dictionary.hasKey('he')) // true
console.log(dictionary.keys());
// [ 'he', 'laohe', 'jueduilingdu' ]
console.log(dictionary.values());
// [ 1891167723, 'hhh', '绝对零度' ]
console.log(dictionary.get('laohe'));
// hhh
```