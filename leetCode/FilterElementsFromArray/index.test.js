const filter = require("./index.js");

test("should returns a new array with a transformation applied to each element.", () => {
  const arr = [1, 2, 3, 4];
  const fn = (value) => value > 2;
  const resultNewArr = filter(arr, fn);
  expect(resultNewArr).toEqual([3, 4]);
});
