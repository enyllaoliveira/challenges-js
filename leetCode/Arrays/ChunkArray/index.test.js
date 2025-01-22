const chunk = require("./index.js");

test("should returns a chunked array", () => {
  const arr = [1, 2, 3, 4, 5];
  const size = 2;
  const result = chunk(arr, size);
  expect(result).toEqual([[1, 2], [3, 4], [5]]);
});
