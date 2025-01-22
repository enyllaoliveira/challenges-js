const arrayPrototypeGroupBy = require("./index.js");

test("should return a grouped version of the array", () => {
  const array = [{ id: "1" }, { id: "1" }, { id: "2" }];

  const fn = (item) => item.id;

  const expectedResult = {
    1: [{ id: "1" }, { id: "1" }],
    2: [{ id: "2" }],
  };

  expect(array.groupBy(fn)).toEqual(expectedResult);
});
