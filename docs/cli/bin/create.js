const path = require('path');
const fs = require('fs-extra');
const inquirer = require('inquirer')
// const Generator = require('./generator.js')
module.exports = async function (name, options) {
    const cwd = process.cwd();
    const targetPath = path.join(cwd, name);
    console.log(targetPath)
    // 判断目标是否存在
    if (fs.existsSync(targetPath)) {
        // 是否强制创建目录
        if (options.force) {
            // 移除旧目录
            console.log(`\r\nRemoving....`)
            // await fs.remove(targetPath)
        } else {
            // 是否要覆盖目录
            let { action } = await inquirer.prompt([
                {
                    name: 'action',
                    type: 'list',
                    message: 'The target folder already exists, Please select the action belowcls',
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
            if (!action) {
                return;
            } else if (action === 'overwrite') {
                // 如果选择重写目录
                console.log(`\r\nRemoving....`)
                // await fs.remove(targetPath)
            }
        }
    }
    // 创建目录
    console.log('创建目录文件夹成功')
}