function getCard() {
  let outArr = [];
  for (let i = 0; i < 5; i++) {
    let pushing;
    do {
      pushing = 'B' + Math.floor(Math.random() * (15 - 1) + 1);
    }
    while (outArr.includes(pushing));
    outArr.push(pushing);
  }
  for (let i = 0; i < 5; i++) {
    let pushing;
    do {
      pushing = 'I' + Math.floor(Math.random() * (30 - 16) + 16);
    }
    while (outArr.includes(pushing));
    outArr.push(pushing);
  }
  for (let i = 0; i < 4; i++) {
    let pushing;
    do {
      pushing = 'N' + Math.floor(Math.random() * (45 - 31) + 31);
    }
    while (outArr.includes(pushing));
    outArr.push(pushing);
  }
  for (let i = 0; i < 5; i++) {
    let pushing;
    do {
      pushing = 'G' + Math.floor(Math.random() * (60 - 46) + 46);
    }
    while (outArr.includes(pushing));
    outArr.push(pushing);
  }
  for (let i = 0; i < 5; i++) {
    let pushing;
    do {
      pushing = 'O' + Math.floor(Math.random() * (75 - 61) + 61);
    }
    while (outArr.includes(pushing));
    outArr.push(pushing);
  }
  return outArr;
}
console.log(getCard());