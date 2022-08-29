# 队列
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