#! /usr/bin/env node
const { program } = require('commander');

program
.command('clone <source> [destination]')
.description('clone a repository into a newly created directory')
.action((source, destination) => {
    console.log('source', source)
    console.log('destination', destination)
    console.log('called')
});
// 命令参数与多个参数
program
.version('1.0.0')
.command('login')
.argument('<username>', 'user to login')
.argument('<password>', 'password to login')
.action((name, des) => {
    console.log(name, des)
});
// 数组传参
program
  .version('0.1.0')
  .command('rmdir')
  .argument('<dirs...>')
  .action(function (dirs) {
    dirs.forEach((dir) => {
      console.log('rmdir %s', dir);
    });
  });
// 处理函数
program
  .argument('<name>')
  .option('-t, --title <honorific>', 'title to use before name')
  .option('-d, --debug', 'display some debugging')
  .action((name, options, command) => {
    if (options.debug) {
      console.error('Called %s with options %o', command.name(), options);
    }
    const title = options.title ? `${options.title} ` : '';
    console.log(`Thank-you ${title}${name}`);
  });

program
  .command('serve')
  .argument('<script>')
  .option('-p, --port <number>', 'port number', 80)
  .action(function() {
    console.error('Run script %s on port %s', this.args[0], this.opts().port);
  });
program.parse()