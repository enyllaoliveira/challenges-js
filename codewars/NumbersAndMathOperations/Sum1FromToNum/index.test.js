const summation = require("./index.js");

test("should return the correct summation", () => {
  expect(summation(1)).toBe(1);
  expect(summation(2)).toBe(3);
  expect(summation(8)).toBe(36);
});
