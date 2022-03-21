const getSeason = function (date) {
  let month;
  if (
    (date instanceof Date === false ||
      Object.getOwnPropertyNames(date).length > 0) &&
    arguments.length > 0
  ) {
    throw new Error("Invalid date!");
  }
  if (date === undefined) {
    return "Unable to determine the time of year!";
  } else {
    month = date.getMonth();
  }
  // console.log(month);
  switch (month) {
    case 11:
    case 0:
    case 1:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "autumn";
  }
  console.log(month);
};
console.log(getSeason({ John: "Smith" }));
console.log(getSeason());
console.log(new Date(866, 2, 10, 12, 53, 10, 825).getMonth());
