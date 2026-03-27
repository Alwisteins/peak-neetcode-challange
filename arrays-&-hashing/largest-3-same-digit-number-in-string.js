class Solution {
  /**
   * @param {string} num
   * @return {string}
   */
  largestGoodInteger(num) {
    let maxDigit = "";
    for (let i = 2; i < num.length; i++) {
      if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
        if (num[i] > maxDigit) maxDigit = num[i];
      }
    }
    return maxDigit.repeat(3);
  }
}
