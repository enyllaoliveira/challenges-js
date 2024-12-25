const numberToString = require("./index.js");

test("should convert number to string", () => {
  expect(numberToString(123)).toBe("123");
  expect(numberToString(0)).toBe("0");
});
