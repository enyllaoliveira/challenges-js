const Calculator = require("./index.js");

describe("Calculator", () => {
  test("should perform addition", () => {
    const calc = new Calculator(10);
    expect(calc.add(5).getResult()).toBe(15);
  });

  test("should perform subtraction", () => {
    const calc = new Calculator(10);
    expect(calc.subtract(3).getResult()).toBe(7);
  });

  test("should perform multiplication", () => {
    const calc = new Calculator(10);
    expect(calc.multiply(2).getResult()).toBe(20);
  });

  test("should perform division", () => {
    const calc = new Calculator(20);
    expect(calc.divide(4).getResult()).toBe(5);
  });

  test("should throw an error when dividing by zero", () => {
    const calc = new Calculator(10);
    expect(() => calc.divide(0)).toThrow("Division by zero is not allowed");
  });

  test("should perform power operation", () => {
    const calc = new Calculator(2);
    expect(calc.power(3).getResult()).toBe(8);
  });

  test("should handle method chaining", () => {
    const calc = new Calculator(10);
    const result = calc
      .add(5)
      .subtract(3)
      .multiply(2)
      .divide(6)
      .power(2)
      .getResult();
    expect(result).toBeCloseTo(16);
  });
});
