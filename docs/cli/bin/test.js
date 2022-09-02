import fs from 'fs';
import { execa } from 'execa';
import question from './prompt/index.js'
import indexHtml from './template/indexHtml/index.js'
import mainIndex from './template/main/index.js'
import packageIndex from './template/package/index.js'
import webpackIndex from './template/webpackConfig/index.js'
const config = {
    packageName: 'helloWorld',
    port: 8080,
    devtool: 'eval-cheap-module-source-map',
}
const config2 = await question()
console.log(config2)
function getProjectPath () {
    return `${config2.packageName}`
};
const dir = getProjectPath()
// 创建项目文件夹
fs.mkdirSync(dir);
// 创建项目src文件夹
fs.mkdirSync(`${dir}/src`)

fs.writeFileSync(`${dir}/index.html`, indexHtml(config))
fs.writeFileSync(`${dir}/src/index.js`, mainIndex(config))
fs.writeFileSync(`${dir}/package.json`, packageIndex(config))
fs.writeFileSync(`${dir}/webpack.config.js`, webpackIndex(config))
console.log(config2.installTool)
// execa(config2.installTool, ['install'], {
//     cwd: getProjectPath(), // 根路径
//     stdio: [2, 2, 2] // 使子进程的输入输出流继承父进程，在当前父进程显示子进程的输入与输出
// })
// 5. 操作git
await execa(`git`, ['init'], { cwd: getProjectPath(), })
await execa(`git`, ['add', './'], { cwd: getProjectPath(), })
await execa(`git`, ['commit', '-m', 'init'], { cwd: getProjectPath(), })

// 6. 拉取远程仓库代码作为代码模板
// await execa(`git`, ['clone', 'https://gitee.com/yanhuakang/my-first-npm-lib.git'], { cwd: './', })
// await execa(`mv`, ['my-first-npm-lib', config.packageName], { cwd: './', })
// await execa(`rm`, ['-rf', `${getProjectPath()}/.git`], { cwd: './', })
// await execa(`cd`, [config.packageName], { cwd: './', })
// await execa(`npm`, ['init'], { cwd: './', })