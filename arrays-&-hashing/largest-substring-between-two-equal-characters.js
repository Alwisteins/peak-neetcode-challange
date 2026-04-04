function maxLengthBetweenEqualCharacters(s) {
  const firstChar = new Map();
  let maxLength = -1;

  for (let i = 0; i < s.length; i++) {
    let currChar = s[i];

    if (firstChar.has(currChar)) {
      maxLength = Math.max(maxLength, i - firstChar.get(currChar) - 1);
    } else {
      firstChar.set(currChar, i);
    }
  }
  return maxLength;
}
