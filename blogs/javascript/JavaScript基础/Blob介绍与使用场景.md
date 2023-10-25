---
title: Blob介绍与使用场景
date: '2023-08-29 08:00:00'
sidebar: 'auto'
categories:
 - 前端
 - 技术
tags:
 - JavaScript
 - Blob
publish: true

---
:::tip
Blob对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成ReadableStream来用于数据操作。
Blob表示的不一定是JavaScript原生格式的数据。File接口基于Blob，继承了blob的功能并将其扩展以支持用户系统上的文件。
:::

<!-- more -->

## Blob API 简介

### Blob构造函数

`new Blob`会创建一个新的Blob对象，并将其返回，创建时一般需要接受2个参数；

```js
const blobValue = new Blob(array, options);
```

关于参数的说明
- array 是一个由`ArrayBuffer`, `ArrayBufferView`, `Blob`, `DOMString` 等对象构成的 `Array` ，或者其他类似对象的混合体，它将会被放进`Blob`。`DOMStrings` 会被编码为`UTF-8`。
- options 是一个可选的BlobPropertyBag字典，它可能会指定如下两个属性:

1. `type`，默认值为"",代表将被放入到blob中的数组内容的MIME类型。常规的MIME类型包括：`text/plain`、`image/jpeg`等，详情参考：[MIME类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types#%E5%AF%B9_web_%E5%BC%80%E5%8F%91%E8%80%85%E8%87%B3%E5%85%B3%E9%87%8D%E8%A6%81%E7%9A%84_mime_%E7%B1%BB%E5%9E%8B)。
2. 
## Blob的使用