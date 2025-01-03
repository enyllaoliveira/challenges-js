// Is Object Empty
// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

var isEmpty = function (obj) {
  if (obj == null) return true;

  if (typeof obj === "object") {
    return Object.keys(obj).length === 0;
  }
  if (Array.isArray(obj)) {
    return obj.lengh === 0;
  }
  return false;
};
module.exports = isEmpty;
