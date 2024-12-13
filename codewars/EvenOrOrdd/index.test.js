const evenOrOdd = require("./index.js");

test('should return "Even" when there are even numbers', () => {
  expect(evenOrOdd(4)).toBe("Even");
  expect(evenOrOdd(8)).toBe("Even");
  expect(evenOrOdd(12)).toBe("Even");
  expect(evenOrOdd(-4)).toBe("Even");
});

test('should return "Odd" when there are odd numbers', () => {
  expect(evenOrOdd(1)).toBe("Odd");
  expect(evenOrOdd(3)).toBe("Odd");
  expect(evenOrOdd(9)).toBe("Odd");
  expect(evenOrOdd(-1)).toBe("Odd");
});
