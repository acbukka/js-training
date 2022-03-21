const dreamTeam = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      newArr.push(arr[i]);
    }
  }
  newArr = newArr.map((item) => item.replace(/ /g, ""));
  console.log(newArr);
  return newArr
    .map((item) => item[0].toUpperCase())
    .sort()
    .join("");
};
console.log(
  dreamTeam([
    ["David Abram"],
    ["Robin Attfield"],
    "Thomas Berry",
    ["Paul R.Ehrlich"],
    "donna Haraway",
    " BrIaN_gOodWiN  ",
    {
      0: "Serenella Iovino",
    },
    "Erazim Kohak",
    "  val_plumwood",
  ])
);
