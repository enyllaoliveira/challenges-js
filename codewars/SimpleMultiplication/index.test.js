const simpleMultiplication = require("./index.js");

test("should return an even number ", () => {
  expect(simpleMultiplication(2)).toBe(16);
});

test("should return an odd number", () => {
  expect(simpleMultiplication(1)).toBe(9);
});
