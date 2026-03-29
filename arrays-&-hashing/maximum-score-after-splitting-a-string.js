class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  maxScore(s) {
    let zero = 0;
    let one = s.split("1").length - 1;
    let res = 0;

    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === "0") {
        zero += 1;
      } else {
        one -= 1;
      }
      res = Math.max(res, zero + one);
    }
    return res;
  }
}
