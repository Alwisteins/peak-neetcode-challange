class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isSubsequence(s, t) {
    let found = 0;

    for (let i = 0; i < t.length; i++) {
      if (t[i] === s[found]) {
        found++;
      }
    }

    return found === s.length;
  }
}
