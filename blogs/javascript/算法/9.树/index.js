import {compareDefault, Compare, Node} from './util'



export default class BinarySearchTree {
  constructor (compareFn = compareDefault) {
    this.compareFn = compareFn;
    this.root = null;
  }
  // 插入节点
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left,key)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  // 中序遍历树节点
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  // 中序遍历是从最小到最大的顺序依次访问节点。
  // 中序遍历的一种应用就是对树进行排序
  static inOrderTraverseNode(node,callback) {
    if (node !== null) {
      // 根据节点大小，从小到大处理
      // 先处理左侧节点
      this.inOrderTraverseNode(node.left, callback)
      // 再处理父节点
      callback(node.key)
      // 最后处理右侧节点
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  // 先序遍历
  // 先序遍历是以优先于后代节点的顺序访问每一个节点。
  // 先序遍历的一种应用就是打印一个结构化的文档；
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.node, callback)
  }
  static preOrderTraverseNode(node,callback) {
    if (node !== null) {
      // 先序遍历会先访问本身节点，再访问左侧子节点，最后访问右侧子节点
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }
  // 后序遍历
  // 后序遍历是先访问节点的后代节点，再访问节点本身。
  // 后序遍历的一种应用是计算一个目录及其子目录中所有文件所占空间的大小
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }
  static postOrderTraverseNode(node, callback) {
    if (node !== null) {
      // 后序遍历先访问左侧子节点，然后再访问右侧子节点，最后访问父节点
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  // 查找最小值
  // 最小值在节点树的最左侧
  min(){
    return this.minNode(this.root)
  }
  minNode(node) {
    let current = node;
    while(current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }
  // 查找最大值
  // 最大值在树节点的最右侧
  max() {
    return this.maxNode(this.root)
  }
  maxNode(node) {
    let current = node;
    while(current !== null && current.right !== null) {
      current = current.right
    }
    return current;
  }
  

  // 查找特定的节点
  // 如果找不到这个节点，就返回false,找到则返回true
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node === null){
      return false;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 如果查找的key小于当前的节点，则去左侧子节点匹配
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      // 如果查找的key大于当前的节点，则去右侧的子节点匹配
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  

  // 移除节点
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }
  removeNode (node, key) {
    if (node === null) {
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // 如果当前要移除的节点，只有左侧或者右侧节点，则直接用子节点替换当前的节点即可移除；
      if (node.left === null) {
        node = node.right
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // 如果移除的节点下面有2个子节点；
      // 先从要移除节点的右边找到最小的节点，然后替换要被移除的节点；
      // 移除右侧节点中刚才的那个最小的节点；
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key)
      return node;
    }
  }
}

const tree = new BinarySearchTree()

tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(12)

console.log(tree)

tree.inOrderTraverse((val) => {
  console.log(val)
})