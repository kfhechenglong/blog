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