// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b) {
  if (typeof b === "boolean") {
    return b.toString();
  } else {
    return "input is not a boolean";
  }
}

console.log(booleanToString(true));
console.log(booleanToString(false));
console.log(booleanToString("false"));

module.exports = booleanToString;
