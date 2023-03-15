# 散列

## 定义
  散列算法的作用是尽可能的在数据结构中找到一个值；
  使用散列函数，就知道值的具体位置，因此能够快速检索到该值，散列函数的作用是给定一个键值，然后返回值在表中的地址；
  它是字典的一种实现；所以可以用作关联数组也可以用来对数据库进行索引；
  JavaScript语言内部就是使用散列表表示对象。此时，对象的每个属性和方法（成员）被存储为key对象类型，每个key指向对应的对象成员；
## 创建散列表

```js
class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  // 创建散列函数
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);;
    }
    return hash % 37;
  }
  hashCode(key) {
    return this.loseloseHashCode(key);
  }
  // put方法和Dictionary类中的set方法类似，但是大多数的编程语言会在HashTable数据结构中使用put方法，因此我们遵循相同的命名规则；
  put(key, value) {
    if (key != null && value != null) {
      const postion = this.hashCode(key);
      this.table[postion] = new valuePair(key, value)
      return true
    }
    return false
  }
  
  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair!= null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }
}
```
## 使用
```js
hash.put('he', 'laohe');
hash.put('name', 'jueduilingdu');

console.log(hash.hashCode('he'))
// 20
console.log(hash.hashCode('name'))
// 10
```

## 处理散列表中的冲突

如果一些键的散列值相同，则不同的值在散列表中对应这相同的位置，则其为冲突；
如下代码：
```js
console.log(hash.hashCode('Ygrtte'), 'Ygrtte')
console.log(hash.hashCode('Jonathan'), 'Jonathan')
console.log(hash.hashCode('Jamie'), 'Jamie')
console.log(hash.get(hash.hashCode('Jack')), 'Jack')
console.log(hash.hashCode('Athelstan'), 'Athelstan')

```
依次输入下列值
```js
// 10 'Ygrtte'
// 5 'Jonathan'
// 5 'Jamie'
// AthelstanValue Jack
// 7 'Athelstan'
```
## 解决方案

### 分离链接
分离链接法包括为散列表的每一个位置创建一个链表并将元素存储在里面；它是解决冲突的最简单的方法，但是在hashTable实例之外需要另外的存储空间；