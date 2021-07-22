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

  remove(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while(current != null) {
        if(current.element.key === key) {
          linkedList.remove(current.element)
          if(linkedList.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
}

const hashTable = new HashTableSeparateChaining();

hashTable.put('he', 'laohe')
console.log(hashTable.get('he'), 'HashTableSeparateChaining')


// 线性探查

class HashTableLinearProbing extends HashTable {
  constructor(toStrFn = defaultToString) {
    super()
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new valuePair(key, value);
      } else {
        let index = position + 1;
        while(this.table[index] != null) {
          index++;
        }
        this.table[index] = new valuePair(key, value);
      }
      return true;
    }
    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    if(this.table[position] != null){
      if(this.table[position].key === key) {
        return this.table[position].value;
      }
      let index = position + 1;
      while(this.table[index] != null && this.table[index].key !== key) {
        index ++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[position].value;
      }
    }
    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if(this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }
      let index = position + 1;
      while(this.table[index] != null && this.table[index].key !== key) {
        index ++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
    }
    return false;
  }

  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;
    while(this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
      if(posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
  }
}


const hashTableLinearProbing = new HashTableLinearProbing();

hashTableLinearProbing.put('Ygrtte'); // 4
hashTableLinearProbing.put('Jonathan'); // 5
hashTableLinearProbing.put('Jamie'); // 5
hashTableLinearProbing.put('Jack'); // 7
hashTableLinearProbing.put('Jasmine'); // 8
hashTableLinearProbing.put('Jake'); // 9
hashTableLinearProbing.put('Nathan'); // 10
hashTableLinearProbing.put('Athelstan'); // 7
hashTableLinearProbing.put('Sue'); // 5
hashTableLinearProbing.put('Aethelwulf'); // 5
hashTableLinearProbing.put('Sargeras'); // 10