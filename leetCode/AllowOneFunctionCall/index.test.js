const Once = require("./index.js");

test("return a new function that is identical to the original function except that it ensures fn is called at most once.", () => {
  const add = (a, b) => a + b;
  const addOnce = Once(add);
  expect(addOnce(1, 2)).toBe(3);
  expect(addOnce(3, 4)).toBe(undefined);
});
