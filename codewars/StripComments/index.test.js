const solution = require("./index.js");

test("should return a list without markers", () => {
  expect(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])).toBe("apples, pears\ngrapes\nbananas");
});
