class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  enqueue(value) {
    let node = new ListNode(value),
      current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }
  dequeue() {
    let current = this.head;

    if (current) {
      this.head = this.head.next; // moves the head link to the second Node in the Queue
      this.length--;
      return current.value;
    }

    return null;
  }
  getUnderlyingList() {
    if (this.head) {
      return this.head;
    }

    return null;
  }
}
const queue = new Queue();
queue.enqueue(1); // adds the element to the queue
queue.enqueue(3);
queue.dequeue();
console.log(queue.front());
