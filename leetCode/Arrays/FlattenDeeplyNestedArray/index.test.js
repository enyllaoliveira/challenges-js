const flat = require("./index.js");

describe("flat function", () => {
  test("should handle a completely nested array with n=1", () => {
    const arr = [1, [2, [3, [4]]]];
    const n = 1;
    const result = flat(arr, n);
    expect(result).toEqual([1, 2, [3, [4]]]);
  });

  test("should handle a completely nested array with n=2", () => {
    const arr = [1, [2, [3, [4]]]];
    const n = 2;
    const result = flat(arr, n);
    expect(result).toEqual([1, 2, 3, [4]]);
  });

  test("should handle a completely nested array with n=3", () => {
    const arr = [1, [2, [3, [4]]]];
    const n = 3;
    const result = flat(arr, n);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("should handle an empty array", () => {
    const arr = [];
    const n = 1;
    const result = flat(arr, n);
    expect(result).toEqual([]);
  });

  test("should handle an array without subarrays", () => {
    const arr = [1, 2, 3, 4];
    const n = 1;
    const result = flat(arr, n);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("should handle a completely nested array with n=0", () => {
    const arr = [1, [2, [3, [4]]]];
    const n = 0;
    const result = flat(arr, n);
    expect(result).toEqual([1, [2, [3, [4]]]]);
  });
});
