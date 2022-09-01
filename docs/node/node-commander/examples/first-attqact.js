#! /usr/bin/env node
const { program } = require('commander');

program
.option('-f, --first')
.option('-s, --separator <char>');

program.parse();

const options = program.opts();

console.log(options)
console.log(program.args)

// node .\first-attqact.js -f -s / a/b/c
// { first: true, separator: '/' }
// [ 'a/b/c' ]