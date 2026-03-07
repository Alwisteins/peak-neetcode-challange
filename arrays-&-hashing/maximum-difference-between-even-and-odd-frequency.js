class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  maxDifference(s) {
    const count = new Map();

    for (const char of s) {
      count.set(char, (count.get(char) || 0) + 1);
    }

    let maxOdd = -Infinity;
    let minEven = Infinity;

    for (const freq of count.values()) {
      if (freq % 2 === 1) {
        maxOdd = Math.max(maxOdd, freq);
      } else {
        minEven = Math.min(minEven, freq);
      }
    }

    return maxOdd - minEven;
  }
}
