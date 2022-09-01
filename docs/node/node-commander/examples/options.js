#! /usr/bin/env node
// options

const { program } = require('commander');
// program
// .option('-d, --debug', 'output extra deubgging')
// .option('-s, --small', 'small pizza size');

// program.parse(process.argv);

// const options = program.opts();

// console.log(options)
// node .\options.js -ds
// or node .\options.js -d -s
// 输出 { debug: true, small: true }


// 设置默认值

program
.option('-c, --cheese <type>', 'default value 绝对零度', '绝对零度')
.option('--no-cheese', 'plain with no cheese')
.option('-t, --test [type]', 'Add test with optional type');

program.parse();

const opts = program.opts();

console.log(opts)