const boolToWord = require("./index.js");

describe("boolToWord", () => {
  test("should return 'true' for true", () => {
    expect(boolToWord(true)).toBe("Yes");
  });

  test("should return 'false' for false", () => {
    expect(boolToWord(false)).toBe("No");
  });
});
