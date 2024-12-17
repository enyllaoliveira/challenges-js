const toJadenCase = require("./index.js");

test("should convert string to JadenCase", () => {
  expect(toJadenCase("how can mirrors be real")).toBe(
    "How Can Mirrors Be Real"
  );
  expect(toJadenCase("hello world")).toBe("Hello World");
});
