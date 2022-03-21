// function stringify(list) {
//   let thisList = JSON.stringify(list)
//     .replace(/[{}:""]/gi, '')
//     .replace(/Node/gi, '')
//     .replace(/next/gi, '')
//     .replace(/data/gi, '')
//     .replace(/,/gi, ' ');
//   let newArr = thisList.split(' ');
//   let stringify = '';
//   for (let i = 0; i < newArr.length; i++) {
//     if (i + 1 < newArr.length) {
//       stringify += newArr[i] + ' -> ';
//     } else {
//       stringify += newArr[i];
//     }
//   }
//   return stringify;
// }
// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }
console.log(stringify(new Node(1, new Node(2, new Node(3)))));
// console.log(
//   stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))))
// );

// Способ 2
function stringify(list) {
  console.log(list);
  return list === null ? 'null' : `${list.data} -> ${stringify(list.next)}`;
}
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

console.log(stringify(new Node(1, new Node(2, new Node(3)))));
