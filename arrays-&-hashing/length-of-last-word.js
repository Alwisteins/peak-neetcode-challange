class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLastWord(s) {
    return s
      .split(" ")
      .filter((s) => s)
      .at(-1).length;
  }
}
