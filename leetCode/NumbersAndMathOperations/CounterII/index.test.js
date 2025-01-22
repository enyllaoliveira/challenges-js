const createCounter = require("./index.js");

test("should return a working createCounter", () => {
  const counter = createCounter(5);

  expect(counter.increment()).toBe(6);
  expect(counter.reset()).toBe(5);
  expect(counter.decrement()).toBe(4);
});
