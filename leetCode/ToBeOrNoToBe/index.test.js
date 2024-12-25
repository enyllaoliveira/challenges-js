const customExpect = require("./index.js");

test("toBe should return true for equal values", () => {
  expect(customExpect(5).toBe(5)).toBe(true);
});

test("toBe should throw an error for unequal values", () => {
  expect(() => customExpect(5).toBe(10)).toThrow("Not Equal");
});

test("notToBe should return true for unequal values", () => {
  expect(customExpect(5).notToBe(10)).toBe(true);
});

test("notToBe should throw an error for equal values", () => {
  expect(() => customExpect(5).notToBe(5)).toThrow("Equal");
});
