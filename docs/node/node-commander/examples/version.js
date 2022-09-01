#! /usr/bin/env node
const { program } = require('commander');
const config = require('./../package.json')
program.version(config.version);
program.parse()
// 输出 1.0.0