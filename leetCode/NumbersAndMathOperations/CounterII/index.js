// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

function createCounter(init) {
  if (typeof init !== "number") {
    throw new Error("Input must be a number");
  }

  let current = init;
  return {
    increment: function (createCounter) {
      current++;
      return current;
    },
    decrement: function (createCounter) {
      current--;
      return current;
    },
    reset: function (createCounter) {
      current = init;
      return current;
    },
  };
}

module.exports = createCounter;
