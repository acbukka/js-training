class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(list, k) {
  if (list === null) return null;
  else {
    list.next = removeKFromList(l.next, k);
    return list.value === k ? list.next : list;
  }
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

// console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));
let list = convertArrayToList([3, 1, 2, 3, 4, 5]);
// let list = convertArrayToList([1, 2, 3, 3, 4, 5]);
console.log(removeKFromList(list, 3));

// ListNode {
//   value: 3,
//   next: ListNode { value: 1, next: ListNode { value: 2, next: [ListNode] } }
// }
