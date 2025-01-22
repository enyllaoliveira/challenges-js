const memoize = require("./index.js");

test("return a function that will never be called twice with the same inputs. Instead it will return a cached value.", () => {
  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
  });
  expect(memoizedFn(2, 3)).toBe(5);
  expect(memoizedFn(2, 3)).toBe(5);
  expect(callCount).toBe(1);
});
