class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  scoreOfString(s) {
    let score = 0;
    for (let i = 0; i < s.length - 1; i++) {
      let a = s[i].charCodeAt(0);
      let b = s[i + 1].charCodeAt(0);

      if (a < b) {
        score += b - a;
      } else {
        score += a - b;
      }
    }
    return score;
  }
}
