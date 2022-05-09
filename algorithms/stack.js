class Stack {
  constructor() {
    // if (isNaN(maxSize)) {
    //   maxSize = 10;
    // }
    // this.maxSize = maxSize;
    this.container = [];
  }
  push(element) {
    this.container.push(element);
  }
  pop() {
    return this.container.pop();
  }
  peek() {
    return this.container[this.container.length - 1];
  }
}
const stack = new Stack();
stack.push(1);
stack.peek();
stack.pop();
console.log(stack.pop());
