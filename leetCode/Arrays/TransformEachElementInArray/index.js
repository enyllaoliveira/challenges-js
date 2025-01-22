// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

function map(arr, fn) {
  const newMap = [];

  for (let i = 0; i < arr.length; i++) {
    newMap.push(fn(arr[i], i));
  }

  return newMap;
}

module.exports = map;
