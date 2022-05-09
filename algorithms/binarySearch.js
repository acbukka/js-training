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
  //

  //
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
  }
  //
  // find по сути имеет тот же принцип что и has но мы возвращаем ноду, а не булевое
  find(data) {
    return findWithin(this.knot, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      //
      return data < node.data
        ? findWithin(node.left, data)
        : findWithin(node.right, data);
    }
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
  }
  //
  // В этом методе мы должны найти "корень" нашего дерева
  // Не получаеца :/
  root() {
    if (!this.knot) {
      return;
    }
    let node = this.knot;
    if (node.hasOwnProperty("data")) {
      return node;
    }
  }
  //
  min() {
    if (!this.knot) {
      return;
    }
    //
    let node = this.knot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }
  max() {
    if (!this.knot) {
      return;
    }
    let node = this.knot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}
const tree = new BinarySearchTree();

// Работа с деревом:
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
console.log(tree.find(3));
// console.log(tree.root());
console.log(tree.min());
console.log(tree.max());
console.log(tree.has(5));
// console.log(tree);
// console.log(tree.root.hasOwnProperty("value"));
