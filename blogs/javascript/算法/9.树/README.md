---
title: 常见算法-树
date: '2022-08-24'
sidebar: true
categories:
 - 前端
 - 技术
tags:
 - 算法
publish: true
---
:::tip
树是一种分层数据的抽象模型。现实生活中最常见的树的例子是家谱，或是公司的组织架构图。
:::

<!-- more -->

## 树的相关概念

 - 节点属性的深度：节点的深度取决于它的祖先节点的数量。如果一个节点有3个祖先节点，那么它的深度就是3。
 - 树的高度：树的高度取决于所有节点深度的最大值。其中根节点在第0层，它的子节点在第1层，孙子节点在第2层，这时可以说树的高度为2。
 - 二叉树：二叉树的节点最多只能有两个子节点，一个左侧节点，一个右侧节点；
 - 二叉搜索树：在二叉树的基础上改进，即左侧节点只允许存储比父节点小的值，右侧节点只允许存储比父节点大的值。

 ## 实现一个搜索二叉树

<!-- <<< ./docs/javascript/算法/9.树/index.js -->
```js
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
```
## 自平衡二叉树

自平衡二叉树（Adelson-Velskii-Landi）(AVL树)：意思是任何一个节点左右两侧子树的高度之差最多为1；添加或移除节点时，AVL树会尽量尝试转换为完全树；


<!-- <<< ./docs/javascript/算法/9.树/avl.js -->
```js
import BinarySearchTree from './index.js'
import {compareDefault, Compare, Node} from './util'
const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
}

// 自平衡树
class AVLTree extends BinarySearchTree {
  constructor(compareFn = compareDefault) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null
  }
  // 获取节点的高度
  getNodeHeight (node) {
    if (node === null) {
      return -1;
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }
  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) = this.getNodeHeight(node.right)
    switch(heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }
  // 向右的单旋转
  rotationLL(node) {
    // 先将节点（a）的左侧子节点(b)存到临时值中
    const temp = node.left;
    // 将左侧子节点(b)的右侧子节点(c)赋值给节点的左节点；
    node.left = temp.right;
    // 再将节点（a）赋值给左侧子节点(b)的右侧子节点
    temp.right = node;
    return temp;
  }
  // 右右旋，向左的单旋转
  rotationRR(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left =node;
    return temp;
  }
  // 向右的双旋转
  // 左侧子节点的高度大于右侧子节点的高度，并且左侧子节点右侧较重；
  // 可以对左侧子节点进行左旋转来修复，进而形成左-左的情况；
  // 然后再对不平衡的接地那进行一个右旋转来修复；
  rotationLR(node) {
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node);
  }
  // 向左的双旋转
  // 和上面向右的双旋转情况相反
  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node)
  }
  // 插入节点
  insert(key) {
    this.root = this.insertNode(this.root, key)
  }
  insertNode(node, key) {
    if (node === null) {
      return new Node(key)
    } else if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key)
    } else {
      return node
    }
    // 查看是否需要平衡操作
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        node = this.rotationLL(node)
      } else {
        return this.rotationLR(node)
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        node = this.rotationRR(node)
      } else {
        return this.rotationRL(node)
      }
    }
    return node;
  }
  // 移除节点
  removeNode(node, key) {
    node = super.removeNode(node, key);
    if (node == null) {
      return node; // null，不需要进行平衡
    }
    // 检测树是否平衡
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left);
      if (balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationLL(node);
      }
      if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right);
      if (balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationRR(node);
      }
      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node.right);
      }
    }
    return node;
  }
}
```