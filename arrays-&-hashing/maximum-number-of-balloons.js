class Solution {
  /**
   * @param {string} text
   * @return {number}
   */
  maxNumberOfBalloons(text) {
    let freq = {};

    for (const char of text) {
      freq[char] = (freq[char] || 0) + 1;
    }

    return Math.min(
      freq["b"] || 0,
      freq["a"] || 0,
      Math.floor((freq["l"] || 0) / 2),
      Math.floor((freq["o"] || 0) / 2),
      freq["n"] || 0
    );
  }
}
