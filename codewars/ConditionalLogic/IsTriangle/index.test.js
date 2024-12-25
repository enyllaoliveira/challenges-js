const isTriangle = require("./index.js");

test("adds 1 + 2 to equal 3", () => {
  expect(isTriangle(1, 2, 2)).toBe(true);
  expect(isTriangle(4, 2, 3)).toBe(true);
  expect(isTriangle(2, 2, 2)).toBe(true);
  expect(isTriangle(1, 2, 3)).toBe(false);
  expect(isTriangle(-5, 1, 3)).toBe(false);
  expect(isTriangle(0, 2, 3)).toBe(false);
  expect(isTriangle(1, 2, 9)).toBe(false);
});
