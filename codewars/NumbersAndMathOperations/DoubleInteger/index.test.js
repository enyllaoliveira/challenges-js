const doubleInteger = require("./index.js");

describe("doubleInteger", () => {
  test("should double the given number", () => {
    expect(doubleInteger(5)).toBe(10);
    expect(doubleInteger(0)).toBe(0);
  });

  test("should throw an error for non-number inputs", () => {
    expect(() => doubleInteger("a")).toThrow("Input must be a number");
    expect(() => doubleInteger(null)).toThrow("Input must be a number");
    expect(() => doubleInteger(undefined)).toThrow("Input must be a number");
  });

  test("should throw an error for negative numbers", () => {
    expect(() => doubleInteger(-1)).toThrow("Input must be a positive number");
    expect(() => doubleInteger(-10)).toThrow("Input must be a positive number");
  });
});
