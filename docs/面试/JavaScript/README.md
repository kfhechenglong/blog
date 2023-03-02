## 使用一个 Node 中间件解决前端跨越问题

用 node 写一个前端跨域的中间件

## 模拟一个 V8 引擎解析器

## 构建工具的优势

在现代使用现代框架时，都会基于一个构建工具协助开发和打包编译，使用构建工具有以下优势：

- 可以方便使用现代框架，例如 Vue、React 等。
- 可以使用 ES 的 export 等特性进行模块化管理，抽离模块、组件并交给构建工具打包处理。
- 优化代码体积，利用打包工具的 tree-skaking 特性移除无用代码，懒加载和 Chunk 分割，对代码进行压缩。
- 对海量的 npm 包支持开箱即用，构建工具负责按需抽离合并。
- 可以使用 CSS 等 Sass、less 等预处理器，提高 Css 的开发效率。
- 对 TypeScript 的友好支持，开发工具进行编译处理。
- 可以使用 ESlint、StyleLint 等代码风格校验、git hooks 工具。

## Node 版本的知识点

node 的版本有 LTS 和 Current 之分，并且拥有不同的版本号。

current 版本是最新发布版本，里面包含这个版本系列的最新功能，但是有些功能需求完善或者修复做兼容处理。

node 每 6 个月就会发布一次 Current 版本，其中新偶数版本每年 4 月份发布，奇数版本每年的 10 月份发布。每个版本会在这个阶段持续活跃 6 个月，期间进行维护和更新。但是满 6 个月以后将有以下区别：

- 其中如果大版本是奇数，将不再进行支持，不会进入到 LTS 版本阶段。
- 如果大版本是偶数，则进行到 LTS 阶段，并且作为活跃的稳定版投入使用。

LTS 版本，全程 Long Time Support 即长期维护版本。每个 LTS 版本大概会进行长达 30 个月的维护时间，其中会经历 Active 阶段（大约是 18 个月）进行积极维护和升级，然后经历 Maintenance 阶段（大约 12 个月）进行错误修复和安全补丁。

## 关于 package.json 中的 Type

`package.json`中的 type 字段是关于模块规范的定义，有两个值可供选择`commonjs`和`module`，其中`commonjs`是默认值。

- 当设置为`commonjs`时，拓展名称为`.js`和`.cj`的文件都是`commonjs`规范的模块，如果要使用`ES Module`规范，则需要使用`.mjs`为拓展名。
- 当设置为`module`时，拓展名称为`.js`和`.mjs`的文件都是`ES Module`规范的模块，如果使用`commonjs`规范，则需要使用`.mjs`作为拓展名.

