const argumentsLength = require("./index.js");

test("should returns the count of arguments passed to it.", () => {
  expect(argumentsLength({}, null, "3")).toBe(3);
  expect(argumentsLength(5)).toBe(1);
});
