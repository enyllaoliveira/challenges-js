const addTwoPromises = require("./index.js");

test("should returns a new promise.", async () => {
  const promise1 = Promise.resolve(2);
  const promise2 = Promise.resolve(3);
  const result = await addTwoPromises(promise1, promise2);

  expect(result).toBe(5);
});
