const createCounter = require("./index.js");

test("should returns 1 more than the previous value every subsequent time it is called", () => {
  const counter = createCounter(1);
  expect(counter()).toBe(1);
  expect(counter()).toBe(2);
  expect(counter()).toBe(3);
});
