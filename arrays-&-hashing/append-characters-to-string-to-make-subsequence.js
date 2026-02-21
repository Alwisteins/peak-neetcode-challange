class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {number}
   */
  appendCharacters(s, t) {
    let ac = 0;
    let word = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === t[word]) {
        word++;
      }
    }

    return t.length - word;
  }
}
