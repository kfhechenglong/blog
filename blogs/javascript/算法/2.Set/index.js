
// 集合

class Set {
  constructor() {
    this.items = {};
  }
  
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true
    }
    return false
  }
  delete(element) {
    if (!this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    let count = 0;
    for (const key in this.items) {
      if (Object.hasOwnProperty.call(this.items, key)) {
        count++;
      }
    }
    return count;
  }
  values() {
    return Object.values(this.items);
  }

  // 并集
  union(otherSet) {
    const unionSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  }
  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    console.log(biggerSet)
    smallerSet.forEach(value => {
      if (biggerSet.has(value)) {
        intersectionSet.add(value)
      }
    })
    return intersectionSet;
  }
  // 差集
  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if(!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet;
  }
  // 子集
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    })
    return isSubset
  }
}

const set = new Set();

set.add(12);
set.add(2);
set.add(3);
set.add(4);
console.log(set.values())
// 设置另外一个集合

const setOther = new Set();
setOther.add(3)
setOther.add(4)
setOther.add(6)
console.log(setOther.values())
// 获取交集

const union = set.union(setOther)
console.log(union)