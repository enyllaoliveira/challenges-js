const maps = require("./index.js");

describe("maps", () => {
  test("should be a double array", () => {
    expect(maps([1, 2, 3])).toEqual([2, 4, 6]);
    expect(maps([4, 5, 6])).toEqual([8, 10, 12]);
  });
});
