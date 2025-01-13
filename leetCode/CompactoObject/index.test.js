const compactObject = require("./index.js");

describe("compactObject", () => {
  test("should compact an array with falsy values", () => {
    const input = [null, 0, false, 1];
    const output = [1];
    expect(compactObject(input)).toEqual(output);
  });

  test("should compact an object with falsy values", () => {
    const input = { a: null, b: [false, 1] };
    const output = { b: [1] };
    expect(compactObject(input)).toEqual(output);
  });

  test("should handle nested objects and arrays", () => {
    const input = [null, 0, 5, [0], { a: "" }];
    const output = [5, [], {}];
    expect(compactObject(input)).toEqual(output);
  });

  test("should return empty array when all values are falsy", () => {
    const input = [null, 0, false, undefined, NaN, ""];
    const output = [];
    expect(compactObject(input)).toEqual(output);
  });

  test("should return empty object when all values are falsy", () => {
    const input = { a: null, b: 0, c: false, d: undefined, e: NaN, f: "" };
    const output = {};
    expect(compactObject(input)).toEqual(output);
  });

  test("should handle deeply nested objects", () => {
    const input = {
      a: {
        b: null,
        c: {
          d: false,
          e: 0,
          f: "",
          g: 42,
        },
      },
    };
    const output = {
      a: {
        c: {
          g: 42,
        },
      },
    };
    expect(compactObject(input)).toEqual(output);
  });

  test("should return primitive values unchanged", () => {
    expect(compactObject(0)).toBe(0);
    expect(compactObject(null)).toBe(null);
    expect(compactObject(false)).toBe(false);
    expect(compactObject("")).toBe("");
    expect(compactObject(42)).toBe(42);
    expect(compactObject("hello")).toBe("hello");
  });
});
