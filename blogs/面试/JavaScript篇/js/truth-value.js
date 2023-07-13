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

const c = new Proxy({i: 1}, {
  get(target) {
    return () => target.i++;
  }
})
if (c == 1 && c == 2 && c == 3) {
  console.log('Proxy')
  // Proxy
}

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