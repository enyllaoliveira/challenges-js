// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  if (typeof i !== "number") {
    throw new Error("Input must be a number");
  }

  if (i < 0) {
    throw new Error("Input must be a positive number");
  }

  return i * 2;
}

module.exports = doubleInteger;
