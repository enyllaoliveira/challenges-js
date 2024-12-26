const reduce = require("./index");

test("reduces an array by summing all values", () => {
  const nums = [1, 2, 3, 4];
  const fn = (accumulator, currentValue) => accumulator + currentValue;
  const init = 0;
  const result = reduce(nums, fn, init);
  expect(result).toBe(10);
});

test("reduces an array by multiplying all values", () => {
  const nums = [1, 2, 3, 4];
  const fn = (accumulator, currentValue) => accumulator * currentValue;
  const init = 1;
  const result = reduce(nums, fn, init);
  expect(result).toBe(24);
});

test("returns the initial value for an empty array", () => {
  const nums = [];
  const fn = (accumulator, currentValue) => accumulator + currentValue;
  const init = 5;
  const result = reduce(nums, fn, init);
  expect(result).toBe(5);
});

test("uses initial value in the calculation", () => {
  const nums = [2, 3];
  const fn = (accumulator, currentValue) => accumulator + currentValue;
  const init = 10;
  const result = reduce(nums, fn, init);
  expect(result).toBe(15);
});

test("handles subtraction correctly", () => {
  const nums = [10, 5, 1];
  const fn = (accumulator, currentValue) => accumulator - currentValue;
  const init = 20;
  const result = reduce(nums, fn, init);
  expect(result).toBe(4);
});
