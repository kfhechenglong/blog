import path from 'path';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import chalk from 'chalk';
// const Generator = require('./generator.js')
export async function create (name, options) {
    const cwd = process.cwd();
    const targetPath = path.join(cwd, name);
    console.log(targetPath)
    // 判断目标是否存在
    if (fs.existsSync(targetPath)) {
        // 是否强制创建目录
        if (options.force) {
            // 移除旧目录
            console.log(chalk.redBright(`\r\nRemoving....`))
            await fs.remove(targetPath)
            console.log(chalk.bgBlue(`\r\n旧文件夹移除成功`))
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
                console.log(chalk.redBright(`\r\nRemoving....`))
                await fs.remove(targetPath)
                console.log(chalk.bgBlue(`\r\n旧文件夹移除成功`))
            }
        }
    }
    // 创建目录
    fs.mkdir(targetPath, (err) => {
        if (!err) {
            console.log(chalk.green(`\r\n创建目录文件--${chalk.yellow(name)}--夹成功`))
        }
    })
}