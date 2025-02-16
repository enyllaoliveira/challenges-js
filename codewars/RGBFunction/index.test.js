const rgb = require("./index.js");

test("should to create a RGB function", () => {
  expect(rgb(255, 255, 255)).toBe("FFFFFF");
});
