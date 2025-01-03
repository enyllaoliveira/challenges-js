const isEmpty = require("./index.js");

describe("isEmpty function", () => {
  test("should returns true for empty array", () => {
    expect(isEmpty([])).toBe(true);
  });

  test("should returns false for non-empty array", () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test("should returns true for empty object", () => {
    expect(isEmpty({})).toBe(true);
  });

  test("should returns false for object with keys", () => {
    expect(isEmpty({ key: "value" })).toBe(false);
  });

  test("should returns true for null", () => {
    expect(isEmpty(null)).toBe(true);
  });

  test("should return true for undefined", () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test("should return false for non-object, non-array values", () => {
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty("hello")).toBe(false);
    expect(isEmpty(true)).toBe(false);
  });
});
