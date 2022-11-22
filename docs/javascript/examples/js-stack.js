let a = 'Hello World!';

function first() {
  console.log('first 函数上下文');
  second();
  console.log('再次进入 first 函数上下文');
}

function second() {
  console.log('second 函数上下文');
}

first();
console.log('全局上下文');


// first 函数上下文
// second 函数上下文
// 再次进入 first 函数上下文
// 全局上下文
