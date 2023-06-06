# 队列

如果使用数组进行删除，效率相对较低，这是因为使用`shift()`函数可以把数组的第一个元素从其中删除，并返回第一个元素的值；然后将余下所有元素前移1位，以填补数组头部的空缺，如果数据量很大的话，效率就有很低下。

这里使用对象去描述数组，进行队列操作。

```js
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  // 添加队列
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  // 删除队列项
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  // 查看队列项
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount];
  }
  // 判断是否为空
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  // 队列长度
  size() {
    return this.count - this.lowestCount;
  }
  // 清空队列
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
```