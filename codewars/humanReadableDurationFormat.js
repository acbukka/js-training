function formatDuration(seconds) {
  let years = Math.floor(seconds / 365 / 24 / 3600);
  let days = Math.floor(seconds / 3600 / 24);
  let hours = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = Math.floor(seconds % 60);

  if (days >= 1) {
    hours = Math.floor(seconds / 3600) - days * 24;
  }
  if (years >= 1) {
    days = Math.floor(seconds / 3600 / 24) - years * 365;
  }

  let yearsStr = years + ' year';
  let daysStr = days + ' day';
  let hoursStr = hours + ' hour';
  let minsStr = mins + ' minute';
  let secsStr = secs + ' second';

  if (years > 1) yearsStr += 's';
  if (days > 1) daysStr += 's';
  if (hours > 1) hoursStr += 's';
  if (mins > 1) minsStr += 's';
  if (secs > 1) secsStr += 's';

  if (seconds === 0) {
    return 'now';
  }

  if (years !== 0 && days !== 0 && hours !== 0 && mins !== 0 && secs !== 0) {
    return `${yearsStr}, ${daysStr}, ${hoursStr}, ${minsStr} and ${secsStr}`;
  } else if (years !== 0 && days !== 0 && hours !== 0 && mins !== 0) {
    return `${yearsStr}, ${daysStr}, ${hoursStr} and ${minsStr}`;
  } else if (years !== 0 && days !== 0 && hours !== 0) {
    return `${yearsStr}, ${daysStr} and ${hoursStr}`;
  } else if (years !== 0 && days !== 0) {
    return `${yearsStr}, ${daysStr}`;
  } else if (years !== 0 && hours !== 0) {
    return `${yearsStr}, ${hoursStr}`;
  } else if (years !== 0 && mins !== 0) {
    return `${yearsStr}, ${minsStr}`;
  } else if (years !== 0 && secs !== 0) {
    return `${yearsStr}, ${secsStr}`;
  } else if (days !== 0 && hours !== 0 && mins !== 0 && secs !== 0) {
    return `${daysStr}, ${hoursStr}, ${minsStr} and ${secsStr}`;
  } else if (days !== 0 && hours !== 0 && mins !== 0) {
    return `${daysStr}, ${hoursStr} and ${minsStr}`;
  } else if (days !== 0 && hours !== 0 && secs !== 0) {
    return `${daysStr}, ${hoursStr} and ${secsStr}`;
  } else if (days !== 0 && mins !== 0 && secs !== 0) {
    return `${daysStr}, ${minsStr} and ${secsStr}`;
  } else if (days !== 0 && hours !== 0) {
    return `${daysStr} and ${hoursStr}`;
  } else if (days !== 0 && mins !== 0) {
    return `${daysStr}, ${mins}`;
  } else if (days !== 0 && secs !== 0) {
    return `${daysStr} and ${secs}`;
  }

  // 2

  if (hours !== 0 && mins !== 0 && secs !== 0) {
    return `${hoursStr}, ${minsStr} and ${secsStr}`;
  } else if (hours !== 0 && mins !== 0) {
    return `${hoursStr}, ${minsStr}`;
  } else if (hours !== 0 && secs !== 0) {
    return `${hoursStr} and ${secsStr}`;
  } else if (mins !== 0 && secs !== 0) {
    return `${minsStr} and ${secsStr}`;
  } else if (years !== 0) {
    return yearsStr;
  } else if (days !== 0) {
    return daysStr;
  } else if (hours !== 0) {
    return hoursStr;
  } else if (mins !== 0) {
    return minsStr;
  } else if (secs !== 0) {
    return secsStr;
  }
}
console.log(console.log(formatDuration(8802043)));

// Надо убрать переполнение часов при наличии yars или days

console.log(2374326 / 365 / 3600);
