const bmi = require("./index.js");

test("shoult to show the BMI index", () => {
  expect(bmi(50, 1.8)).toBe("Underweight");
  expect(bmi(80, 1.8)).toBe("Normal");
  expect(bmi(90, 1.8)).toBe("Overweight");
  expect(bmi(100, 1.8)).toBe("Obese");
});
