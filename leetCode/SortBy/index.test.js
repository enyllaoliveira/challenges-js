const sortBy = require("./index.js");

test("should return a sorted array sortedArr", () => {
  const arr = [5, 4, 1, 2, 3];
  const fn = (x) => x;
  const sortedArr = sortBy(arr, fn);
  expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
});
