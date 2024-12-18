const findSmallestInt = require("./index.js");

test("should return the smallest", () => {
  expect(findSmallestInt([34, 15, 88, 2])).toBe(2);
  expect(findSmallestInt([-345, -1, 100])).toBe(-345);
});
