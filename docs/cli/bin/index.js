#! /usr/bin/env node
console.log('index.js')
const { program } = require('commander');

program
.option('--first')
.action((name, options) => {
    console.log('name', name)
})
program.parse();
console.log(program.opts())
console.log(program.args)