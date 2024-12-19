const simpleMultiplication = require("./index.js");

test("should return an even number ", () => {
  expect(simpleMultiplication(4)).toBe(32);
});

test("should return an odd number", () => {
  expect(simpleMultiplication(1)).toBe(9);
});
