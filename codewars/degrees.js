var whatTimeIsIt = function (angle) {
  let times = 0;
  let minutes = 0;
  let returning = '';
  times = Math.floor(angle / 30);
  if (times === 0) {
    times = 12;
  }
  minutes = Math.floor(angle % 30 * 2);
  times = times.toString();
  minutes = minutes.toString();
  while (times.length < 2) {
    times = '0' + times;
  }
  while (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  console.log(times, minutes);
  returning = `${times}:${minutes}`;
  return returning;
};
console.log(whatTimeIsIt(360));