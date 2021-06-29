const linked = require("../3.链表/链表.js");
console.log(linked)
const LinkedList = linked.LinkedList
function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}
// 散列
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

class valuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[${this.key}:${this.value}]`;
  }
}

// 使用

const hash = new HashTable();

hash.put('he', 'laohe');
hash.put('name', 'jueduilingdu');

console.log(hash.hashCode('he'))
console.log(hash.hashCode('name'))

// 处理散列表中的冲突

hash.put('Ygrtte', 'YgrtteValue');
hash.put('Jonathan', 'JonathanValue');
hash.put('Jamie', 'JamieValue');
hash.put('Jack', 'JackValue');
hash.put('Athelstan', 'AthelstanValue');


console.log(hash.hashCode('Ygrtte'), 'Ygrtte')
console.log(hash.hashCode('Jonathan'), 'Jonathan')
console.log(hash.hashCode('Jamie'), 'Jamie')
console.log(hash.get(hash.hashCode('Jack')), 'Jack')
console.log(hash.hashCode('Athelstan'), 'Athelstan')

// console.log(hash.table)

// 分离链接

class HashTableSeparateChaining extends HashTable {
  constructor(toStrFn = defaultToString) {
    super()
    this.toStrFn = toStrFn;
    this.table = {};
  }
  put(key,value) {
    if(key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new LinkedList()
        // LinkedList为链表
      }
      this.table[position].push(new valuePair(key, value));
      return true;
    }
    return false;
  }
  get(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if(linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while(current != null) {
        if(current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }
}

const hashTable = new HashTableSeparateChaining();

hashTable.put('he', 'laohe')
console.log(hashTable.get('he'), 'HashTableSeparateChaining')