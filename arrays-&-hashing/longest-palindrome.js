function longestPalindrome(s) {
  let count = new Map();
  let res = 0;

  for (let c of s) {
    let curr = count.get(c) || 0;
    count.set(c, curr + 1);
    if ((curr + 1) % 2 === 0) {
      res += 2;
    }
  }

  for (let n of count.values()) {
    if (n % 2) {
      res += 1;
      break;
    }
  }

  return res;
}
