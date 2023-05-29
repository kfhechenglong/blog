
class Stack {
  // 定义集合
  #items = []
  push(data) {
    this.#items.push(data)
  }
  pop() {
    return this.#items.pop()
  }
  size() {
    return this.#items.length
  }
  clear() {
    this.#items = []
  }
  isEmpty(){
    return this.#items.length === 0
  }
  toString(){
    return this.#items.join('')
  }
}

// 进制转换
const convert = function (num, base = 2) {
  let string = ''
  let numStr = num
  let stack = new Stack()
  const baseString = '0123456789ABCDEF'
  while (numStr > 0) {
    stack.push(numStr % base)
    numStr = Math.floor(numStr/base)
  }
  while(!(stack.isEmpty())) {
    string += baseString[stack.pop()]
  }
  return string
}
console.log(convert(60))
console.log(convert(102,8))
console.log(convert(500,16))