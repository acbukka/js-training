const rgb = (r, g, b) => toHex(r) + toHex(g) + toHex(b);

function toHex(numb) {
  if (numb <= 0) return '00';
  if (numb > 255) return 'FF';

  let newStr = numb.toString(16).toUpperCase();
    while (newStr.length < 2) {
      newStr = '0' + newStr;
  }
  return newStr;
}
console.log(rgb(255, 255, 2));