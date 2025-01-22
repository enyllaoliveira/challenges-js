const minMax = require("./index.js");

describe("MinMax", () => {
  test("should return the minimum and maximum values", () => {
    const result = minMax([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 5]);
  });
});
