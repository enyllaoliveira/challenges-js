const ArrayPrototypeLasst = require("./index.js");

test("should return the last element in the array. ", () => {
  const nums = [null, {}, 3];
  expect(nums.last()).toBe(3);
});

test("If there are no elements in the array, it should return -1..", () => {
  const nums = [];
  expect(nums.last()).toBe(-1);
});
