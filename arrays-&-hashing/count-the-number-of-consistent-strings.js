class Solution {
  /**
   * @param {string} allowed
   * @param {string[]} words
   * @return {number}
   */
  countConsistentStrings(allowed, words) {
    const charMap = new Map();
    for (const c of allowed) {
      charMap.set(c, true);
    }

    let count = 0;

    for (const word of words) {
      let good = true;

      for (const c of word) {
        if (!charMap.has(c)) {
          good = false;
          break;
        }
      }

      if (good) count++;
    }

    return count;
  }
}
