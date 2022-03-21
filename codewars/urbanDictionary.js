var WordDictionary = function () {
  this.dictionary = [];
};

WordDictionary.prototype.addWord = function (word) {
  this.dictionary.push(word);
};

WordDictionary.prototype.search = function (word) {
  let reg = new RegExp(`^${word}$`);
  return this.dictionary.some(item => item.match(reg));
};

// ПОВТОРИ ЭТО
// THIS И РЕГУЛЯРКИ
