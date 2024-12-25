const booleanToString = require("./index.js");

describe("booleanToString", () => {
  test("should return 'true' for true", () => {
    expect(booleanToString(true)).toBe("true");
  });

  test("should return 'false' for false", () => {
    expect(booleanToString(false)).toBe("false");
  });
});
