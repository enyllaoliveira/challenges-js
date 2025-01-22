const promiseAll = require("./index.js");

describe("promiseAll", () => {
  test("resolves with all values in order if all promises succeed", async () => {
    const asyncFn1 = () => Promise.resolve(1);
    const asyncFn2 = () => Promise.resolve(2);
    const asyncFn3 = () => Promise.resolve(3);

    const result = await promiseAll([asyncFn1, asyncFn2, asyncFn3]);

    expect(result).toEqual([1, 2, 3]);
  });

  test("rejects with the first error if any promise fails", async () => {
    const asyncFn1 = () => Promise.resolve(1);
    const asyncFn2 = () => Promise.reject("Error!");
    const asyncFn3 = () => Promise.resolve(3);

    await expect(promiseAll([asyncFn1, asyncFn2, asyncFn3])).rejects.toBe(
      "Error!"
    );
  });

  test("resolves immediately with an empty array if input is empty", async () => {
    const result = await promiseAll([]);

    expect(result).toEqual([]);
  });
});