更多信息，请参考[npm Docs](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

## 把一个 url 拆解成 origin、文件名、hash 拆解成示例的格式

首先需要明白一个 URL 的组成分为几部分，以这个`http://localhost:8080/article/details/109065450/?id=14d76037-6462-445a-8d64-00c6b517db11&openType=new_blank#/client_info/client_info_page`为例

- 协议： 常见的协议有两种，一种是`http://` 一种是`https(http+ssh)://`
- 域名：`localhost`
- 端口： 一般范围在 0-65535 之间，默认端口 http 是 80，https 为 443
- 文件路径：`/article/details/109065450`
- hash：一般以#开头`#/client_info/client_info_page`
- 参数： 一般以?开头以=连接的键值对，多个键值对采用&分割`?id=14d76037-6462-445a-8d64-00c6b517db11&openType=new_blank`

解析一个 URL，这里利用创建一个 a 标签解析

```js
const url =
  "http://localhost:8080/article/details/109065450/?id=14d76037-6462-445a-8d64-00c6b517db11&openType=new_blank#/client_info/client_info_page";
const parse = (path) => {
  let data = {
    path: "",
    query: {},
    origin: "",
    hash: "",
  };
  const tag = window.document.createElement("a");
  tag.href = path;
  data.origin = tag.origin;
  data.hash = tag.hash;
  data.path = tag.pathname;
  let pathList = tag.search.split("?");
  //获取query
  if (pathList[1]) {
    let queryList = pathList[1].split("&");
    queryList.map((item) => {
      let queryData = item.split("=");
      data.query[queryData[0]] = queryData[1];
    });
  }
  return data;
};
console.log(parse(url));
```

最后输出的值

```js
{
  hash: "#/client_info/client_info_page";
  origin: "http://localhost:8080";
  path: "/article/details/109065450/";
  query: {
    id: "14d76037-6462-445a-8d64-00c6b517db11";
    openType: "new_blank";
  }
}
```

## 两个数组合并成一个数组

现在需要将两个数组 arr1 和 arr2 合并成一个新的 newArr

1.es6 的解构

```js
const newArr = [...arr1, ...arr2];
// 该操作会生成一个新的数组，而不改变原来的数组
```

2.使用`concat`方法

```js
const newArr = [];
newArr.concat(arr1, arr2);
```

3.使用`push`或`unshift`方法添加

```js
newArr.push(...arr1);
newArr.push(...arr2);
// 或者
newArr.unshift(...arr1);
newArr.unshift(...arr2);
```

关于算法优化的问题

## 大小驼峰转换

首先需要明白一点小驼峰和大驼峰的概念

- 小驼峰：首单词的首字母小写，其他单词的首字母大写，例如：`className`
- 大驼峰：单词的首字母都大写，例如`ClassName`

### 将下划线转化为小驼峰

```js
function underlineToSmallCamel(str) {
  return str.toLowerCase().replace(/_([a-z])/g, function (s, s1) {
    return s1.toUpperCase();
  });
}
const a = underlineToSmallCamel("class_name_type");
console.log(a);
// classNameType
```

### 将小驼峰转化为下划线

```js
function camelToUnderline(camelStr) {
  return camelStr
    .replace(/[A-Z]/g, function (s) {
      return " " + s.toLowerCase();
    })
    .trim()
    .replaceAll(" ", "_");
}
camelToUnderline("classNameType");
// "class_name_type"
```

### 大小驼峰转换

```js
function camelToUpperCase(str) {
  if (!str) return "";
  return str.replace(/[a-z]/, function (s) {
    return s.toUpperCase();
  });
}
camelToUpperCase("classNameType");
// ClassNameType
```

## 首屏优化的方案

### 代码
- 路由懒加载
- 异步组件
- 按需加载UI库，tree-skaning优化
- 页面使用骨架屏（Skeleton）
### 网络
- 使用CDN加速，将通用库从vendor进行抽离
- 图片懒加载减少占用带宽
- JavaScript代码使用预加载和异步加载（`功能独立且不要求马上执行的js文件可以使用async，优先级低且没有依赖的js，加入defer`）
- 雪碧图
### 缓存
- webpack、vite（打包工具）开启gzip压缩
- Nginx开启Gzip功能
## 前端如何处理高并发问题

如果一次性增加 100 万个用户访问项目，前端角度你会怎么优化

如果一个项目同时被百万以上基本的用户访问，就会涉及到高并发的问题，而前端需要关注的则是如何减少减轻资源请求，以降低对后端服务器的压力。

![高并发前端访问](./imgs/gbf.png)

所以要在前端优化关于高并发的问题，还是优化前端资源的问题，这和前端首屏优化方案有点类似。

- 图片压缩、CSS sprites、小图片base64编码等等。
- 多个文件合并成一个文件，减少http的请求数量
- 静态资源上传cdn
- 设置响应头cache-control和last-modified
- 代码压缩（去空格、去回车、去注释、替换较长变量名称等等）；
- 函数防抖节流应用，减少短时间内高频请求接口，降低api访问次数；
## 分别用 es5 和 es6 的方式解决一个继承问题

## 用递归的思路实现 1 - 100 求和

## 三十个数字（自然数）每三个 return 出去，最后只剩下一个，求剩下的这个是几？

## url 访问都发生了什么（详细阐述）

## var string = "小明"，写一个函数实现 string.fn() = "她叫小明"

## 事件循环的机制了解吗？宏任务和微任务的执行顺序是怎样的？

## 怎么理解闭包这个定义的，在平时工作中有用到闭包的使用吗，举个例子。

## TCP 协议三次握手、四次挥手的过程，为什么挥手要 4 次,以及报文是怎么加密和传送的？

## 说一下你在项目的安全性做了哪些工作（侧重网络协议方面的安全）？

## 你们现在整个登录鉴权是怎么设计的？如果要考虑单点登录呢，会如何设计？

## 前端页面无感刷新 token 的技术方案？

## 浏览器的重排重绘了解嘛，一般在写页面的时候会有哪些考虑？

## 内存泄漏和内存溢出有什么区别

## 你在做完前端项目之后，一般都会写哪些文档

## 基于你的脚手架做了哪些优化？

## 有在项目中遇到过 xss 攻击吗？
