// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

const toJadenCase = require("./index.js");

test("should convert string to JadenCase", () => {
  expect(toJadenCase("how can mirrors be real")).toBe(
    "How Can Mirrors Be Real"
  );
  expect(toJadenCase("hello world")).toBe("Hello World");
});
