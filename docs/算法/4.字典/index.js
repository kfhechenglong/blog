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
class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  // 判断是否有值
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  // 添加
  set(key, value) {
    if(key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  // 移除一个值
  remove(key) {
    if(this.hasKey(key)){
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair === null ? undefined : valuePair.value
  }
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
}

// 实现
class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[${this.key}:${this.value}]`;
  }
}


// 使用Dictionary类

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