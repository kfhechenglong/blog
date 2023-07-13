const fs = require('fs')
const path = require('path')
const filterArr = ['.vuepress', 'imgs', 'index.md', 'imges', 'js', 'node_modules', 'uitls', '2022']
const README = 'README.md'
console.log(__dirname)
console.log(__filename)
function getFileNodes(dir = './', level = 1) {
  const nodes = []
  let files = fs
    .readdirSync(dir)
    .map(item => {
      const fullPath = path.join(dir, item)
      const isDir = fs.lstatSync(fullPath).isDirectory()
      return {
        name: item,
        isDir: isDir,
        path: path.join(dir, item),
        level
      }
    })
  for (let index = 0; index < files.length; index++) {
    const item = files[index]
    if (!/^((?!(\(|\)|<|>))\S)*?\.md$/.test(item.name) && !item.isDir) {
      continue
    }
    let note = '' // 文件注释
    let arr = filterArr.findIndex(obj => obj === item.name)
    if (arr === -1) {
      const fullPath = path.join(dir, item.name)
      const isDir = fs.lstatSync(fullPath).isDirectory()
      if (isDir) {
        // 递归
        item.children = getFileNodes(fullPath, level + 1)
        if (item.children.length) {
          nodes.push(item)
        }
      } else {
        nodes.push(item)
      }
    }
  }
  return nodes
}
const nodes= getFileNodes('./')
// console.log(JSON.stringify(nodes))
wirteJs(nodes, './README.md')

function wirteJs(data, filePath) {
  let file = path.resolve(__dirname, filePath)
  // let content = `# 扫码关注支持 \n\r![公众号二维码](./docs/imgs/公众号二维码.jpg) \n\r![公众号二维码](./docs/imgs/扫码_搜索联合传播样式-标准色版.png)\n\r`
  let content = ``
  const getConent = (data) => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.name === README) {
        continue
      }
      const path = item.path.split('\\').join('/')
      const name = item.name.split('.md')[0]
      if (item.children && item.children.length) {
        if (item.children.some(child => child.name === README)) {
          // 判断一下当前目录文件夹中是否有README文件，如果有，则根目录则填写path，否则不填写
          if (item.children.length === 1) {
            content += `[${name}](./${path}/${README})\n\r`
          } else {
            content += `${'#'.repeat(item.level)} [${name}](./${path}/${README})\n\r`
          }
        } else {
          content += `${'#'.repeat(item.level)} ${name}\n\r`
        }
        getConent(item.children)
      } else {
        content += `[${name}](./${path})\n\r`
      }
    }
  }
  getConent(data)
  // 异步写入数据到文件
  fs.writeFile(file, content, { encoding: 'utf8' }, err => {})
}

console.log('README updated')