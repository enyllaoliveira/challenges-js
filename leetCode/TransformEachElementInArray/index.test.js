// const createHelloWorld = require("./index.js");

// test('should return  "Hello World"', () => {
//   const f = createHelloWorld();
//   expect(f()).toBe("Hello World");
//   expect(f("oi")).toBe("Hello World");
// });

const map = require("./index.js");

test("should returns a new array with a transformation applied to each element.", () => {
  const arr = [1, 2, 3, 4];
  const fn = (value) => value * 2;
  const resultNewArr = map(arr, fn);
  expect(resultNewArr).toEqual([2, 4, 6, 8]);
});
