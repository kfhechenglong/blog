---
title: inquirer命令行交互工具
date: '2022-05-26'
sidebar: true
categories:
 - 前端
 - 技术
tags:
 - node
publish: true
---
:::tip
Inquirer基于诺言的npm软件包，用于Node项目中，以创建用于基于查询的任务的CLI(命令行界面)工具。 询问用户问题，验证用户输入并根据给定的响应进行操作非常好。
:::

<!-- more -->

## 安装

```sh
$ npm install inquirer
```


### [创建文件](./examples/index.js)

创建index.js文件，测试node执行情况

```js
#! /usr/bin/env node
const inquirer = require('inquirer');

console.log('inquirer')
```

```sh
$ node ./index.js
# 输出 inquirer
```

验证程序正常使用

## Question参数

```js
#! /usr/bin/env node
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        name: 'action',
        type: 'list',
        message: 'The target folder already exists, Please select the action below',
        choices: [
            {
                name: 'Overwrite',
                value: 'overwrite'
            },
            {
                name: 'Cancel',
                value: false
            }
        ]
    }
  ])
  .then((answers) => {
    // 交互输出的结果值
    console.log(answers)
    if (answers.action === 'overwrite') {
        console.log('重写目标文件夹')
    } else {
        console.log('取消，结束操作')
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
```

运行以下试试

```sh
$ node .\index.js
? The target folder already exists, Please select the action below (Use arrow keys)
> Overwrite
  Cancel
```
键盘上下键作为选择键，enter作为选择确认键，现在直接按下enter
```sh
? The target folder already exists, Please select the action below Overwrite
# { action: 'overwrite' }
# 重写目标文件夹
```