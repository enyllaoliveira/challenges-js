const compose = require("./index.js");

test("composes functions in the correct order", () => {
  const functions = [(x) => x + 1, (x) => x * 2, (x) => x - 3];

  const fn = compose(functions);
  expect(fn(4)).toBe(3);
});
