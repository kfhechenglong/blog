# commander

## [小试牛刀](./examples/first-attqact.js)

简单使用一下commander的指令
```js
const { program } = require('commander');

program
.option('-f, --first')
.option('-s, --separator <char>');

program.parse();

const options = program.opts();

console.log(options)
console.log(program.args)
```
终端指令
单个指令使用
```sh
$ node index.js -f
# { first: true }
$ node index.js -s /
# { separator: '/' }
```
多指令复合使用
```sh
$ node index.js -s / -f agr
# or
$ node index.js --separator / --first agr
# or
$ node index.js -f agr -s /
# 输出
# { separator: '/', first: true }
# [ 'agr' ]
```
其中`-f`和`--first`是一个意思，前者为简写，后者为全写。如果要传入多个参数，可以使用空格区分，如下所示：
```sh
$ node index.js -s / -f 参数1 参数2
# 输出
# { separator: '/', first: true }
# [ '参数1', '参数2' ]
```

## [option](./examples/options.js)
### 默认值
选项可以设置一个默认值。
```js
program
.option('-c, --cheese <type>', 'default value 绝对零度', '绝对零度');

program.parse();

const opts = program.opts();

console.log(opts)
```
输入， 使用默认值
```sh
$ node .\options.js
# 输出 { cheese: '绝对零度' }
```
输入自定义值
```sh
$ node .\options.js -c hechenglong
# 输出 { cheese: 'hechenglong' }
```
### 取反值
可以定义一个以`no-`开头的 `boolean` 型长选项。在命令行中使用该选项时，会将对应选项的值置为`false`。当只定义了带`no-`的选项，未定义对应不带`no-`的选项时，该选项的默认值会被置为`true`。
```js
option('--no-cheese', 'plain with no cheese')
```
```sh
$ node .\options.js --no-cheese 
# { cheese: false }
```
选项的参数使用方括号声明表示参数是可选参数（如--optional [value]）。该选项在不带参数时可用作 boolean 选项，在带有参数时则从参数中得到值。

```js
.option('-t, --test [type]', 'Add test with optional type');
```
不带参数
```sh
$ node .\options.js -t
# { test: true }
```
带参数
```sh
$ node .\options.js -t name
# { test: 'name' }
```
### [版本号](./examples//version.js)
.version()方法可以设置版本，其默认选项为-V和--version，设置了版本后，命令行会输出当前的版本号

```js
#! /usr/bin/env node
const { program } = require('commander');
const config = require('./../package.json')
program.version(config.version);
program.parse()
```
执行

```sh
$ node ./version.js
# 输出 1.0.0
```
### [命令command](./examples/command.js)
`.command()`的第一个参数为命令名称。命令参数可以跟在名称后面，也可以用`.argument()`单独指定。参数可为必选的（尖括号表示）、可选的（方括号表示）或变长参数（点号表示，如果使用，只能是最后一个参数）。

```js
program
.command('clone <source> [destination]')
.description('clone a repository into a newly created directory')
.action((source, destination) => {
    console.log('source', source)
    console.log('destination', destination)
    console.log('called')
});
```
执行命令
```sh
$ node .\command.js clone args otherArgs
# 输出
# source args
# destination otherArgs
# called
```
#### 多参数命令
在`Command`对象上使用`.argument()`来按次序指定命令参数。该方法接受参数名称和参数描述。参数可为必选的（尖括号表示，例如<required>）或可选的（方括号表示，例如[optional]）

```js
program
.argument('<username>', 'user to login')
.argument('<password>', 'password to login')
.action((name, des) => {
    console.log(name, des)
});
// or
program
.argument('<username> <password>')
.action((name, des) => {
    console.log(name, des)
});
```

执行

```sh
$ node .\command.js hechenglong 123456
# 输出
# hechenglong 123456
```
#### 数组传参

```js
program
  .version('0.1.0')
  .command('rmdir')
  .argument('<dirs...>')
  .action(function (dirs) {
    dirs.forEach((dir) => {
      console.log('rmdir %s', dir);
    });
  });
```
执行

```sh
$ node .\command.js rdir dir1 dir2 dir3
# 输出
# rmdir dir1
# rmdir dir2
# rmdir dir3
```
### [帮助信息](./examples/help.js)
帮助信息是 `Commander` 基于你的程序自动生成的，默认的帮助选项是`-h`,`--help`。