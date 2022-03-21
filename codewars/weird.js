
// ???
function to(string) {
  string = string.split('');
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newStr += string[i].toUpperCase();
    } else {
      newStr += string[i].toLowerCase();
    }
  }
  return newStr;
}

function toWeirdCase(string) {
  string = string.split(' ');
  let newStr = [];
  for (let i = 0; i < string.length; i++) {
    newStr.push(to(string[i]));
  }
  return newStr.join(' ');
}