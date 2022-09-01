#! /usr/bin/env node
const { program } = require('commander');
program
.command('help <name>').description('sadasdas')
.action((arg) => {
  console.log(arg)
})
program.parse()