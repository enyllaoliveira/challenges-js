const join = require("./index.js");

describe("join function", () => {
  test("should merge arrays with unique IDs", () => {
    const arr1 = [{ id: 1, x: 1 }];
    const arr2 = [{ id: 2, x: 2 }];

    const result = join(arr1, arr2);

    expect(result).toEqual([
      { id: 1, x: 1 },
      { id: 2, x: 2 },
    ]);
  });

  test("should merge arrays with duplicate IDs, with arr2 overriding arr1", () => {
    const arr1 = [{ id: 1, x: 1 }];
    const arr2 = [{ id: 1, x: 9, y: 10 }];

    const result = join(arr1, arr2);

    expect(result).toEqual([{ id: 1, x: 9, y: 10 }]);
  });

  test("should return an empty array when both inputs are empty", () => {
    const arr1 = [];
    const arr2 = [];

    const result = join(arr1, arr2);

    expect(result).toEqual([]);
  });

  test("should handle empty arrays and non-empty arrays", () => {
    const arr1 = [];
    const arr2 = [{ id: 1, x: 1 }];

    const result = join(arr1, arr2);

    expect(result).toEqual([{ id: 1, x: 1 }]);
  });

  test("should sort the result by ID", () => {
    const arr1 = [{ id: 3, x: 3 }];
    const arr2 = [
      { id: 1, x: 1 },
      { id: 2, x: 2 },
    ];

    const result = join(arr1, arr2);

    expect(result).toEqual([
      { id: 1, x: 1 },
      { id: 2, x: 2 },
      { id: 3, x: 3 },
    ]);
  });
});
