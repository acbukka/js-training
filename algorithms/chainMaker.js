const chainMaker = {
  newArr: [],
  getLength: function () {
    return chainMaker.newArr.length;
  },
  addLink: function (value) {
    this.newArr.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink: function (position) {
    if (
      position < 1 ||
      position > this.newArr.length ||
      typeof position !== "number"
    ) {
      this.newArr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.newArr.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain: function () {
    this.newArr.reverse();
    return chainMaker;
  },
  finishChain: function () {
    let finishArr = this.newArr;
    this.newArr = [];
    return finishArr.reduce((a, b) => `${a}~~${b}`);
  },
};
chainMaker
  .addLink(function () {})
  .addLink("2nd")
  .addLink("3rd")
  .removeLink(2)
  .reverseChain()
  .finishChain();
console.log(
  chainMaker
    .addLink("GHI")
    .addLink(null)
    .reverseChain()
    .addLink(333)
    .reverseChain()
    .reverseChain()
    .addLink(0)
    .reverseChain()
    .reverseChain()
    .addLink("GHI")
    .finishChain()
);
console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));

// getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
