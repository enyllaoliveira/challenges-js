const isIsogram = require("./index.js");

test("should return true when there are isogram example", () => {
  expect(isIsogram("Dermatoglyphics")).toBe(true);
  expect(isIsogram("Math")).toBe(true);
});

test("should return false when there are not isogram example", () => {
  expect(isIsogram("aba")).toBe(false);
  expect(isIsogram("moOse")).toBe(false);
});
