function recycle(array) {
  let newArr = [[], [], [], []];
  for (let i = 0; i < array.length; i++) {
    if (array[i].material === 'paper' || array[i].secondMaterial === 'paper') {
      newArr[0].push(array[i].type);
    }
    if (array[i].material === 'glass' || array[i].secondMaterial === 'glass') {
      newArr[1].push(array[i].type);
    }
    if (
      array[i].material === 'organic' ||
      array[i].secondMaterial === 'organic'
    ) {
      newArr[2].push(array[i].type);
    }
    if (
      array[i].material === 'plastic' ||
      array[i].secondMaterial === 'plastic'
    ) {
      newArr[3].push(array[i].type);
    }
  }
  console.log(newArr);
}
console.log(
  recycle([
    { type: 'rotten apples', material: 'organic' },
    {
      type: 'out of date yogurt',
      material: 'organic',
      secondMaterial: 'plastic',
    },
    { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
    { type: 'amazon box', material: 'paper' },
    { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' },
  ])
);
