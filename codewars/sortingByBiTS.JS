function sortByBit(arr) {
  // Получаем массив битных значений
  let newArr = arr.map(item => {
    return +item.toString(2).replace(/0/gi, '').length;
  });
  console.log(newArr);
  let newObj = {};
  let duplicates = [];
  // Помещаем дубликаты в отдельный массив, остальное заполняем значением по индексу
  for (let i = 0; i < newArr.length; i++) {
    if (newObj.hasOwnProperty(arr[i])) {
      duplicates.push(arr[i]);
      continue;
    }
    newObj[arr[i]] = newArr[i];
  }
  // Получаем ключи объекта
  let objKeys = [];
  for (let key in newObj) {
    objKeys.push(key);
  }
  // Сортируем по значениям и получаем массив
  let sortable = objKeys.sort(function (a, b) {
    return newObj[a] - newObj[b];
  });
  let newSortable = [];
  for (let i = 0; i < sortable.length; i++) {
    newSortable.push(+sortable[i]);
  }
  // Соединяем отсортированные значения с дубликатами и фильтруем по дубликатам
  let newSortable2 = newSortable.concat(duplicates);
  newSortable2.sort(function (a, b) {
    return newSortable2.indexOf(a) - newSortable2.indexOf(b);
  });
  return newSortable2;
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));

// 'Легкий' способ
const sortByBit2 = arr =>
  arr.sort(
    (a, b) =>
      a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b
  );
console.log(sortByBit2([3, 8, 3, 6, 5, 7, 9, 1]));
