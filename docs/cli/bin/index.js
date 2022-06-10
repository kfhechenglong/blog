#! /usr/bin/env node
console.log('index.js')
const { program } = require('commander');

program
.command('create <my-app>')
.description('create a new project')
.option('-f, --force', 'overwrite target directory if it exist')
.action((name, options) => {
    // 打印执行结果
    console.log('name', name, 'options', options);
    require('../bin/create.js')(name, options)
})
program.parse();