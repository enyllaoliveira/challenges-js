const createHelloWorld = require("./index.js");

test('should return  "Hello World"', () => {
  const f = createHelloWorld();
  expect(f()).toBe("Hello World");
  expect(f("oi")).toBe("Hello World");
});
