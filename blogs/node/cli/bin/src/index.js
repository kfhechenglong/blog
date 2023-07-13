#! /usr/bin/env node
import { Command } from 'commander';
import { create } from './create.js';

export default () => {
    const program = new Command();
    program
    .command('create <my-app>')
    .description('create a new project')
    .option('-f, --force', 'overwrite target directory if it exist')
    .action((name, options) => {
        // 打印执行结果
        console.log('name', name, 'options', options);
        create(name, options)
    })
    program.parse();
}