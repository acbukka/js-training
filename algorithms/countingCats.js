console.log(
  [].reduce((a, b) => a.concat(b)).filter((item) => item === "^^").length
);
