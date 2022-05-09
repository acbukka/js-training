class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.knot = null;
  }

  add(data) {
    this.knot = addWithin(this.knot, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      //
      return node;
    }
    // const node = this.knot;
    // if (node === null) {
    //   this.knot = new Node(data);
    //   return;
    // } else {
    //   const searchTree = function (node) {
    //     if (data < node.data) {
    //       if (node.left === null) {
    //         node.left = new Node(data);
    //         return;
    //       } else if (node.left !== null) {
    //         return searchTree(node.left);
    //       }
    //     } else if (data > node.data) {
    //       if (node.right === null) {
    //         node.right = new Node(data);
    //         return;
    //       } else if (node.right !== null) {
    //         return searchTree(node.right);
    //       }
    //     } else {
    //       return null;
    //     }
    //   };
    //   return searchTree(node);
    // }
  }
  root() {
    let current = this.knot;
    if (current === null) {
      return null;
    }
    if (current.hasOwnProperty("data")) {
      return current;
    }
  }
  min() {
    if (!this.knot) {
      return;
    }
    let current = this.knot;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.knot;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.knot;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  has(data) {
    return searchWithin(this.knot, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      //
      return data < node.data
        ? searchWithin(node.left, data)
        : searchWithin(node.right, data);
    }
    // let current = this.knot;
    // while (current) {
    //   if (data === current.data) {
    //     return true;
    //   }
    //   data < current.data
    //     ? (current = current.left)
    //     : (current = current.right);
    // }
    // return false;
  }

  remove(data) {
    this.knot = removeNode(this.knot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      //
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // если равное значение приходит
        if (!node.left && !node.right) {
          return null;
        }
        //
        // если нет левого, значит есть правый
        if (!node.left) {
          node = node.right;
          return node;
        }
        // если нет правого, значит есть левый
        if (!node.right) {
          node = node.left;
          return node;
        }
        // есть оба поддерева:
        let minFromRight = node.left;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        //
        node.right = removeNode(node.right, minFromRight.data);
        //
        return node;
      }
    }
    // const removeNode = function (node, data) {
    //   if (node === null) return null;
    //   if (data === node.data) {
    //     // потомки отсутствуют
    //     if (node.left === null && node.right === null) return null;
    //     // отсутствует левый узел
    //     if (node.left === null) return node.right;
    //     // отсутствует правый узел
    //     if (node.right === null) return node.left;
    //     // имеется два узла
    //     let tempNode = node.right;
    //     while (tempNode.left !== null) {
    //       tempNode = tempNode.left;
    //     }
    //     node.data = tempNode.data;
    //     node.right = removeNode(node.right, tempNode.data);
    //     return node;
    //   } else if (data < node.data) {
    //     node.left = removeNode(node.right, data);
    //     return node;
    //   } else {
    //     node.right = removeNode(node.right, data);
    //     return node;
    //   }
    // };
    // this.knot = removeNode(this.knot, data);
  }
}
const tree = new BinarySearchTree();
tree.add(4);
tree.add(2);
tree.add(6);
tree.add(1);
tree.add(3);
tree.add(5);
tree.add(7);
tree.remove(4);
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
tree.remove(6);
tree.remove(2);
console.log(tree.min());
console.log(tree.max());
console.log(tree.has(3));
// console.log(tree.find(6));
// console.log(tree.has(3));
// console.log(tree.has(5));
// console.log(tree.root());
