function isIsogram(str) {
  const lowerCaseStr = str.toLowerCase();

  for (let i = 0; i < lowerCaseStr.length; i++) {
    const char = lowerCaseStr[i];

    if (lowerCaseStr.indexOf(char, i + 1) !== -1) {
      return false;
    }
  }
  return true;
}

module.exports = isIsogram;
