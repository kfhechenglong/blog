---
title: TypeScript面试题
date: '2024-03-26'
sidebar: true
categories:
 - 前端
 - 面试
tags:
 - TypeScript
publish: true
---
:::tip
TypeScript面试题集合
:::

<!-- more -->
## TypeScript中Type与interface的相同点和不同点

### 不同点
- 类型别名type 是用来给类型起一个别名，使类型有语义化。而interface则是命名数据结构的一种方式；
- type可以用来标识基本类型、对象类型、元组、函数等，而接口interface则只能表示对象；
- interface定义时如果存在重名则会合并属性，而type如果存在重复则会保错；
- interface可以使用extends继承，type则不允许使用extends，但可以使用交叉类型实现继承的功能；

### 相同点

- 都可以用来描述object和function；
- interface和type都可以继承；

### 示例
#### 使用type定义
```ts
// 使用类型别名定义
type username = string;

type age = string | number

type color = string[];

type Person = {
  name: username
  age: age
  gender: string
}

const user: Person = {
  name: '绝对零度',
  age: 18,
  gender: '男性'
}

```
#### 使用接口interface定义
```ts
// 使用类型别名定义
type username = string;

type age = string | number

type color = string[];

interface Person = {
  name: username
  age: age
  gender: string
}

const user: Person = {
  name: '绝对零度',
  age: 18,
  gender: '男性'
}

```

#### 定义函数和对象的不同
定义对象
```ts
// 定义对象
type Person = {
  name: string;
  age: number;
}
interface Person {
  name: string;
  age: number;
}
```
定义函授
```ts
type GetPerson = (name: string, age:number) => void;
interface GetPerson {
  (name: string, age:number):void;
}
```

#### 继承实现
interface继承interface
```ts
// interface继承interface
interface Person1 {
  name: string
}
interface Person extends Person1 {
  age: number
}

```
interface继承type
```ts
type Person1 = {
  name: string
}
interface Person extends Person1 {
  age: number
}
```

```ts
// type继承type
type Person1 = {
  name: string
}
type Person = Person1 & {age: number}
// type继承interface
interface Person1 {
  name: string
}
type Person = Person1 & {age: number}
```