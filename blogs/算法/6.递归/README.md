---
title: 常见算法-迭代与递归
date: '2021-07-27'
sidebar: true
categories:
 - 前端
 - 技术
tags:
 - 算法
publish: true
---
:::tip
递归是一种解决问题的方法，它从解决问题的各个小部分开始，直到解决最初的大问题。递归通常涉及函数调用自身。
:::

<!-- more -->
## 迭代求斐波那契数

```js
function fibonaccilterative (n) {
  if (n < 1)  return 0;
  if (n <= 2) return 1;
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i < n; i++) {
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = n;
  }
  return fibN;
}
```

## 递归求裴波那契数

```js
function fibonacci (n) {
  if (n < 1) return 0;
  if (n < 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

## 记忆法裴波那契数

```js
function fibonacciMemoization (n) {
  const memo = [0, 1];
  const fibonacci = (n, memo) => {
    if (memo[n] !== null) return memo[n];
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  }
  return fibonacci(n, memo);
}

// 或者
// 增加缓存优化，减少计算次数
// 优化斐波那契数列---增加缓存

const cache = {}
function fibCache (n) {
  count+= 1
  if (n in cache) {
    return cache[n]
  }
  const v = n === 0 || n === 1 ? 1 : fibCache(n - 1) + fibCache(n - 2);
  cache[n] = v;
  return v
}

// 获取10以内的斐波那契数列值
for (let i = 1; i < 10; i++) {
  console.log(fibCache(i))
}

```

## 两者的区别

  迭代的版本比递归的版本要快很多； 递归版本更容易理解，通常需要的代码也更少；递归有了尾调用优化，递归的多余消化甚至可能被消除；