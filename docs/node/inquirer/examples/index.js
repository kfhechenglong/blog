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