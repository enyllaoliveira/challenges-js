// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

function customExpect(val) {
  return {
    toBe: function (expected) {
      if (val !== expected) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: function (expected) {
      if (val === expected) {
        throw new Error("Equal");
      }
      return true;
    },
  };
}

module.exports = customExpect;
