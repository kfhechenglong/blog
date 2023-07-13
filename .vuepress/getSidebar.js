const fs = require('fs')
const path = require('path')
const filterArr = ['.vuepress', 'imgs', 'index.md', 'imges', 'js', 'node_modules', 'uitls', '2022']
const README = 'README.md'
function getFileNodes(dir = './', level = 1, parentPath = '/blogs') {
  const nodes = []
  let files = fs
    .readdirSync(dir).filter(item => {
      if (!filterArr.includes(item)) {
        return item
      }
    })
    .map(item => {
      const fullPath = path.join(dir, item)
      const isDir = fs.lstatSync(fullPath).isDirectory()
      // console.log(item)
      const cPath = item === '/blogs' ? `/` : `${parentPath}/${item}`
      return {
        title: item,
        isDir: isDir,
        collapsable: false,
        path: cPath,
        level
      }
    })
    // console.log(files)
  for (let index = 0; index < files.length; index++) {
    const item = files[index]
    if (!/^((?!(\(|\)|<|>))\S)*?\.md$/.test(item.title) && !item.isDir) {
      continue
    }
    let note = '' // 文件注释
    let arr = filterArr.findIndex(obj => obj === item.name)
    if (arr === -1) {
      const fullPath = path.join(dir, item.title)
      const isDir = fs.lstatSync(fullPath).isDirectory()
      if (isDir) {
        // 递归
        item.children = getFileNodes(fullPath, level + 1, item.path)
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
const nodes= getFileNodes('./blogs')
// console.log(JSON.stringify(nodes))
wirteJs(nodes, './sidebar.js')

function wirteJs(data, filePath) {
  const file = path.resolve(__dirname, filePath)
  const getConent = (data) => {
    const content = []
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.title === README) {
        continue
      }
      // const path = item.path.split('\\').join('/')
      // console.log(item)
      const name = item.title.split('.md')[0]
      if (item.children && item.children.length) {
        let obj = {}
        if (item.children.some(child => child.title === README)) {
          // 判断一下当前目录文件夹中是否有README文件，如果有，则根目录则填写path，否则不填写
          obj = {
            title: name,
            sidebarDepth: 2,
            collapsable: item.collapsable,
            path: item.path + '/'
          }
        } else {
          obj = {
            title: name,
            sidebarDepth: 2,
            collapsable: item.collapsable
          }
        }
        const childs = getConent(item.children)
        if (childs.length) {
          content.push({
            ...obj,
            children: childs
          })
        } else {
          content.push(obj)
        }
      } else {
        // 判断一下当前文件名是否为.md
        if (item.title.includes('.md')) {
          content.push({
            title: name,
            path: item.path
          })

        } else {
          content.push({
            title: name,
            sidebarDepth: 2,
            collapsable: item.collapsable
          })
        }
      }
    }
    return content
  }

  const result = getConent(data)
  const tranformdData = {}
  result.forEach(item => {
    tranformdData[`/blogs/${item.title}/`] = item.children
  });
  // // 异步写入数据到文件
  const pre = 'module.exports = '
  // 异步写入数据到文件
  fs.writeFile(file, pre + JSON.stringify(tranformdData), { encoding: 'utf8' }, err => {})
}

// console.log(nodes)
console.log('sidebar updated')