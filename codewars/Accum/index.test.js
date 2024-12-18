const accum = require("./index.js");

test("should to create a accum function", () => {
  expect(accum("abcd")).toBe("A-Bb-Ccc-Dddd");
});
