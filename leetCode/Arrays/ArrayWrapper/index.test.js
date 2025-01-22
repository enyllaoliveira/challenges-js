const arrayWrapper = require("./index.js");

describe("ArrayWrapper", () => {
  test("should return the correct sum when using + operator", () => {
    const obj1 = new arrayWrapper([1, 2]);
    const obj2 = new arrayWrapper([3, 4]);
    expect(obj1 + obj2).toBe(10);
  });

  test("should return the correct string representation", () => {
    const obj = new arrayWrapper([5, 6, 7]);
    expect(String(obj)).toBe("[5,6,7]");
  });

  test("should handle an empty array correctly", () => {
    const obj = new arrayWrapper([]);

    expect(obj + obj).toBe(0);
    expect(String(obj)).toBe("[]");
  });

  test("should handle single-element arrays", () => {
    const obj = new arrayWrapper([10]);

    expect(obj + obj).toBe(20);
    expect(String(obj)).toBe("[10]");
  });

  test("should handle large arrays", () => {
    const obj1 = new arrayWrapper([1, 2, 3, 4, 5]);
    const obj2 = new arrayWrapper([6, 7, 8, 9, 10]);

    expect(obj1 + obj2).toBe(55);
    expect(String(obj1)).toBe("[1,2,3,4,5]");
    expect(String(obj2)).toBe("[6,7,8,9,10]");
  });
});
