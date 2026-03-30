class Solution {
  /**
   * @param {string[]} words
   * @return {boolean}
   */
  makeEqual(words) {
    let count = new Map();

    for (let w of words) {
      for (let c of w) {
        count.set(c, (count.get(c) || 0) + 1);
      }
    }

    for (let c of count.values()) {
      if (c % words.length !== 0) return false;
    }
    return true;
  }
}
