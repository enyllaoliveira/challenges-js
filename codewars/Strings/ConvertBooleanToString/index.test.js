const booleanToString = require("./index.js");

describe("booleanToString", () => {
  test("should return a string", () => {
    expect(booleanToString(true)).toBe("true");
    expect(booleanToString(false)).toBe("false");
  });

  test("should return a invalid input", () => {
    expect(booleanToString("hello")).toBe("input is not a boolean");
    expect(booleanToString(123)).toBe("input is not a boolean");
  });
});
